const express = require('express');
const app = express();

app.get('/', (request, response) => {
    console.log(request);
    response.send('welcome');
});

app.listen(18080, () => {
    console.log('server start');
});