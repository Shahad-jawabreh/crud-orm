import User from '../../../DB/model/user.model.js'

export const deleteUser = async (req, res) => {
  try {
    const id = req.query.id;
    const userdeleted = await User.destroy({
      where: { id },
    });
    if (!userdeleted) return res.json({ massege: "this user not found" });
    return res.json({ massege: "deleted successfully" });
  } catch (err) {
    return res.json({ massege: err.message });
  }
};

export const updateUser = async(req, res)=>{
    try {
        const id = req.query.id;
        const name = req.body.name;
        const userupdated = await User.findOne(
          { 
            where : {id}
         }
         );
        if (!userupdated) return res.json({ massege: "this user not found" });
        await User.update(
            { name }, // Provide the values to update here
            { where: { id } } // Provide the options, including the where clause
          );
        return res.json({ massege: "update successfully" });
      } catch (err) {
        return res.json({ massege: err.message });
      }
}

export const getUsers = async (req, res) => {
    try{

        const users = await User.findAll();
        return res.json(users);
    }catch(err) {
        return res.json({massege: err.message });
    }
}

export const addUsers =async(req, res) =>{

  const {  name,bio,email,password,isAdmin} = req.body
  try{
      const result = await User.create({
        name,bio,email,password,isAdmin
      });
      return res.json("added successfully")
  }catch(err){
      console.log(err)
      
      if(err.original?.errno==1062){
          return res.json({massege:"this user is already exist"})
      }
      return res.json({err})
  }
}