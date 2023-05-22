const mongoose = require("mongoose");
const cheerio = require('cheerio');
const axios = require('axios');

const Profile = require("../models/Profile");
const dataProf = require('./profiles');
const profiles = dataProf.data;

const User = require("../models/User");
const dataU = require("./users")
const users = dataU.data;

const Videos = require("../models/Videos");
const dataV = require("./videos");
const videos = dataV.data;

const crearDB = () => {
    mongoose.connection.dropDatabase()
        .then(() => {
            console.log('Todas las colecciones de la base de datos han sido eliminadas.');

            const usuariosArray = users;
            const perfilesArray = profiles;
            const videosArray = videos;

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
                    console.log("Usuarios con sus perfiles añadidos");
                } catch (err) {
                    console.error(err);
                }
            };

            async function getYouTubeVideoInfo(url) {
                try {
                    const response = await axios.get(url);
                    const html = response.data;
                    const $ = cheerio.load(html);
                    const title = $('meta[name="title"]').attr('content');
                    const description = $('meta[name="description"]').attr('content');
                    return {
                        title,
                        description
                    };
                } catch (error) {
                    console.error('Error al obtener la información del video:', error);
                    return null;
                }
            }

            function getYouTubeThumbnail(url) {
                const videoId = url.match(/(?:v=|youtu.be\/)(.+)/)[1];
                const thumbnailUrl = 'https://img.youtube.com/vi/' + videoId + '/0.jpg';
                return thumbnailUrl;
            }

            const insertarVideos = async () => {
                try {
                    const videoInfoPromises = videosArray.map(video => {
                        return getYouTubeVideoInfo(video.videoUrl)
                            .then(videoInfo => {
                                if (videoInfo) {
                                    const titulo = videoInfo.title;
                                    const descripcion = videoInfo.description;
                                    return {
                                        videoUrl: video.videoUrl,
                                        title: titulo,
                                        description: descripcion,
                                        thumbnailUrl: getYouTubeThumbnail(video.videoUrl),
                                        likes: video.likes,
                                        categorie: video.categorie,
                                    };
                                }
                            })
                            .catch(error => {
                                console.error('Error:', error);
                            });
                    });

                    const videosInfoComp = await Promise.all(videoInfoPromises);
                    const videos = await Videos.insertMany(videosInfoComp);
                    console.log("Videos añadidos");
                } catch (err) {
                    console.error(err);
                }
            };

            const insertarListasDeVideos = async () => {
                try {
                    // Insertar listas de videos aquí
                } catch (err) {
                    console.error(err);
                }
            };

            insertarUsuariosPerfiles();
            insertarVideos();
            insertarListasDeVideos();
        })
        .catch((err) => {
            console.error(err);
        });
};

module.exports = crearDB;