const express = require('express');
const app = express();
const {products} = require('./data')

app.use(express.static('./public'));

app.get('/api/v1/products', (req, res) => {
    res.status(200).json(products)
})

app.get('/api/v1/products/:productID', (req, res) => {
    const {productID} = req.params;

    const findProduct = products.find((product) => product.id === Number(productID))
    if (!findProduct) {
        return res.status(404).send('That product was not found')
    }
    res.json(findProduct)
})

app.get('/api/v1/query', (req, res) => {
    console.log(req.query)
    const { search,limit, maxPrice } = req.query
    let sortedProducts = [...products]

    if(search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }

    if(limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    if(maxPrice) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.price <= Number(maxPrice)
        })
    }

    if(sortedProducts < 1) {
        // res.status(200).send('No products matched your search')
        return res.status(200).json({success:true, data: []})
    }
    res.status(200).json(sortedProducts)
})

app.listen(3000, () => {
    console.log('server is listening on port 3000...')
})
