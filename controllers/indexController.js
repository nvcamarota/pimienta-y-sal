const products = require('../data/products.json');

module.exports = {
    index : (req, res) => { 
        return res.render('index', {products});
    },
    detail : (req, res) => {
        const {id} = req.params;
        const product = products.find(product => product.id === +id);
        return res.render('detalleMenu', {product});
    }
}