const products = require('../data/products.json');

module.exports = {
    index : (req, res) => { 
        return res.render('index', {products});
    },
    detail : (req, res) => {
        return res.render('detalleMenu');
    }
}