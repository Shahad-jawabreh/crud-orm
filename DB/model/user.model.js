import { DataTypes  }  from 'sequelize';
import {sequelize} from '../connection.js'
import Blog from './blod.model.js';
const User = sequelize.define('Users', 
{
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  bio: {
    type: DataTypes.STRING(100),
  },
  email: {
    type: DataTypes.STRING(200),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  isAdmin : {
    type: DataTypes.BOOLEAN
  },} ,
  { timestamps: false
});
User.hasMany(Blog,{
  foreignKey:{
    name:"UserId",
    type:DataTypes.INTEGER
  }
})
Blog.belongsTo(User)

export default User ;

//email, password, bio,name