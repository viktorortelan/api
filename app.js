import express from "express";

const servidor = express();

servidor.get("/local/:n1/:n2", (req, resp) => {

const value1 = Number(req.params.n1);
const value2 = Number(req.params.n2);
const soma = value1 + value2;
resp.send({
    soma :soma 
})

});

servidor.listen(5050, () => console.log("API subida com sucesso!"));