	'use strict';

	/* 
	lista e explicação dos Datatypes:
	https://codewithhugo.com/sequelize-data-types-a-practical-guide/
	*/

	module.exports = (sequelize, DataTypes) => {
	    let Usuario = sequelize.define('Usuario', {
	        idUsuario: {
	            field: 'idUsuario',
	            type: DataTypes.INTEGER,
	            primaryKey: true,
	            autoIncrement: true
	        },
	        primeiroNome: {
	            field: 'primeiroNome',
	            type: DataTypes.STRING,
	            allowNull: false
	        },
	        segundoNome: {
	            field: 'segundoNome',
	            type: DataTypes.STRING,
	            allowNull: false
	        },
	        senha: {
	            field: 'senha',
	            type: DataTypes.STRING,
	            allowNull: false
	        },
	        email: {
	            field: 'email',
	            type: DataTypes.STRING,
	            allowNull: false
	        },
	        aniversario: {
	            field: 'aniversario',
	            type: DataTypes.DATE,
	            allowNull: false
	        },
	        pais: {
	            field: 'pais',
	            type: DataTypes.STRING,
	            allowNull: false
	        },
	        idioma: {
	            field: 'idioma',
	            type: DataTypes.STRING,
	            allowNull: false
	        },
	        fkJogador: {
	            field: 'fkJogador',
	            type: DataTypes.INTEGER,
	            allowNull: false
	        }
	    }, {
	        tableName: 'usuario',
	        freezeTableName: true,
	        underscored: true,
	        timestamps: false,
	    });

	    return Usuario;
	};