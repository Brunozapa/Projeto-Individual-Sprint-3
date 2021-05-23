'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Leitura = sequelize.define('Leitura', {
        idJogador: {
            field: 'idJogador',
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomeJogador: {
            field: 'nomeJogador',
            type: DataTypes.STRING,
            allowNull: false
        },
        posicao: {
            field: 'posicao',
            type: DataTypes.STRING,
            allowNull: false
        },
        idade: {
            field: 'momento',
            type: DataTypes.INTEGER,
            allowNull: false
        },
        camisa: {
            field: 'camisa',
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nacionalidade: {
            field: 'nacionalidade',
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'jogador',
        freezeTableName: true,
        underscored: true,
        timestamps: false,
    });

    return Leitura;
};