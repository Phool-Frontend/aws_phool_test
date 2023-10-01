'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

app.listen(port, () => {
    console.log(`Conectado Servidor      ---> localhost:${port}`);
    console.log("Me gusta la moto patagonia :3");
});

app.get('/',(req,res) => res.json("The nex year 2023 i'm job in united states"));
