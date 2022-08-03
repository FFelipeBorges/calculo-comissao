module.exports = (sequelize, DataTypes) => {
    const tableDefinitions = {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        nome_cliente: {
            type: DataTypes.STRING,
        },
        data_emissao: {
            type: DataTypes.DATE,
        },
        data_faturamento: {
            type: DataTypes.DATE,
        },
        valor_pedido: {
            type: DataTypes.STRING,
        },
        porcentagem_comissao: {
            type: DataTypes.STRING,
        }
    }

    const tableConfiguration = {
        tableName: 'pedidos',
        timestamps: false,
    }
    
    const PedidosModel = sequelize.define('pedidos', tableDefinitions, tableConfiguration);
    return pedidos
}
