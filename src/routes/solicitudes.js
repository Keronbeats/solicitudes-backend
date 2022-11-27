import { Router } from 'express';

const router = Router();

router.get('/solicitudes', (req, res) => {
  res.send('obteninedo solicitudes');
});

router.post('/solicitudes', (req, res) => {
  res.send('creando solicitudes');
});

router.put('/solicitudes', (req, res) => {
  res.send('actualizando solicitudes');
});

router.delete('/solicitudes', (req, res) => {
  res.send('eliminando solicitud');
});

export default router;
