const restify = require('restify');
const {initCartControllers} = require('./controller/cart-controller');
const {initCustomerControllers} = require('./controller/customer-controller');
const {initItemControllers} = require('./controller/item-controller');
const {initCartItemControllers} = require('./controller/cart-item-controller');
const port = 5555;

const server = restify.createServer({
	name: 'Server'
});

server.pre((req, res, next) => {
	console.info('%s - %s', req.method, req.url);
	return next(); 
});

server.use(restify.plugins.bodyParser({mapParams: true}));

initCartControllers(server);
initCustomerControllers(server);
initItemControllers(server);
initCartItemControllers(server);

server.listen(port, () => {
	console.info('%s listening on port %s', server.name, port);
});
