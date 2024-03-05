import User from '../../../DB/model/user.model.js'

export const  login = async(req, res)=>{
   
    try{
        const {email, password} =req.body;
        const result = await User.findAll({
            where:{email,password}
        });
        if(result.length!=0){
            return res.json("welcome")
        }
       
        return res.json({massege: "your name or password not correct"})
    }catch(err){
        return res.json ({massege : err.message})
    }
}

export const signup = async(req, res)=>{
    
    try{
        const {name,email,password,bio} = req.body;
    const newUser = await User.create({
        name,
        email,
        password,
        bio
      });
     return res.json("you added successfully")
    }catch(err){
        if(err.original?.errno==1062){
            return  res.json({massege : "this email is already exists"});
        }
     
    }
}
