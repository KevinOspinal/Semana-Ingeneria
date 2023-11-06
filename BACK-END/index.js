const express = require('express')
const app = express(); 
const morgan = require('morgan') // Importa el módulo morgan (para el registro de solicitudes
const cors = require('cors') // Importa el módulo cors (para permitir solicitudes cruzadas entre dominios
const cookieParser = require('cookie-parser')

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
})) // Habilita el middleware CORS para permitir solicitudes desde otros dominios
app.use(express.json()) // Habilita el middleware para analizar datos JSON en las solicitudes
app.use(morgan('dev')) // Habilita el middleware morgan con el formato 'dev' para registrar las solicitudes entrantes en la consola
app.use(cookieParser())

<<<<<<< HEAD
app.use(cors())
app.use(express.json())

//METODO PARA CREAR UNA SEDE CARES MONDA
app.post('/createHeadquarters', createHeadquarters)
//METODO PARA MOSTRAR UNA SEDE CARES ALEXIS NANDO CAMILO
app.get('/getHeadquarters', getHeadquarters)
//METODO PARA MOSTRAR UNA SOLA SEDE CARES ALEXIS NANDO CAMILO
app.get('/getOnlyHeadquarters/:nombre', getOnlyHeadquerters)
//METODO PARA ELIMINAR Y VALER MONDA
app.delete('/deleteHeadquarters/:id', DeleteHeadquarters);
//METODO PARA EDITAR LA MONDA DE LAS SEDES
app.put('/updateHeadquarters/:id', updateHeadquarters);
//-----------------------------------------------------------------------------------------------------------------------
//METODO PARA CREAR UN TIPO DE USUARIO
app.post('/createUserType', createUserType)
//METODO PARA MOSTRAR UN TIPO DE USUARIO
app.get('/getUserType', getUserType)
//METODO PARA MOSTRAR UN SOLO TIPO DE USUARIO
app.get('/getOnlyUserType/:descripcion', getOnlyUserType)
//METODO PARA ELIMINAR UN TIPO DE USUARIO
app.delete('/deleteUserType/:id', deleteUserType);
//METODO PARA EDITAR UN USUARIO
app.put('/updateUserType/:id', updateUserType);
//-------------------------------------------------------------------------------------------------------------------------
//METODO PARA CREAR UNA CONFERENCIA
app.post('/createConferences', createConferences)
//METODO PARA MOSTRAR UNA CONFERENCIA
app.get('/getConferences', getConferences)
//METODO PARA MOSTRAR UNA SOLA CONFERENCIA
app.get('/getOnlyConferences/:nombre', getOnlyConferences)
//METODO PARA ELIMINAR UNA CONFERENCIA
app.delete('/deleteConferences/:id', deleteConferences);
//METODO PARA EDITARR UNA CONFERENCIA
app.put('/updateConferences/:id', updateConferences);
//--------------------------------------------------------------------------------------------------------------------------
//METODO PARA CREAR OTRO EVENTO
app.post('/createOtherEvent', createOtherEvent);
//METODO PARA MOSTRAR LOS OTROS EVENTOS
app.get('/getOtherEvent', getOtherEvent);
//METODO PARA ELIMINAR OTRO EVENTO
app.delete('/deleteOtherEvent/:id', deleteOtherEvent);
//METODO PARA EDITAR un evento
app.put('/updateOtherEvent/:id', updateOtherEvent);
//--------------------------------------------------------------------------------------------------------------------------
//METODO PARA CREAR ROL PROYECTO
app.post('/createProject_Role', createProject_Role);
//METODO PARA MOSTRAR ROL PROYECTO
app.get('/getProject_Role', getProject_Role);
//METODO PARA MOSTRAR UN ROL PROYECTO
app.get('/getOnlyProject_Role/:descripcion', getOnlyProject_Role)
//METODO PARA ELIMINAR ROL PROYECTO
app.delete('/deleteProject_Role/:id', deleteProject_Role);
//METODO PARA EDITAR ROL PROYECTO
app.put('/updateProject_Role/:id', updateProject_Role);
//----------------------------------------------------------------------------------------------------------
//METODO PARA CREAR  Project_Type
app.post('/createProject_Type',createProject_Type);

//METODO PARA MOSTRAR Project_Type
app.get('/getProject_Type', getProject_Type);

//METODO PARA MOSTRAR UN Project_Type
app.get('/getOnlyProject_Type/:descripcion', getOnlyProject_Type)

//METODO PARA ELIMINAR Project_Type
app.delete('/deleteProject_Type/:id', deleteProject_Type);

//METODO PARA EDITAR Project_Type
app.put('/updateProject_Type/:id', updateProject_Type);

//-----------------------------------------------------
//METODO PARA CREAR TIPO DOCUMENTO
app.post('/createDocument_Type', createDocument_Type);
//METODO PARA MOSTRAR TIPO DOCUMENTO
app.get('/getDocument_Type', getDocument_Type);
//METODO PARA MOSTRAR UN TIPO DOCUMENTO
app.get('/getOnlyDocument_Type/:descripcion_Tipo', getOnlyDocument_Type)
//METODO PARA ELIMINAR TIPO DOCUMENTO
app.delete('/deleteDocument_Type/:id', deleteDocument_Type);
//METODO PARA EDITAR TIPO DOCUMENTO
app.put('/updateDocument_Type/:id', updateDocument_Type);

//-----------------------------------------------------
//METODO PARA CREAR TIPO EVENTO
app.post('/createEvent_Type', createEvent_Type);
//METODO PARA MOSTRAR TIPO EVENTO
app.get('/getEvent_Type', getEvent_Type);
//METODO PARA MOSTRAR UN TIPO EVENTO
app.get('/getOnlyEvent_Type/:descripcion_otro_evento', getOnlyEvent_Type)
//METODO PARA ELIMINAR TIPO EVENTO
app.delete('/deleteEvent_Type/:id', deleteEvent_Type);
//METODO PARA EDITAR TIPO EVENTO
app.put('/updateEvent_Type/:id', updateEvent_Type);

//-----------------------------------------------------
//METODO PARA CREAR FACULTADES
app.post('/createFaculties', createFaculties);
//METODO PARA MOSTRAR FACULTADES
app.get('/getFaculties', getFaculties);
//METODO PARA MOSTRAR UNA FACULTAD
app.get('/getFaculties/:nombre_facultad', getOnlyFaculties)
//METODO PARA ELIMINAR FACULTADES
app.delete('/deleteFaculties/:id', DeleteFaculties);
//METODO PARA EDITAR FACULTADES
app.put('/updateFaculties/:id', updateFaculties);
//------------------------------------------------------
//METODO PARA CREAR PROYECTOS
app.post('/createProjects', createProjects);
//METODO PARA MOSTRAR PROYECTOS
app.get('/getProjects', getProjects);
//METODO PARA MOSTRAR UN PROYECTO
app.get('/getOnlyProjects/:nombre', getOnlyProjects)
//METODO PARA ELIMINAR PROYECTO
app.delete('/deleteProjects/:id', deleteProjects);
//METODO PARA EDITAR PROYECTO
app.put('/updateProjects/:id', updateProjects);
=======
// Importamos rutas desde diferentes archivos
const auth_Routes = require('./src/router/auth.routes')
const conferences_Routes = require('./src/router/conferences.routes')
const document_type_Routes = require('./src/router/document_type.routes')
const event_type_Routes = require('./src/router/event_type.routes')
const faculties_Routes = require('./src/router/faculties.routes')
const headquarters_Routes = require('./src/router/headquarters.routes')
const other_events_Routes = require('./src/router/other_events.routes')
const programs_Routes = require('./src/router/programs.routes')
const project_type_Routes = require('./src/router/project_type.routes')
const project_role_Routes = require('./src/router/project_role.routes')
const projects_Routes = require('./src/router/projects.routes')
const user_type_Routes = require('./src/router/user_type.routes')
>>>>>>> main

// Utilizamos las rutas importadas en la aplicación
app.use('/api',auth_Routes)
app.use(conferences_Routes)
app.use(document_type_Routes)
app.use(event_type_Routes)
app.use(faculties_Routes)
app.use(headquarters_Routes)
app.use(other_events_Routes)
app.use(programs_Routes)
app.use(project_type_Routes)
app.use(project_role_Routes)
app.use(projects_Routes)
app.use(user_type_Routes)


app.listen(3000, () => {
    console.log('El servidor esta escuchando en el puerto :', 'http://localhost:3000/')
})
