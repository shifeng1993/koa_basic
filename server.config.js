module.exports = {
  apps: [{
    // 指定解释器
    interpreter: './node_modules/.bin/ts-node',
    interpreter_args: '-r tsconfig-paths/register',
    cwd: './',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    },
    kill_timeout: 10000,
    name: 'koa_basic',
    script: './main.ts',
    // wait_ready: true,
    // watch: true,
    watch: ['./'],
    ignore_watch: ['node_modules'],
    watch_options: {
      "usePolling": true
    }
  }]
};