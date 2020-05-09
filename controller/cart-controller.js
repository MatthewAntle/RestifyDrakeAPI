const {
    getAllCarts,
    getCartByCartId,
    getCartsByCustomerId,
    addCart,
    modifyCart,
    removeCartByCartId
} = require('../service/cart-service');

const getCartsRoute = (server) => {
	server.get('/carts', (req, res, next) => {
		res.send(200, getAllCarts());
		return next();
	})
};

const getCartByCartIdRoute = (server) => {
	server.get('/carts/:cartId', (req, res, next) => {
		try {
			const cart = getCartByCartId(req.params.cartId);
			res.send(200, cart);
		} catch(error) {
			res.send(404);
		}

		return next();
	})
};

const getCartsByCustomerIdRoute = (server) => {
	server.get('/customers/:customerId/carts', (req, res, next) => {

		try {
			const carts = getCartsByCustomerId(req.params.customerId);
			res.send(200, carts);
		
		} catch(error) {
			res.send(404);
		}
		return next();

	})
};

const addCartsRoute = (server) => {
	server.post('/carts', (req, res, next) => {
		const cart = req.params;
		addCart(cart);
		res.send(201);
		return next();
	})
};

const modifyCartRoute = (server) => {
	server.put('/carts/:cartId', (req, res, next) => {
		modifyCart(req.params);
		res.send(200);
		return next();
	})
};

const deleteCartRoute = (server) => {
	server.del('/carts/:cartId', (req, res, next) => {
		removeCartByCartId(req.params.cartId);
		res.send(204);
		return next();
	})
};

const initCartControllers = (server) => {
	getCartsRoute(server);
	getCartByCartIdRoute(server);
	getCartsByCustomerIdRoute(server);
	addCartsRoute(server);
	modifyCartRoute(server);
	deleteCartRoute(server);
};

module.exports = {initCartControllers};
