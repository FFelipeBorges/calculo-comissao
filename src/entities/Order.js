const sequelize = require('../database');
const { DataTypes } = require('sequelize');

const Transaction = sequelize.define(
    'Transaction',
    {
        customerName: {
            type: DataTypes.STRING,
            field: 'customer_name'
        },
        issueDate: {
            type: DataTypes.DATE,
            field: 'issue_date'
        },
        invoicingDate: {
            type: DataTypes.DATE,
            field: 'invoicing_date'
        },
        value: {
            type: DataTypes.INTEGER,
        },
        percentageCommission: {
            type: DataTypes.INTEGER,
            field: 'percentage_commission'
        }
    },
    {
        tableName: 'transactions',
        timestamps: false
    }
);

module.exports = Transaction;
