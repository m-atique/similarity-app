'use client'
import {ReactNode} from 'react'
import {ThemeProvider} from 'next-themes';
import {SessionProvider}from 'next-auth/react'

const Provider=({children}:{children:ReactNode})=>{
    return(
    <ThemeProvider enableSystem defaultTheme='system' attribute='class'>
        <SessionProvider>
            {children}
        </SessionProvider>
    </ThemeProvider>
    )
}


