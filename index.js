import express from 'express';
import initapp from './app.router.js'
const app = express()
initapp(app,express)
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`);
})