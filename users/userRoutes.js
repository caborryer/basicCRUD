const router = require("express").Router();


const userControllers = require("./controllers");
const fundacionController = require("../adopciones/fundaciones");
const comentarioController = require("../comentarios/comentarioController");


const usuario = new userControllers();
const fundacion = new fundacionController();
const comentario = new comentarioController();

router.route('/registro').post(usuario.guardar);
router.route('/login').post(usuario.login);


// fundaciones
router.route('/agregarFundacion').post(fundacion.guardar);
router.route('/fundaciones').get(fundacion.mostrarFundaciones);

//comentarios
router.route('/agregarComentarios').post(comentario.guardar);
router.route('/obtenerComentarios').get(comentario.obtenerComentarios);
router.route('/:id').get(comentario.obtenerComentario);





module.exports = router;
