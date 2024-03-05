import express from 'express';
import initapp from './app.router.js'
const app = express()
initapp(app,express)
app.listen(4000,()=>{
    console.log('listening on 4000');
})