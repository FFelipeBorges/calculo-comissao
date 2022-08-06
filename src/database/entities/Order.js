module.exports = (sequelize, DataTypes) => {
    const tableDefinitions = {
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
    }

    const tableConfiguration = {
        tableName: 'order_1',
        timestamps: false,
    }
    
    const PedidosModel = sequelize.define('order_1', tableDefinitions, tableConfiguration);
    return order_1
}
