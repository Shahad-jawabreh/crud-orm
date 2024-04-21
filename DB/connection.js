import {Sequelize}  from "sequelize"

export const sequelize = new Sequelize(
    'freedb_orm_db', // TutorialsPoint
    'freedb_shahd', // root
    'P@CyJx7hT?%m3Zd',{
        port:3306,
       dialect: 'mysql',
       host: 'sql.freedb.tech'
    }
)
export const connection = async()=>{
    try{
        return await sequelize.sync({alter: true})// {alter: true} if any change will be compile 
    }catch(e){
        console.log(e.massege)
    }
}