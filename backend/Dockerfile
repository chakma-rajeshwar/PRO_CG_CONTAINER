# Stage 1: Build Node.js app
FROM node:latest AS node-builder

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .

# Stage 2: Setup Python (Flask)
FROM python:3.11

WORKDIR /app

COPY --from=node-builder /app /app

RUN pip install --upgrade pip==24.1
RUN pip install -r requirements.txt

EXPOSE 3001  # Node.js API
EXPOSE 5000  # Flask API

CMD ["sh", "-c", "node app.js & python app.py"]

