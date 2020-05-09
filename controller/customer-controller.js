const {
    getAllCustomers,
    getCustomerByCustomerId
} = require('../service/customer-service');

const getCustomersRoute = (server) => {
    server.get('/customers', (req, res, next) => {
        res.send(200, getAllCustomers());
        return next();
    })
};

const getCustomerByCustomerIdRoute = (server) => {
    server.get('/customers/:customerId', (req, res, next) => {
        try {
            const customer = getCustomerByCustomerId(req.params.customerId);
            res.send(200, customer);
        } catch(error) {
            res.send(404);
        }

        return next();
    })
};

const initCustomerControllers = (server) => {
    getCustomersRoute(server);
    getCustomerByCustomerIdRoute(server);
};

module.exports = {
    initCustomerControllers
};
