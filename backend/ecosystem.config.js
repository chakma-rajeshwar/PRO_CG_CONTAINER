module.exports = {
  apps: [
    {
      name: "node-app",
      cwd: "/app/node",
      script: "node",
      args: "app.js",
      watch: true
    },
    {
      name: "flask-app",
      cwd: "/app/flask",
      script: "python",
      args: "app.py",
      watch: true
    }
  ]
}
