import { pool } from "../dbConection.js";

export const getSolicitudes = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM TIPO_USUARIO')
    res.json(rows)
}
export const getSolicitud = async (req, res) =>{
    const [rows] = await pool.query('SELECT * FROM TIPO_USUARIO WHERE tipo = ?', [req.params.id])

    if(rows.length <= 0) return res.status(404).json({
        message: 'TYPE OF USER NOT FOUND'
    })
    console.log(rows)
    res.json(rows[0])
}
export const createSolicitudes = async (req, res) => {
    const {tipo, type} = req.body
    const [rows] = await pool.query('INSERT INTO TIPO_USUARIO(tipo, type) VALUES(?, ?)',
    [tipo, type])
    res.send({
        id: rows.insertId,
        tipo,
        type,
    })
}

export const updateSolicitudes = (req, res) => {res.send('actualizando solicitudes');}

export const deleteSolicitudes = (req, res) => {res.send('eliminando solicitud');}