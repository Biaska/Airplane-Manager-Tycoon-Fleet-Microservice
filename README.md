# Airplane Manager Tycoon Microservice

This program is intended be a microservice for a fleet manager application that consumes data from the Airplane Manager Tycoon website. 
Route and Hub objects can be created, read, updated, and deleted from the microservice. Communication protocols are below. 

The microservice is hosted at: https://airplane-manager-tycoon-server.onrender.com

**Since this is hosted on a free plan, the server is spun down after periods of inactivity, this may delay requests by ~50 seconds.**

## Contents

- [Requesting and Receiving **Routes**](#-requesting-and-receiving-routes)
- [Requesting and Receiving **Hubs**](#requesting-and-receiving-hubs)
- [Error Object](#error-object)

## Requesting and Receiving Routes
URL: https://airplane-manager-tycoon-server.onrender.com/route

Methods: GET, POST, PUT, and DELETE

The request object has the following attributes: 

- id INT AUTO_INCREMENT PRIMARY KEY,
- src varchar(3) DEFAULT NULL,
- dest varchar(3) DEFAULT NULL,
- dist int unsigned DEFAULT NULL,
- tax int unsigned DEFAULT NULL,
- audit_price_eco int unsigned DEFAULT NULL,
- audit_price_bus int unsigned DEFAULT NULL,
- audit_price_first int unsigned DEFAULT NULL,
- audit_price_cargo int unsigned DEFAULT NULL,
- audit_demand_eco int unsigned DEFAULT NULL,
- audit_demand_bus int unsigned DEFAULT NULL,
- audit_demand_first int unsigned DEFAULT NULL,
- audit_demand_cargo int unsigned DEFAULT NULL,
- ideal_price_eco int unsigned DEFAULT NULL,
- ideal_price_bus int unsigned DEFAULT NULL,
- ideal_price_first int unsigned DEFAULT NULL,
- ideal_price_cargo int unsigned DEFAULT NULL,
- capacity int unsigned DEFAULT NULL,

### GET Routes
To get routes, make an HTTP GET request to the server at the 'route' endpoint.

**Example Call:** A javascript HTTP request using Fetch API.

```
const getData = async () => {
    const res = await fetch('https://airplane-manager-tycoon-server.onrender.com/route');
    const data = await res.json();
  }
```

**Response Object:** A list of routes are returned as a json object:

```
[
	{
		"id": 1,
		"src": "SEA",
		"dest": "WDC",
		"dist": 3,
		"tax": 53,
		"audit_price_eco": 234,
		"audit_price_bus": 23423,
		"audit_price_first": 2342,
		"audit_price_cargo": 634,
		"audit_demand_eco": 632,
		"audit_demand_bus": 1634,
		"audit_demand_first": 2566,
		"audit_demand_cargo": 6324,
		"ideal_price_eco": 25,
		"ideal_price_bus": 623,
		"ideal_price_first": 6245,
		"ideal_price_cargo": 252,
		"capacity": 200
	}
]
```
### POST Routes

To create new routes, make an HTTP POST request to the 'route' endpoint: 

**Example Call:** A javascript HTTP request using Fetch API.

```
const formData = {
  src: "SEA",
  des: "RDU",
  dist: 2156,
  tax: 456,
  audit_price_eco: 489, 
  audit_price_bus: 456,
  audit_price_first: 7893,
  audit_price_cargo: 4591,
  audit_demand_eco: 879,
  audit_demand_bus: 7931,
  audit_demand_first: 2661,
  audit_demand_cargo: 8941,
  ideal_price_eco: 4359,
  ideal_price_bus: 7842,
  ideal_price_first: 7845,
  ideal_price_cargo: 456,
}
const response = await fetch('https://airplane-manager-tycoon-server.onrender.com/route', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData) 
    });
    const data = await response.json();
```

**Response Object:** A success message and the MYSQL query response are returned:

```
message: "Route created successfully"
result: {
  affectedRows: 1
  changedRows: 0
  fieldCount: 0
  insertId: 6
  message: ""
  protocol41: true
  serverStatus: 2
  warningCount: 0
}
```

### PUT Routes

To update routes, make an HTTP PUT request to the 'route' endpoint and include the ``id`` for the route: 

**Example Call:** A javascript HTTP request using Fetch API.

```
const formData = {
  id: 1,
  src: "SEA",
  des: "RDU",
  dist: 2156,
  tax: 456,
  audit_price_eco: 489, 
  audit_price_bus: 456,
  audit_price_first: 7893,
  audit_price_cargo: 4591,
  audit_demand_eco: 879,
  audit_demand_bus: 7931,
  audit_demand_first: 2661,
  audit_demand_cargo: 8941,
  ideal_price_eco: 4359,
  ideal_price_bus: 7842,
  ideal_price_first: 7845,
  ideal_price_cargo: 456,
}
const response = await fetch('https://airplane-manager-tycoon-server.onrender.com/route', {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData) 
    });
    const data = await response.json();
```

**Response Object:** A success message and the MYSQL query response are returned:

```
message: "Route updated successfully"
result: {
  affectedRows: 0
  changedRows: 1
  fieldCount: 0
  message: ""
  protocol41: true
  serverStatus: 2
  warningCount: 0
}
```

### DELETE Routes 

To delete routes, make an HTTP DELETE request to the 'route' endpoint and pass the ``id`` in the body:

**Example Call:** A javascript HTTP request using Fetch API.

```
const formData = {
  id: 1,
}
const response = await fetch('https://airplane-manager-tycoon-server.onrender.com/route', {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData) 
    });
    const data = await response.json();
```

**Response Object:** A success message and the MYSQL query response are returned:

```
message: "Route deleted successfully"
result: {
  affectedRows: 0
  changedRows: 1
  fieldCount: 0
  message: ""
  protocol41: true
  serverStatus: 2
  warningCount: 0
}
```

## Requesting and Receiving Hubs
URL: https://airplane-manager-tycoon-server.onrender.com/hub

Methods: GET, POST, PUT, and DELETE

The request object has the following attributes: 

- id INT AUTO_INCREMENT PRIMARY KEY,
- iata varchar(3) BOT NULL UNIQUE,
- sheet_id varchar(50) DEFAULT NULL,

### GET Hubs
To get hubs, make an HTTP GET request to the server at the 'hub' endpoint.

**Example Call:** A javascript HTTP request using Fetch API.

```
const getData = async () => {
    const res = await fetch('https://airplane-manager-tycoon-server.onrender.com/hub');
    const data = await res.json();
  }
```

**Response Object:** A list of routes are returned as a json object:

```
[
	{
		"id": 1,
		"src": "SEA",
		"dest": "WDC",
		"dist": 3,
		"tax": 53,
		"audit_price_eco": 234,
		"audit_price_bus": 23423,
		"audit_price_first": 2342,
		"audit_price_cargo": 634,
		"audit_demand_eco": 632,
		"audit_demand_bus": 1634,
		"audit_demand_first": 2566,
		"audit_demand_cargo": 6324,
		"ideal_price_eco": 25,
		"ideal_price_bus": 623,
		"ideal_price_first": 6245,
		"ideal_price_cargo": 252,
		"capacity": 200
	}
]
```
### POST Hubs

To create new hubs, make an HTTP POST request to the 'hub' endpoint: 

**Example Call:** A javascript HTTP request using Fetch API.

```
const formData = {
    iata: "erf",
    sheet_id: "GahStq"
}
const response = await fetch('https://airplane-manager-tycoon-server.onrender.com/hub', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData) 
    });
    const data = await response.json();
```

**Response Object:** A success message and the MYSQL query response are returned:

```
message: "Hub created successfully"
result: {
  affectedRows: 1
  changedRows: 0
  fieldCount: 0
  insertId: 6
  message: ""
  protocol41: true
  serverStatus: 2
  warningCount: 0
}
```

### PUT Hubs

To update hubs, make an HTTP PUT request to the 'hub' endpoint and include the ``id`` for the route: 

**Example Call:** A javascript HTTP request using Fetch API.

```
const formData = {
  id: 1,
  iata: "erf",
  sheet_id: "GahStq"
}
const response = await fetch('https://airplane-manager-tycoon-server.onrender.com/hub', {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData) 
    });
    const data = await response.json();
```

**Response Object:** A success message and the MYSQL query response are returned:

```
message: "Hub updated successfully"
result: {
  affectedRows: 0
  changedRows: 1
  fieldCount: 0
  message: ""
  protocol41: true
  serverStatus: 2
  warningCount: 0
}
```

### DELETE Hubs 

To delete hub, make an HTTP DELETE request to the 'hub' endpoint and pass the ``id`` in the body:

**Example Call:** A javascript HTTP request using Fetch API.

```
const formData = {
  id: 1,
}
const response = await fetch('https://airplane-manager-tycoon-server.onrender.com/hub', {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData) 
    });
    const data = await response.json();
```

**Response Object:** A success message and the MYSQL query response are returned:

```
message: "Route deleted successfully"
result: {
  affectedRows: 0
  changedRows: 1
  fieldCount: 0
  message: ""
  protocol41: true
  serverStatus: 2
  warningCount: 0
}
```

### Error Object

When there is an error when making any request to the server, it is structured like this: 

```
error: "Error creating route"
errorMessage: (Error returned from either the server or database. This will either be "Server error: *error message*" or "Database error: *error message*")
```
