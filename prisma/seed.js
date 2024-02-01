const bcrypt = require('bcryptjs')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient ()

const password = bcrypt.hashSync('1234')
const userData = [
    { username : 'andy', password : password, email : 'andy@ggg.com' },
    { username : 'bobby', password : password, email : 'bobby@ggg.com' },
    { username : 'candy', password : password, email : 'candy@ggg.com' },
]

const todoData = [
    { title : 'Learn HTML', duedate: new Date(), userId: 7 },
    { title : 'Learn CSS', duedate: new Date(), userId: 8 },
    { title : 'Learn JS', duedate: new Date(), userId: 8 },
    { title : 'Learn React', duedate: new Date(), userId: 9 },

]

const run = async () => {
    // await prisma.user.deleteMany({})
    // await prisma.todo.deleteMany({})

    await prisma.user.createMany({
        data : userData
    })
    await prisma.todo.createMany({
        data : todoData
    })
}

run()
