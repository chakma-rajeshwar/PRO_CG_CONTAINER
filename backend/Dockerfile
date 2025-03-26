# First stage: Node.js setup
FROM node:18-alpine AS node_builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Second stage: Flask setup
FROM python:3.11-alpine AS flask_builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .

# Final stage: Combined runtime
FROM python:3.11-alpine
WORKDIR /app

# Install Node.js
RUN apk add --no-cache nodejs npm

# Copy Node.js app
COPY --from=node_builder /app /app/node
# Copy Flask app
COPY --from=flask_builder /app /app/flask
COPY --from=flask_builder /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages

# Install PM2 process manager
RUN npm install -g pm2

WORKDIR /app
COPY ecosystem.config.js .

EXPOSE 3000 5000

CMD ["pm2-runtime", "ecosystem.config.js"]
