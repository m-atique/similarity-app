"use client"
import {FC,useState} from 'react'
import Button from "@/ui/Button";
import { signOut } from 'next-auth/react';
import { toast } from './ui/toast';

interface SignOutProps {}


export const SingOutButton:FC<SignOutProps> = () => {
    const [isLoading, setIsLoading] =useState<boolean>(false)
//--------------------------------------------sign in google
    const SignOutWithgoogle = async()=>{
        setIsLoading(true)
        try {
            await signOut()
        } catch (error) {
            toast({
                title:' SignOut Error',
                message: 'Please try again later.',
                type: 'error',
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
