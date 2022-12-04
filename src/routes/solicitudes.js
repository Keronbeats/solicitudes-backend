import { Router } from 'express';
import { getSolicitudes, createSolicitudes, updateSolicitudes, deleteSolicitudes, getSolicitud, update1Solicitudes} from '../controllers/solicitudes.controllers.js';
const router = Router();

router.get('/solicitudes', getSolicitudes);  
router.get('/solicitudes/:id', getSolicitud);

router.post('/solicitudes', createSolicitudes);

router.delete('/solicitudes/:id', deleteSolicitudes);

router.put('/solicitudes/:tipo', updateSolicitudes);

router.patch('/solicitudes/:id_encargado', update1Solicitudes);


export default router;
