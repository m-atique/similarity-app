import { AuthOptions } from "next-auth";
import { db } from "./db";
import  {PrismaAdapter} from '@next-auth/prisma-adapter'
import GoogleProvider from 'next-auth/providers/google'

function getGoogleCredientials(){
    const clientId =process.env.GOOGLE_CLIENT_ID
    const clientSecret=process.env.GOOGLE_CLIENT_SECRET

    if(!clientId ||clientId.length === 0){
        throw new Error('Client id for googlle provider is not set')
    }
    if(!clientSecret ||clientSecret.length === 0){
        throw new Error('clientSecret for googlle provider is not set')
    }

    return {clientId , clientSecret}
}

export const authOptions:AuthOptions ={
    adapter:PrismaAdapter(db),
    session:{
        strategy:'jwt'
    },
    pages:{
        signIn:'/login'
    },
    providers:[
        GoogleProvider({
            clientId:getGoogleCredientials().clientId,
            clientSecret: getGoogleCredientials().clientSecret,
        })
    ],
    callbacks :({
        async session({token,session}){
            if(token){
                session.user.id =token.id
                session.user.name =token.name
                session.user.email =token.email
                session.user.image =token.picture
            }
            return session 
        },
        async jwt({token,user}){
            const dbuser = db.user.findfirst({
                where:{
                    email:token.email
                }
            })

            if(!dbuser){
                token.id =user!.id
                return token
            }
            return {
                id:dbuser.id,
                name:dbuser.name,
                email:dbuser.email,
                picture:dbuser.picture
            }
        },
            redirect(){
                return '/dashboard'

        }
    })
    
};