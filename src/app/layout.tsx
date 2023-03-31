import '@/styles/globals.css'
import { cn } from '@/components/lib/utils'
import { Inter } from 'next/font/google'
import Providers from '@/components/Providers'
import NavBar from '@/components/NavBar'



const inter = Inter({subsets:['latin']})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
    lang="en"
    className={cn('dark:text-white antialiased bg-white text-slate-900',inter.className)}>
      <body className='min-h-screen bg-slate-50 dark:bg-slate-900 antialiased'>
        <Providers>
        {children}

        <NavBar />
        </Providers>
        {/** for better mobile view */}
        <div  className='h-40 md:hidden'/>
        
        </body>
    </html>
  )
}
