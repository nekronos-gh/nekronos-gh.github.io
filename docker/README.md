# Docker Setup for Web Portfolio

This folder contains the Docker configuration for testing the web portfolio locally.

## Usage

### Development Mode (with Hot Reload)

To start the development server with hot-reloading:

```bash
docker compose -f docker/docker-compose.yml up dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Production Mode (Static Export)

To test the production build served by Nginx:

```bash
docker compose -f docker/docker-compose.yml up prod --build
```

The app will be available at [http://localhost:8080](http://localhost:8080).

## Files

- `Dockerfile`: Multi-stage build for development and production.
- `docker-compose.yml`: Orchestrates the development and production services.
- `nginx.conf`: Custom Nginx configuration to handle Next.js static routing.
