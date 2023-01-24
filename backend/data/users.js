import bcrypt from 'bcryptjs'
const users=[
    {
        name:'Admin User',
        email:'admin@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true

    },
    {
        name:'Kumar Amit',
        email:'KumarAmit@example.com',
        password:bcrypt.hashSync('123456',10)

    },
    {
        name:'Amit Kumar',
        email:'AmitKumar@example.com',
        password:bcrypt.hashSync('123456',10)

    },
]

export default users