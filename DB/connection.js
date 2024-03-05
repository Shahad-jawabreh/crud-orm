import {Sequelize}  from "sequelize"

export const sequelize = new Sequelize(
    'orm', // TutorialsPoint
    'root', // root
    '',{
       dialect: 'mysql',
       host: 'localhost'
    }
)
export const connection = async()=>{
    try{
        return await sequelize.sync({alter: true})
    }catch(e){
        console.log(e.massege)
    }
}