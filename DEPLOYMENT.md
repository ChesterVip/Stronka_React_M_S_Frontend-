# mariusz-sokolowski.ch - Deployment Guide

## 🚀 Quick Start

### Prerequisites
- Docker and Docker Compose installed
- Domain `mariusz-sokolowski.ch` configured
- SSL certificate (Let's Encrypt recommended)

### 1. Environment Setup

```bash
# Copy environment template
cp .env.example .env

# Edit with your production values
nano .env
```

**Important environment variables to configure:**

#### Backend (.env)
```bash
# JWT Secret - CHANGE THIS!
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Email Configuration
MAIL_USER=your-email@gmail.com
MAIL_PASS=your-app-password

# CORS Origins
ALLOWED_ORIGINS=https://mariusz-sokolowski.ch,https://www.mariusz-sokolowski.ch
```

#### Frontend (.env)
```bash
# Backend API URL
VITE_API_BASE_URL=https://api.mariusz-sokolowski.ch
```

### 2. Deploy with Docker

```bash
# Make deployment script executable
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

### 3. Manual Deployment

```bash
# Build and start services
docker-compose up --build -d

# Check status
docker-compose ps

# View logs
docker-compose logs -f
```

## 🌐 Domain Configuration

### DNS Setup
Point your domain to your server:
- `mariusz-sokolowski.ch` → Your server IP
- `www.mariusz-sokolowski.ch` → Your server IP
- `api.mariusz-sokolowski.ch` → Your server IP

### SSL Certificate (Let's Encrypt)
```bash
# Install certbot
sudo apt install certbot

# Get certificate
sudo certbot certonly --standalone -d mariusz-sokolowski.ch -d www.mariusz-sokolowski.ch -d api.mariusz-sokolowski.ch
```

## 🔧 Management Commands

### View Logs
```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f backend
docker-compose logs -f frontend
```

### Restart Services
```bash
# Restart all
docker-compose restart

# Restart specific service
docker-compose restart backend
```

### Update Services
```bash
# Pull latest changes
git pull

# Rebuild and restart
docker-compose up --build -d
```

## 📊 Monitoring

### Health Checks
- Frontend: `https://mariusz-sokolowski.ch`
- Backend API: `https://api.mariusz-sokolowski.ch/health`
- Backend Docs: `https://api.mariusz-sokolowski.ch/docs` (if enabled)

## 🛠️ Troubleshooting

### Common Issues

1. **CORS Errors**
   - Check `ALLOWED_ORIGINS` in backend .env
   - Ensure frontend URL is included

2. **Email Not Working**
   - Verify SMTP credentials
   - Check firewall settings
   - Use app-specific password for Gmail

3. **Database Issues**
   - Check volume mounts
   - Verify SQLite file permissions
   - Run migrations if needed

4. **SSL Certificate Issues**
   - Renew certificates: `sudo certbot renew`
   - Check certificate validity
   - Verify domain DNS settings

## 🔒 Security Checklist

- [ ] Change default JWT secret
- [ ] Use strong email passwords
- [ ] Enable SSL/TLS
- [ ] Configure firewall
- [ ] Regular security updates
- [ ] Monitor logs for suspicious activity
- [ ] Backup database regularly

## 🆘 Support

For issues or questions:
- Check logs first: `docker-compose logs`
- Review this documentation
- Check GitHub issues
- Contact: info@mariusz-sokolowski.ch
