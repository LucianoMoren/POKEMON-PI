const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Pokemons",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      Nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      Imagen: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Ataque: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Defensa: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Velocidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Altura: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Peso: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
