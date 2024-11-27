const pool = require('../model/db')

 class Usuarios{
 async Read(request,response){
      try {
        const database = await pool.query('SELECT * FROM usuarios');
        response.status(200).json(database.rows)
      } catch (error) {
        response.status(500).json({error: error.message})
      }
  }
  async Criar(request,response){
        const {name,email,password} = request.body;
        
        try {
          const database = await pool.query(`INSERT INTO usuarios (name,email,password)VALUES($1 , $2, $3) RETURNING *`, [name,email,password ])
          response.status(201).json(database.rows[0])
        } catch (error) {
          response.status(500).json({error:error.message})
        }

        
  }

}

module.exports = Usuarios;



