import { pool } from "../dbConection.js";
// OBTENER TODAS LAS SOLICITUDES DE LA TABLA
export const getSolicitudes = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Solicitud')
        res.json(rows)

    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}
// OBTENER SOLO 1 SOLICITUD POR ID 
export const getSolicitud = async (req, res) =>{
    try {
        const [rows] = await pool.query('SELECT * FROM Solicitud WHERE id_solicitud = ?', [req.params.id])

    if(rows.length <= 0) return res.status(404).json({
        message: 'SOLICITUD NOT FOUND'
    })
    console.log(rows)
    res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}
// CREAR USUARIO
//export const createSolicitudes = async (req, res) => {
//   const {tipo, type} = req.body
//   const [rows] = await pool.query('INSERT INTO TIPO_USUARIO(tipo, type) VALUES(?, ?)',
//    [tipo, type])
//   res.send({
//      id: rows.insertId,
//      tipo,
//      type,})}

//  PARA CREAR SOLICITUD
export const createSolicitudes = async (req, res) => {
        const {id_solicitud ,tipo_solicitud,email_usuario,descripcion,area,resuelto} = req.body
        try {
            const [rows] = await pool.query('INSERT INTO Solicitud(id_solicitud ,tipo_solicitud,email_usuario,descripcion,area,resuelto) VALUES(?,?,?,?,?,?)',
        [id_solicitud ,tipo_solicitud,email_usuario,descripcion,area,resuelto])
        res.send({id:rows.insertId,id_solicitud ,tipo_solicitud,email_usuario,descripcion,area,resuelto})
        } catch (error) {
            return res.status(500).json({
                message: 'Something goes wrong'
            })
        }
    }
// ELIMINAR TIPO DE USUARIO POR ID        
export const deleteSolicitudes = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM TIPO_USUARIO WHERE tipo = ?', [req.params.id])

    console.log(result)

    if(result.affectedRows <= 0) return res.status(404).json({
        message: 'User not found'
    })

    res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}
// ACTUALIZAR TODOS LOS DATOS POR ID
export const updateSolicitudes = async (req, res) => {
    const {tipo} = req.params
    const {type} = req.body

    try {
        const [result] = await pool.query('UPDATE TIPO_USUARIO SET type = ? WHERE tipo = ?',[type, tipo])

    if (result.affectedRows === 0) return res.status(404).json({
        message: 'User not found'
    })

    const [rows] = await pool.query('SELECT * FROM TIPO_USUARIO WHERE tipo = ?',[tipo])

    res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}
// ACTUALIZAR SOLO 1 DATO POR ID
export const update1Solicitudes = async (req, res) => {
    const {id_encargado} = req.params
    const {nombre, email} = req.body

    try {
        const [result] = await pool.query('UPDATE Encargado SET nombre = IFNULL(?, nombre), email = IFNULL(?, email) WHERE id_encargado = ?',[nombre, email, id_encargado])
    console.log(result)

    if (result.affectedRows === 0) return res.status(404).json({
        message: 'User not found'
    })

    const [rows] = await pool.query('SELECT * FROM Encargado WHERE id_encargado = ?',[id_encargado])

    res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

// PARA ACTUALIZAR CAMPO RESUELTO DE TABLA SOLICITUD CON EL ID DE SOLICITUD
export const uptadeCampoinSolicitud = async (req, res) => {
    const {id_solicitud} = req.params
    const {tipo_solicitud,email_usuario,descripcion,area,resuelto} = req.body

    try {
        const [result] = await pool.query('UPDATE Solicitud SET tipo_solicitud = IFNULL(?, tipo_solicitud), email_usuario = IFNULL(?, email_usuario), descripcion = IFNULL(?, descripcion), area = IFNULL(?, area), resuelto = IFNULL(?, resuelto) WHERE id_solicitud = ?',
        [tipo_solicitud,email_usuario,descripcion,area,resuelto,id_solicitud])
    console.log(result)

    if (result.affectedRows === 0) return res.status(404).json({
        message: 'Solicitud not found'
    })

    const [rows] = await pool.query('SELECT * FROM Solicitud WHERE id_solicitud = ?',[id_solicitud])

    res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}
// PARA ELIMINAR SOLICITUD POR ID DE LA TABLA SOLICITUD
export const deleteSolicitudByid = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM Solicitud WHERE id_solicitud = ?', [req.params.id_solicitud])

    console.log(result)

    if(result.affectedRows <= 0) return res.status(404).json({
        message: 'Solicitud not found'
    })

    res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}
