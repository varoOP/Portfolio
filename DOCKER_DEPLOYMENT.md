# Docker Deployment Guide

This guide explains how to deploy your portfolio using Docker containers.

## 🐳 How It Works

1. **GitHub Actions** builds a Docker image on every tagged release
2. **Docker Hub** stores the image for easy pulling
3. **Your server** pulls and runs the latest image

## 🚀 Quick Setup

### 1. GitHub Secrets

Add these secrets to your GitHub repository (Settings → Secrets):

| Secret | Description | Example |
|--------|-------------|---------|
| `DOCKER_USERNAME` | Your Docker Hub username | `yourusername` |
| `DOCKER_PASSWORD` | Your Docker Hub password/token | `yourpassword` |

### 2. Deploy to Your Server

```bash
# Pull the latest image
docker pull your-username/portfolio:latest

# Run with docker-compose
docker-compose up -d

# Or run directly
docker run -d \
  --name portfolio-website \
  -p 80:80 \
  --restart unless-stopped \
  your-username/portfolio:latest
```

### 3. Update Deployment

```bash
# Pull latest image
docker pull your-username/portfolio:latest

# Stop current container
docker-compose down

# Start with new image
docker-compose up -d
```

## 🏷️ Creating a New Release

1. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. **Create and push a tag:**
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```

3. **GitHub Actions will automatically:**
   - Build your React app
   - Create a Docker image
   - Push to Docker Hub

## 🔧 Configuration

### Custom Nginx Config

If you need custom nginx configuration:

```bash
# Create custom nginx.conf
nano nginx.conf

# Mount it in docker-compose.yml
volumes:
  - ./nginx.conf:/etc/nginx/nginx.conf:ro
```

### Environment Variables

Add environment variables in `docker-compose.yml`:

```yaml
environment:
  - NODE_ENV=production
  - CUSTOM_VAR=value
```

## 📊 Monitoring

### Health Check

The container includes a health check endpoint:

```bash
curl http://localhost/health
```

### Logs

```bash
# View logs
docker logs portfolio-website

# Follow logs
docker logs -f portfolio-website
```

### Container Status

```bash
# Check container status
docker ps

# Check health status
docker inspect portfolio-website | grep Health
```

## 🔒 Security Features

- ✅ **Non-root user** - Container runs as non-root user
- ✅ **Security headers** - XSS protection, content type options
- ✅ **Hidden files blocked** - No access to .git, .env files
- ✅ **Health checks** - Automatic container health monitoring
- ✅ **Resource limits** - Configurable memory/CPU limits

## 🚀 Production Tips

### 1. SSL/HTTPS Setup

Add SSL certificate mounting:

```yaml
volumes:
  - ./ssl:/etc/nginx/ssl:ro
```

### 2. Reverse Proxy

If using a reverse proxy (like Traefik):

```yaml
labels:
  - "traefik.enable=true"
  - "traefik.http.routers.portfolio.rule=Host(`yourdomain.com`)"
```

### 3. Resource Limits

```yaml
deploy:
  resources:
    limits:
      memory: 512M
      cpus: '0.5'
```

## 🔄 Update Process

### Automatic Updates

Set up a cron job for automatic updates:

```bash
# Add to crontab
0 2 * * * cd /path/to/portfolio && docker-compose pull && docker-compose up -d
```

### Manual Updates

```bash
# Pull and restart
docker-compose pull
docker-compose up -d

# Clean up old images
docker image prune -f
```

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use:**
   ```bash
   sudo netstat -tulpn | grep :80
   sudo kill -9 <PID>
   ```

2. **Permission issues:**
   ```bash
   sudo chown -R $USER:$USER .
   ```

3. **Container won't start:**
   ```bash
   docker logs portfolio-website
   ```

### Debug Mode

```bash
# Run in debug mode
docker run -it --rm your-username/portfolio:latest sh
```

---

**Need help?** Check the GitHub Actions logs in your repository's Actions tab.
