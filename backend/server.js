import express from 'express';
import data from './data.js';
import cors  from 'cors';
const app = express()



// app.use(cors())

app.get('/api/products', cors({
    origin: '*'
}), (req, res) => {
    res.send(data.products)
});

app.get('/api/products/slug/:slug', cors({
    origin: '*'
}), (req, res) => {
    const product = data.products.find(x => x.slug === req.params.slug)
    if(product) {
        res.send(product)
    } else {
        res.status(404).send({message: 'Продукт не найдет'})
    }
});

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`server at http://localhost:${port}`)
})