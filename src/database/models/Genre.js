/* const { DataTypes } = require("sequelize");
const { sequelize } = require(".");
const { config } = require("dotenv"); 
const Sequelize = require('sequelize');
const sequelize = require('../database') */

module.exports = (sequelize, DataTypes) => {
    
    const alias = "Genre";
    const cols = {
        id: {
            type : DataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        name: {
            type : DataTypes.STRING(100),
            allowNull : false
        },
        ranking : {
            type : DataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            unique : true
        },
        active : {
            type : DataTypes.BOOLEAN,
            allowNull : false,
            /* underscored : true */
            defaultValue : 1
        }/* ,
        awards : {
            type : DataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            defaultValue : 0
        },
        releaseDate : {
            type : DataTypes.DATE,
            allowNull : false,
        },
        length : {
            type : DataTypes.INTEGER.UNSIGNED,
           //  allowNull : true  // POR DEFECTO
            defaultValue : null,
        },
        genreID : {
            type : DataTypes.INTEGER.UNSIGNED,
            defaultValue : null,
        } */
    } 

    const config = {
        tableName : 'genres', // Si no le paso nada me toma el nombre de la tabla en plural y lo convierte. Automatiza
        timestamps : true, /* MARCAS DE ERROR: Si no las tiene y no le avisamos a Sequelize que no las tiene, se genera un error  */
        underscored : true, /* AVISA QUE LAS MARCAS DE TIEMPO (timestamps) ESTAN ESCRITAS EN ESE FORMATO */
        
    }

    /* SIEMPRE DECLARAR */

    const Genre = sequelize.define(alias /* 'Genre' */, cols, config);

    return Genre
}