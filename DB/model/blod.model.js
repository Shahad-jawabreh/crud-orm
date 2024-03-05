import { DataTypes  }  from 'sequelize';
import {sequelize} from '../connection.js'
const BlogTable = sequelize.define('TableBlogs', 
{
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  body: {
    type: DataTypes.STRING(200),
    allowNull: false,
    
  },
} ,
  { timestamps: false
});
export default BlogTable ;

//email, password, bio,name