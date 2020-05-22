# IoT-Web-Store

A complete store software for:

* Store managment
  * User creation.
  * Products stock management.
  * Orders management.
* Online web store
  * Log In.
  * Purchases (TODO payments).
  * Shopping Cart.
* IoT features
  * Warehouses management
  
  
### Project files

#### Frontend

**web-store-frontend**

Developed in Angular 8

#### Backend

**web-store-backend**

Developed in SailsJS with persistent storage option in MySQL

#### IoT

**web-store-iot-backend**

Developed in SailsJS it should be deployed in a SBC (Single Board Computer) like Raspberry 3 (tested in Raspberry 3 B+) and with the store backend it will notify by LED diodes when a product in the warehouse is low or out of stock (TODO add sensors or camera validation)
