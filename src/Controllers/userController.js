const pool = require('../model/db')
const bcrypt = require('bcrypt')

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
          const saltos = 10;
          const hashedPassord = await bcrypt.hash(password, saltos)


          const database = await pool.query(`INSERT INTO usuarios (name,email,password)VALUES($1 , $2, $3) RETURNING *`, [name,email,hashedPassord ])
          response.status(201).json(database.rows[0])

         
           
  
      
        
        } catch (error) {
          response.status(500).json({error:error.message})
        }

        
  }

  async UpdateUser(req,res){
      const {id} = req.params;
      const {name,email,password} = req.body;

      try {
        const database = await pool.query('UPDATE usuarios SET name = $1 , email = $2, password = $3 WHERE id = $4 returning * ', [name,email,password,id])

        res.status(200).json(database.rows[0])
      } catch (error) {
        res.status(500).json({error:error.message})
      }
  }

  async DeleteUser(req,res){
      const {id} =  req.params;

      try {
        await pool.query('DELETE FROM usuarios WHERE id = $1', [id])
        res.status(200).json({message: "Usuario deletado com sucesso"})
      } catch (error) {
        res.satus(500).json({error:error.message})
      }
  }

}

module.exports = Usuarios;



