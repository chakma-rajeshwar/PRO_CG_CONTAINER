module.exports = {
  apps: [
    {
      name: "node-app",
      script: "node",
      args: "app.js",
      watch: true
    },
    {
      name: "flask-app",
      script: "python",
      args: "app.py",
      watch: true
    }
  ]
}
