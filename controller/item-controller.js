const {
     getAllItems,
     getItemByItemId,
     addItem,
     modifyItem,
     removeItemByItemId
 } = require('../service/item-service');

 const getItemsRoute = (server) => {
    server.get('/items', (req, res, next) => {
        res.send(200, getAllItems());
        return next();
    })
 };

const getItemByItemIdRoute = (server) => {
    server.get('/items/:itemId', (req, res, next) => {
        try {
            const item = getItemByItemId(req.params.itemId);
            res.send(200, item);
        } catch(error) {
            res.send(404);
        }

        return next();
    })
};

const addItemsRoute = (server) => {
    server.post('/items', (req, res, next) => {
        const item = req.params;
        addItem(item);
        res.send(201);
        return next();
    })
};

const modifyItemRoute = (server) => {
    server.put('/items/:itemId', (req, res, next) => {
        modifyItem(req.params);
        res.send(200);
        return next();
    })
};

const deleteItemRoute = (server) => {
    server.del('/items/:itemId', (req, res, next) => {
        removeItemByItemId(req.params.itemId);
        res.send(204);
        return next();
    })
};

const initItemControllers = (server) => {
    getItemsRoute(server);
    getItemByItemIdRoute(server);
    addItemsRoute(server);
    modifyItemRoute(server);
    deleteItemRoute(server);
};

module.exports = {
    initItemControllers
};