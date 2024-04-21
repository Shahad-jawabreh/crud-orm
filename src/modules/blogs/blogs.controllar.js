import BlogTable from '../../../DB/model/blod.model.js'
import User from '../../../DB/model/user.model.js';

export const getBlogs = async(req, res) =>{
    
    try{
        const result = await BlogTable.findAll({
            attributes: ['title'],
            include: [{
              model: User,
              attributes: ['name']
            }]
        });
        if(!result.length) {
            return res.json("no blogs found");
        }
        return res.json({result})
    }catch(err) {
        return res.json(err.message)
    }
}
export const addBlogs =async(req, res) =>{
    const {title, body} = req.body
    try{
        const result = await BlogTable.create({
            title,
            body
        });
        return res.json("added successfully")
    }catch(err){
        console.log(err)
        
        if(err.original?.errno==1062){
            return res.json({massege:"this title is already exist"})
        }if(err.original?.errno==1452){
            return res.json({massege:"the user id not found"})
        }
        return res.json(err.stack)
    }
}

