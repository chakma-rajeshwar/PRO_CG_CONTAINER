# Node.js setup
FROM node:18-alpine AS node

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .

EXPOSE 3000

# Flask setup
FROM python:3.11-alpine AS flask

WORKDIR /app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY . .

EXPOSE 5000

# Final stage
FROM alpine:3.18

# Install Node.js and Python
RUN apk add --no-cache nodejs python3 py3-pip

# Copy from Node stage
COPY --from=node /app /app/node
# Copy from Flask stage
COPY --from=flask /app /app/flask

WORKDIR /app

# Combined run command
CMD ["sh", "-c", "cd node && node app.js & cd ../flask && python app.py"]
