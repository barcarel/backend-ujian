const db = require('../database')

module.exports = {
    
    getCategories: (req, res) => {
        let sql = `select c.id, c.category, cc.category as 'Parent Category'
        from categories c
        left join categories cc on cc.id = c.parentId`
        db.query(sql, (err, results) => {
            if (err) {
                res.status(500).send(err)
            }
            res.status(200).send(results)
        })
    },
    
    getProducts: (req, res) => {
        let sql = `SELECT * FROM products`
        db.query(sql, (err, results) => {
            if (err) {
                res.status(500).send(err)
            }
            res.status(200).send(results)
        })
    },

    getProductCat: (req, res) => {
        let sql = `select pc.id, nama, category
        from productcat pc
        left join products p on p.id = pc.productId
        left join categories c on pc.categoryId = c.id`
        db.query(sql, (err, results) => {
            if (err) {
                res.status(500).send(err)
            }
            res.status(200).send(results)
        })
    },

    addCategories: (req, res) => {
        let sql = `INSERT INTO categories set ?`
        db.query(sql, req.body, (err, results) => {
            if (err) {
                res.status(500).send(err)
            }
            res.status(200).send(results)
        })
    },

    addProducts: (req, res) => {
        let sql = `INSERT INTO products set ?`
        db.query(sql, req.body, (err, results) => {
            if (err) {
                res.status(500).send(err)
            }
            res.status(200).send(results)
        })
    },

    // addProductCat: (req, res) => {
    //     let sql = `INSERT INTO products set ?`
    //     db.query(sql, req.body, (err, results) => {
    //         if (err) {
    //             res.status(500).send(err)
    //         }
    //         res.status(200).send(results)
    //     })
    // }

    editCategories: (req, res) => {
        let sql = `UPDATE categories SET ? WHERE id = ${req.query.id}`
        db.query(sql, req.body, (err, results) => {
            if (err) {
                res.status(500).send(err)
            }
            res.status(200).send(results)
        })
    },

    editProducts: (req, res) => {
        let sql = `UPDATE products SET ? WHERE id = ${req.query.id}`
        db.query(sql, req.body, (err, results) => {
            if (err) {
                res.status(500).send(err)
            }
            res.status(200).send(results)
        })
    },

    deleteCategory: (req, res) => {
        let sql = `DELETE FROM categories WHERE id=${req.query.id}`
        db.query(sql, (err, results) => {
            if (err) {
                res.status(500).send(err)
            }
            res.status(200).send(results)
        })
    },

    deleteProduct: (req, res) => {
        let sql = `DELETE FROM products WHERE id=${req.query.id}`
        db.query(sql, (err, results) => {
            if (err) {
                res.status(500).send(err)
            }
            res.status(200).send(results)
        })
    },

    deleteProductCat: (req, res) => {
        let sql = `DELETE FROM productcat WHERE productId=${req.query.productId}`
        db.query(sql, (err, results) => {
            if (err) {
                res.status(500).send(err)
            }
            res.status(200).send(results)
        })
    }
}