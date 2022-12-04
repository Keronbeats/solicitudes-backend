import { Router } from 'express';
import { getSolicitudes, createSolicitudes, updateSolicitudes, deleteSolicitudes, getSolicitud} from '../controllers/solicitudes.controllers.js';
const router = Router();

router.get('/solicitudes', getSolicitudes);  
router.get('/solicitudes/:id', getSolicitud);

router.post('/solicitudes', createSolicitudes);

router.put('/solicitudes', updateSolicitudes);

router.delete('/solicitudes', deleteSolicitudes);

export default router;
