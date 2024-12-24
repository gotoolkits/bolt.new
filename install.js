module.exports = {
  run: [
    // Edit this step with your custom install commands
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/coleam00/bolt.new-any-llm app",
          "cp app/.env.example app/.env"
        ],
      }
    },
    // Edit this step with your custom install commands
    {
      method: "shell.run",
      params: {           // Edit this to customize the venv folder path
        path: "app",
        message: [
          "npm config set registry https://registry.npmmirror.com",
          "pnpm install"
        ],
      }
    }
  ]
}

