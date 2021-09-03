# Notes for Backend

### How to run this program on your own pc

* Clone this program and run `npm run dev` on the terminal
* Make sure you have MongoDB preinstalled on your machine 

### Understand files and folders in server (backend)

* `index.js`: the main file of server
* `route\api`: contains all apis, `index.js` use this to call to api
* `services`: contains all routing logic 
* `models`: contains model for data in database
* `config`: configuration for database server (may change to .env file in the future)
* `types`: contains error codes when fetching data from daatabase
* `validation`: validate data in backend (for `services` files)

### Dependencies used in Backend

* `express`
* `mongoose`: to connect and control database
* `cors`: provides middleware that enables CORS
* `is-empty`: check if data is nul-like (use with `validator`)
* `validator`: validate data easier (use in folder `validation`)
* `jsonwebtoken`: for authorization
* `passport`: authenticate request
* `passport-jwt`: authenticate with JSON web token (JWT)
* `concurrently`: to run client and server simultaneously
**Note: `jsonwebtoken` `passport` `passport-jwt` is for stay logging in after using websites**

* `crypto`: not a dependency, builtin package, use for encrypt passwords
* `body-parser`: uses this if using node version < 16. In this project, we just need to use express
