const path = require('path');
const express = require('express');

console.log(process.argv);
const port = process.env.PORT || 9005;
const app = express();
const rootPath = path.join(__dirname, '/');

app.use(express.static(dist));
app.get('*', (req, res, _next) => {
  res.sendFile('index.html', { root: rootPath });
});
app.listen(port, () => {
  console.log(`babylon demo app listening on port:${port}`);
});
