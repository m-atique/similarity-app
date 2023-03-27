import { FC, HTMLAttributes, forwardRef } from "react";  // FC standas for functional coponent
import {VariantProps, cva} from 'class-variance-authority'

//----this code will create variants of paragragh
const pragraghVeriants = cva(
'max-w-prose text-center text-slate-700 dar:text-slate-300  mb-2',
{
    variants:{
        size:{
            default:'text-basesm:text-lg',
            sm:'text-base'
        },
        default:{
            size:'default'
        }
    }

}
)

//---------------------------------paragragh interface

/** here we define the interface with to extentions HTMLAttributes of type pragragh 
 and its variants as a type of prghraghvarants
 */


interface PragraghProp 
extends HTMLAttributes<HTMLParagraphElement>,VariantProps<typeof pragraghVeriants>{}

//-------------------------------------------component
/** here we are using farwardref from react to use refrences
 * its helpfull in use of this component if we use ref in rendering   then that will lead us to this component*/
 const Pragragh = forwardRef<HTMLParagraphElement,PragraghProp>(
    ({className,size,children,...props},ref)=>{
    return <p ref={ref} className={} {...props} >my Paragrgh</p>
    }
 )

 export default Pragragh