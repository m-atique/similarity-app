import { getServerSession } from "next-auth"
import Link from "next/link"

//---------------------------importing components
import { buttonVariants } from "./ui/Button"

const  NavBar = async({})=> {
    const session =  await getServerSession()
    return (
        <div className="z-50 flex items-center justify-between bg-white/75 dark:bg-slate-900 backdrop-blur-sm shadow-sm border-b border-slate-300 dark:border-slate-900 fixed h-20 left-0 right-0 top-0 ">
            <div className="container flex item-center justify-between max-w-7xl w-full mx-auto ">
                <div>
                    <Link href='/' className={buttonVariants({variant:'link'})}>
                        Text Similarity App 1.0
                    </Link>
                </div>
                <div className="md:hidden ">
                    <Toggletheme />
                </div>

                <div className="hidden md:flex gap-4">
                    <Toggletheme />
                    <Link href='/documentation' className={buttonVariants({variant:'ghost'})}>
                        Documentation
                    </Link>
                    {session ? (
                        <>
                        <Link href='/dashboard' className={buttonVariants({variant:'ghost'})}>
                        DashBoard
                        </Link>
                        <SignOutButton />
                        </>

                    ):(
                   <SignInButton />
                    )    
                }
                </div>

            </div>
        </div>
    )
}

export default NavBar
