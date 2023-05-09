const mongoose = require("mongoose");

const Profile = require("../models/Profile");
const profiles = require('./profiles');


const User = require("../models/User");
const users = require('./users');


const crearDB = () => {
    // Eliminar todas las colecciones de la base de datos
    mongoose.connection.dropDatabase()
        .then(() => {
            console.log('Todas las colecciones de la base de datos han sido eliminadas.');

            // Continúa con la creación de nuevas colecciones y la inserción de datos
            const usuariosArray = users;

            const perfilesArray = profiles;

            const insertarUsuariosPerfiles = async () => {
                try {
                    const usuarios = await User.insertMany(usuariosArray);
                    console.log('Usuarios creados:', usuarios);

                    const perfilesConReferencia = perfilesArray.map(perfil => {
                        const usuarioAsociado = usuarios.find(usuario => usuario.username === perfil.user);
                        return {
                            usuario: usuarioAsociado._id,
                            name: perfil.name
                            // Otros campos del perfil
                        };
                    });

                    const perfiles = await Profile.insertMany(perfilesConReferencia);
                    console.log('Perfiles creados:', perfiles);

                    // Continuar con el resto del código
                } catch (err) {
                    console.error(err);
                }
            };

            insertarUsuariosPerfiles()
        })
        .catch((err) => {
            console.error(err);
        });
};

module.exports = crearDB;