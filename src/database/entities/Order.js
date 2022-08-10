module.exports = (sequelize, DataTypes) => {
    const tableDefinitions = {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
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
    }

    const tableConfiguration = {
        tableName: 'transactions',
        timestamps: false,
    }

    const Transaction = sequelize.define('transaction', tableDefinitions, tableConfiguration);

    return Transaction;
}
