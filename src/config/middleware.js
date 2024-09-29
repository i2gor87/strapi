module.exports = {
  settings: {
    cors: {
      enabled: true,
      origin: ['*'], // Or you can specify a specific domain ['https://your-frontend.com']
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization'],
      credentials: true, // This needs to be true for handling credentials
    },
  },
};
