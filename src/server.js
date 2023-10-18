// In your Next.js custom server (server.js):
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Redirect www to non-www
  server.get('/*', (req, res, next) => {
    if (req.headers.host.startsWith('www.')) {
      const newUrl = req.protocol + '://' + req.headers.host.replace('www.', '') + req.url;
      return res.redirect(301, newUrl);
    }
    return next();
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('Next.js app is running on port 3000');
  });
});
