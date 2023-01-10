const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

app.get('/tshirt', (reg, res) => {
    res.status(200).send({
        tshirt: 'shirt',
        size: 'large'
    })

app.post('/tshirt/:id', (reg, res) => {

    const { id } = reg.params;
    const { logo } = reg.body;

    if (!logo) {
        res,status(418).send({ message: 'We need a logo!' })
    }

    res.send({
        tshirt: `shirt with your ${logo} and ID of ${id}`,
    });

});
});