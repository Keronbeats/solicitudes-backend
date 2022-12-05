import { Router } from 'express';
import { getSolicitudes, 
         createSolicitudes, 
         updateSolicitudes, 
         deleteSolicitudes, 
         getSolicitud, 
         update1Solicitudes,
         uptadeCampoinSolicitud,
         deleteSolicitudByid
        } from '../controllers/solicitudes.controllers.js';
const router = Router();

router.get('/solicitudes', getSolicitudes);   // OBTENER TODAS LAS SOLICITUDES DE LA TABLA

router.get('/solicitudes/:id', getSolicitud); // OBTENER SOLO 1 SOLICITUD POR ID

router.post('/solicitudes', createSolicitudes);  //  PARA CREAR SOLICITUD

router.delete('/solicitudes/:id', deleteSolicitudes);

router.put('/solicitudes/:tipo', updateSolicitudes);

router.patch('/solicitudes/:id_encargado', update1Solicitudes);

router.patch('/solicitudes/:id_solicitud', uptadeCampoinSolicitud); // PARA ACTUALIZAR CAMPO RESUELTO DE TABLA SOLICITUD CON EL ID DE SOLICITUD

router.delete('/solicitudes/:id_solicitud', deleteSolicitudByid); // PARA ELIMINAR SOLICITUD POR ID DE LA TABLA SOLICITUD

export default router;
