/* const { DataTypes } = require("sequelize");
const { sequelize } = require(".");
const { config } = require("dotenv"); */

module.exports = (sequelize, dataTypes) => {
    
    const alias = "Movie";
    const cols = {
        id: {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        title: {
            type : dataTypes.STRING(500),
            allowNull : false
        },
        rating : {
            type : dataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull : false
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

    const Movie = sequelize.define(alias, cols, config);

    return Movie
}