const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();
const port = process.env.PORT;
var env = process.env.NODE_ENV || 'development';

// db pool
if (env === 'development') {
    var db = require('./local-db-connector');
} else {
    var db = require('./prod-db-connector');
}


// Middleware
app.use(bodyParser.json());



// CRUD operations for 'route'
app.get('/route', (req, res) => {
    db.pool.query('SELECT * FROM route', (err, results) => {
        if (err) {
            //  log error
            console.log(err)

            // set error message
            let errMsg;
            if (err.sqlMessage) {
                errMsg = "Database error: " + err.sqlMessage
            } else {
                errMsg = "Server error: " + err
            }

            // send error
            const error = {
                error: 'Error retrieving routes',
                errorMessage: errMsg
            }
            res.status(500).json(error);
        } else {
            // return results
            res.json(results);
        }
    });
});

// post new route
app.post('/route', (req, res) => {
    const routeData = req.body;
    db.pool.query('INSERT INTO route SET ?', routeData, (err, result) => {
        if (err) {
            // log error
            console.log(err)

            // set error message
            let errMsg;
            if (err.sqlMessage) {
                errMsg = "Database error: " + err.sqlMessage
            } else {
                errMsg = "Server error: " + err
            }

            // send error
            const error = {
                error: 'Error creating route',
                errorMessage: errMsg
            }
            res.status(500).json(error);
        } else {
            // route created
            const results = {
                message: 'Route created successfully',
                result: result
            }
            res.status(201).json(results);
        }
    });
});

// update route
app.put('/route', (req, res) => {
    const routeData = req.body;
    db.pool.query('UPDATE route SET ? WHERE ?', [routeData, routeData.id], (err, result) => {
        if (err) {
            // log error
            console.log(err)

            // set error message
            let errMsg;
            if (err.sqlMessage) {
                errMsg = "Database error: " + err.sqlMessage
            } else {
                errMsg = "Server error: " + err
            }

            // send error
            const error = {
                error: 'Error updating route',
                errorMessage: errMsg
            }
            res.status(500).json(error);
        } else {
            // route created
            const results = {
                message: 'Route updated successfully',
                result: result
            }
            res.status(201).json(results);
        }
    });
});

// delete route with id
app.delete('/route', (req, res) => {
    const routeID = req.body.id;
    db.pool.query('DELETE FROM route WHERE id=?', routeID, (err, result) => {
        if (err) {

            // log error
            console.log(err)

            // set error message
            let errMsg;
            if (err.sqlMessage) {
                errMsg = "Database error: " + err.sqlMessage
            } else {
                errMsg = "Server error: " + err
            }

            // return error
            const error = {
                error: 'Error deleting route',
                errorMessage: errMsg
            }
            res.status(500).json(error);
        } else {

            // no row found with id 
            if (result.affectedRows===0) {
                res.status(404).send("Row not found")
            } else {                                        // Row deleted
                const results = {
                    message: 'Route deleted successfully',
                    result: result
                }
                res.status(201).json(results);
            }
        }
    });
});


// CRUD operations for 'hub'
app.get('/hub', (req, res) => {
    db.pool.query('SELECT * FROM hub', (err, results) => {
        if (err) {
            // Handle error
            console.log(err);
            let errMsg = err.sqlMessage ? "Database error: " + err.sqlMessage : "Server error: " + err;
            const error = {
                error: 'Error retrieving hubs',
                errorMessage: errMsg
            }
            res.status(500).json(error);
        } else {
            // Return results
            res.json(results);
        }
    });
});

app.post('/hub', (req, res) => {
    const hubData = req.body;
    db.pool.query('INSERT INTO hub SET ?', hubData, (err, result) => {
        if (err) {
            // Handle error
            console.log(err);
            let errMsg = err.sqlMessage ? "Database error: " + err.sqlMessage : "Server error: " + err;
            const error = {
                error: 'Error creating hub',
                errorMessage: errMsg
            }
            res.status(500).json(error);
        } else {
            // Hub created
            const results = {
                message: 'Hub created successfully',
                result: result
            }
            res.status(201).json(results);
        }
    });
});

app.put('/hub', (req, res) => {
    const hubData = req.body;
    db.pool.query('UPDATE hub SET ? WHERE ?', [hubData, { id: hubData.id }], (err, result) => {
        if (err) {
            // Handle error
            console.log(err);
            let errMsg = err.sqlMessage ? "Database error: " + err.sqlMessage : "Server error: " + err;
            const error = {
                error: 'Error updating hub',
                errorMessage: errMsg
            }
            res.status(500).json(error);
        } else {
            // Hub updated
            const results = {
                message: 'Hub updated successfully',
                result: result
            }
            res.status(201).json(results);
        }
    });
});

app.delete('/hub', (req, res) => {
    const hubID = req.body.id;
    db.pool.query('DELETE FROM hub WHERE id=?', hubID, (err, result) => {
        if (err) {
            // Handle error
            console.log(err);
            let errMsg = err.sqlMessage ? "Database error: " + err.sqlMessage : "Server error: " + err;
            const error = {
                error: 'Error deleting hub',
                errorMessage: errMsg
            }
            res.status(500).json(error);
        } else {
            // No row found with id
            if (result.affectedRows === 0) {
                res.status(404).send("Row not found");
            } else { // Row deleted
                const results = {
                    message: 'Hub deleted successfully',
                    result: result
                }
                res.status(201).json(results);
            }
        }
    });
});


// server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})