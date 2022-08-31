const { Order } = require('..entities/');

const transactionsController = {
    create: async (request, response) => {

        const newTransaction = { 
            ...request.body
        };
        await Order.create(newTransaction);

        response.render('/telaPedidos', {
            title: 'Express',
        });
    },
    update: async (request, response) => {
        await Order.update(request.body, {
            where: {
                id: request.params.id
            }
        });
        response.redict('/telaPedidos');
    },
    registerScreen: (_, response) => {
        response.render('registration');
    }
};

module.exports = transactionsController;