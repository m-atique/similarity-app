import { getServerSession } from "next-auth"
import Link from "next/link"

//---------------------------importing components
import { buttonVariants } from "./ui/Button"
import { SingInButton } from "@/components/SingInButton"
import { SingOutButton } from "@/components/SignOutButton"
import { ThemeToggle } from "./ThemeToggle"
const  NavBar = async({})=> {
    const session =  await getServerSession()
    return (
        <div className="z-50 flex items-center justify-between bg-white/75 dark:bg-slate-900 backdrop-blur-sm shadow-sm dark:shadow-slate-700 border-b border-slate-300 dark:border-slate-900 fixed h-20 left-0 right-0 top-0 ">
            <div className="container flex item-center justify-between max-w-7xl w-full mx-auto ">
                <div>
                    <Link href='/' className={buttonVariants({variant:'link'})}>
                        Text Similarity App 1.0
                    </Link>
                </div>
                <div className="md:hidden ">
                    <ThemeToggle />
                </div>

                <div className="hidden md:flex gap-4">
                    <ThemeToggle />
                    <Link href='/documentation' className={buttonVariants({variant:'ghost'})}>
                        Documentation
                    </Link>
                    {session ? (
                        <>
                        <Link href='/dashboard' className={buttonVariants({variant:'ghost'})}>
                        DashBoard
                        </Link>
                        <SingOutButton />
                        </>

                    ):(
                   <SingInButton />
                    )    
                }
                </div>

            </div>
        </div>
    )
}

export default NavBar
