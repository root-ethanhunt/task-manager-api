const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')


const app = express()
const port = process.env.PORT


// app.use((req,res,next)=>{
//    if(req.method === 'GET'){
//      res.send('GET requests are disabled')
//    } else{
//      next()
//    }
// })

// app.use((req,res,next)=>{
//  res.status(503).send('Site is currently down. Check back soon!')
// })



// const multer = require('multer')
// const upload = multer({
//   dest:'images',
//   limits:{
//     fileSize:1000000

//   },
//   fileFilter(req,file,cb){
//     if(!file.originalname.match(/\.(doc|docx)$/)){
//        return cb(new Error('Please upload a Word document'))
//     }

//     cb(undefined,true)

   
//   }
// })


// const errorMiddleware = (req,res,next)=>{
//   throw new Error('From my middleware')
// }


// app.post('/upload',upload.single('upload'),(req,res)=>{
//   res.send()
// },(error,req,res,next)=>{
//     res.status(400).send({error:error.message})
// })



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port,()=>{
    console.log('Server is up on port ' + port)
})










// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async()=>{
 
//   const user = await User.findById('5fdc7342b6691d42a486cd06')
//   await user.populate('tasks').execPopulate()
//   console.log(user.tasks)


// }

// main()


// const jwt = require('jsonwebtoken')

// const myFunction = async ()=>{
// const token = jwt.sign({_id:'abc123'},'thisismynewcourse',{expiresIn:'7 days'})
// console.log(token)

// const data = jwt.verify(token,'thisismynewcourse')
// console.log(data)
// }








// const bcrypt = require('bcryptjs')
// const myFunction = async()=>{
//     const password = 'Red12345!'
//     const hashedPassword = await bcrypt.hash(password,8)

//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('Red12345!',hashedPassword)
//     console.log(isMatch)
// }

//myFunction()

