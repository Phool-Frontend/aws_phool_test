'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Conectado Servidor      ---> localhost:${port}`);
    console.log("Me gusta la moto patagonia :3");
});