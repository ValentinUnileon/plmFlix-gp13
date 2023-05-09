const mongoose = require("mongoose");

const Profile = require("../models/Profile");
var dataProf = require('./profiles');
var profiles = dataProf.data;


const User = require("../models/User");
var dataU = require("./users")
var users = dataU.data;


const crearDB = () => {
    // Eliminar todas las colecciones de la base de datos
    mongoose.connection.dropDatabase()
        .then(() => {
            console.log('Todas las colecciones de la base de datos han sido eliminadas.');

            // Continúa con la creación de nuevas colecciones y la inserción de datos
            const usuariosArray = users;
            const perfilesArray = profiles;


            ///Funciones
            const insertarUsuariosPerfiles = async () => {
                try {
                    const usuarios = await User.insertMany(usuariosArray);

                    const perfilesConReferencia = perfilesArray.map(perfil => {
                        const usuarioAsociado = usuarios.find(usuario => usuario.username === perfil.user);
                        return {

                            name: perfil.name,
                            user: usuarioAsociado._id
                        };
                    });

                    const perfiles = await Profile.insertMany(perfilesConReferencia);
                } catch (err) {
                    console.error(err);
                }
                console.log("Usuarios con sus perfiles añadidos");
            };


            ///Ejecucion
            insertarUsuariosPerfiles();
            //insertarVideos();

        })
        .catch((err) => {
            console.error(err);
        });
};

module.exports = crearDB;