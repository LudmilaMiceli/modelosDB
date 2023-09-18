/* const { DataTypes } = require("sequelize");
const { sequelize } = require(".");
const { config } = require("dotenv"); */

module.exports = (sequelize, dataTypes) => {
    
    const alias = "Genre";
    const cols = {
        id: {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        name: {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        ranking : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            unique : true
        },
        active : {
            type : dataTypes.BOOLEAN,
            allowNull : false,
            underscored : true
        },
        awards : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            defaultValue : 0
        },
        releaseDate : {
            type : dataTypes.DATE,
            allowNull : false,
        },
        length : {
            type : dataTypes.INTEGER.UNSIGNED,
           /*  allowNull : true */ /* POR DEFECTO */
            defaultValue : null,
        },
        genreID : {
            type : dataTypes.INTEGER.UNSIGNED,
            defaultValue : null,
        }
    }

    const config = {
        tableName : 'movies', // Si no le paso nada me toma el nombre de la tabla en plural y lo convierte. Automatiza
        timestamps : true, /* MARCAS DE ERROR: Si no las tiene y no le avisamos a Sequelize que no las tiene, se genera un error  */
        underscored : true, /* AVISA QUE LAS MARCAS DE TIEMPO (timestamps) ESTAN ESCRITAS EN ESE FORMATO */
        
    }

    /* SIEMPRE DECLARAR */

    const Genre = sequelize.define(alias, cols, config);

    return Genre
}