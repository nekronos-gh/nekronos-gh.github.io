# Base image with pnpm installed
FROM node:20-alpine AS base
RUN npm install -g pnpm
WORKDIR /app

# Install dependencies
FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Development stage: for hot-reloading and development
FROM base AS development
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
ENV PORT 3000
CMD ["pnpm", "dev"]

# Build stage: for static export
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm run build

# Production stage: serves the static export using Nginx
FROM nginx:alpine AS production
COPY --from=builder /app/out /usr/share/nginx/html
# Next.js export usually needs this for routing
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
