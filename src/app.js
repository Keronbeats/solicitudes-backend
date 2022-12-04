import express from 'express';
import solicitudesRoutes from './routes/solicitudes.js';

import indexRoutes from './routes/index.js';



const app = express();

app.use(express.json())

app.use(indexRoutes);
app.use("/api",solicitudesRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint not found'
    })
})

export default app;