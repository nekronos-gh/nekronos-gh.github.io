FROM nvim-dev

# Install pnpm
RUN apt-get update && \
    apt-get purge -y nodejs npm libnode-dev && \
    apt-get autoremove -y && \
    curl -fsSL https://deb.nodesource.com/setup_22.x | bash - && \
    apt-get install -y nodejs && \
    node -v && npm -v && \
    npm install -g pnpm && \
    rm -rf /var/lib/apt/lists/*

# Expose port 3000
EXPOSE 3000
CMD ["pnpm", "dev"]
