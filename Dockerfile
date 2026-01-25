# -------------------------------
# Stage 1: Build Stage
# -------------------------------
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy dependency definitions
COPY package*.json ./

# Install dependencies
RUN npm ci

# FIX: Manually install the Linux-specific Rollup binary 
# This solves the "@rollup/rollup-linux-x64-musl" error
RUN npm install @rollup/rollup-linux-x64-musl

# Copy all project files
COPY . .

# Build the project
RUN npm run build

# -------------------------------
# Stage 2: Runtime Stage
# -------------------------------
FROM nginx:alpine

# Copy built files from builder stage
# Vite outputs to 'dist' by default
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]