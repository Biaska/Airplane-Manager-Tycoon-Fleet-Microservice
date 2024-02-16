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
            if (result.length===0) {
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


// get all hubs
app.get('/hub', (req, res) => {
    db.pool.query('SELECT * FROM hub', (err, results) => {
            if (err) {
            // log error
            console.log(err)
            res.status(500).send('Error retrieving hubs');
        } else {
            res.json(results);
        }
    });
});

// post new hub
app.post('/hub', (req, res) => {
    const hubData = req.body;
    db.pool.query('INSERT INTO hub SET ?', hubData, (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).send('Error creating hub');
        } else {
            res.status(201).send('Hub created successfully');
        }
    });
});


// server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})