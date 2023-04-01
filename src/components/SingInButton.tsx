"use client"
import {FC,useState} from 'react'
import Button from "@/ui/Button";
import { signIn } from 'next-auth/react';
import { toast } from './ui/toast';

interface SignInProps {}


export const SingInButton:FC<SignInProps> = () => {
    const [isLoading, setIsLoading] =useState<boolean>(false)
//--------------------------------------------sign in google
    const signInWithgoogle = async()=>{
        setIsLoading(true)
        try {
            await signIn('google')
        } catch (error) {
            toast({
                title:' Signing In Error',
                message: 'Please try again later.',
                type: 'error',
            }
            )
        }
    }
    return (
        <Button  isLoading ={isLoading} 
        onClick={signInWithgoogle}>
            SignIn
        </Button>
    )
        
        
}
