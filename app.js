const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Azure App Service — simple Node demo! from Ankit Singh Gusain');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on ${port}`));
