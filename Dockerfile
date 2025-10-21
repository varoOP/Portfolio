# Multi-stage build for React app
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the React app
RUN npm run build

# Production stage with Alpine and Nginx
FROM nginx:alpine

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built React app from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Create necessary nginx directories with full permissions
RUN mkdir -p /var/run/nginx /var/cache/nginx /var/log/nginx && \
    chmod -R 777 /var/run/nginx /var/cache/nginx /var/log/nginx && \
    chown -R nginx:nginx /var/run/nginx /var/cache/nginx /var/log/nginx /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:80/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
