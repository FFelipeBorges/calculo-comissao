const sequelize = require('../config/config');
const {DataTypes} = require('sequelize');

const Order_1 = sequelize.define(
    'Order_1',
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        customer_name: {
            type: DataTypes.STRING,
        },
        issuance_date: {
            type: DataTypes.DATE,
        },
        invoicing_date: {
            type: DataTypes.DATE,
        },
        order_value: {
            type: DataTypes.STRING,
        },
        percentage_commission: {
            type: DataTypes.STRING,
        }
    },
    {
        tableName: 'order_1',
        timestamps: false
    }
);
    
module.exports = Order_1;
