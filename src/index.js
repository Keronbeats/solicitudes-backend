import express from 'express';
import solicitudesRoutes from './routes/solicitudes.js';

import indexRoutes from './routes/index.js';

const app = express();

app.use(express.json())

app.use(indexRoutes);
app.use("/api",solicitudesRoutes);

app.listen(5000);
console.log('sever running on port 5000');
