#!/bin/bash

# Deployment script for mariusz-sokolowski.ch
# This script builds and deploys both frontend and backend

set -e

echo "🚀 Starting deployment for mariusz-sokolowski.ch"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    print_error "Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Check if .env file exists
if [ ! -f ".env" ]; then
    print_warning ".env file not found. Creating from .env.example..."
    cp .env.example .env
    print_warning "Please edit .env file with your production values before running this script again."
    exit 1
fi

# Build and start services
print_status "Building and starting services..."

# Stop existing containers
docker-compose down

# Build and start services
docker-compose up --build -d

# Wait for services to be ready
print_status "Waiting for services to be ready..."
sleep 10

# Check if services are running
if docker-compose ps | grep -q "Up"; then
    print_status "✅ Services are running successfully!"
    print_status "Frontend: http://localhost"
    print_status "Backend API: http://localhost:3000"
    print_status "Backend Health: http://localhost:3000/health"
else
    print_error "❌ Some services failed to start. Check logs with: docker-compose logs"
    exit 1
fi

print_status "🎉 Deployment completed successfully!"
print_status "To view logs: docker-compose logs -f"
print_status "To stop services: docker-compose down"
