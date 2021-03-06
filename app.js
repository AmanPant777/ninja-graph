const express=require('express')
const {graphqlHTTP}=require('express-graphql')
const Schema=require('./schema/schema.js')


const app=express()
app.use('/graphql',graphqlHTTP({
 schema:Schema,
 graphiql:true
})
)

app.listen(4000,()=>console.log('App listening to Port 4000'))