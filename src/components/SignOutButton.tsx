import {FC,useState} from 'react'
import Button from "@/ui/Button";
import { signOut } from 'next-auth/react';

interface SignOutProps {}


export const SingInButton:FC<SignOutProps> = () => {
    const [isLoading, setIsLoading] =useState<boolean>(false)
//--------------------------------------------sign in google
    const SignOutWithgoogle = async()=>{
        setIsLoading(true)
        try {
            await signOut()
        } catch (error) {
            toast({
                title:' SignOut Error',
                meaddage:'Please Try Again ',
                type:error
            }
            )
        }
    }
    return (
        <Button  isLoading ={isLoading} 
        onClick={SignOutWithgoogle}>
            SignOut
        </Button>
    )
        
        
}
