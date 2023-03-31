import { HTMLAttributes,forwardRef } from "react";
import { VariantProps,cva } from "class-variance-authority";
import {cn} from '../lib/utils'


const headingVariants = cva(
    'text-black dark:text-white text-center font-extrabold leading-tight tracking-tight',
    {
 variants:{
    size:{
        default:'text-4xl md:text-5xl lg:text-6xl',
        sm:'text-2xl md:text-3xl lg:text-4xl',
        lg:'text-5xl md:text-6xl lg:text-7xl',
    },
    default:{
        size:'default'
    }

 }
}  
)

//-------------interface

interface LargeHeadingProps
extends HTMLAttributes<HTMLHeadElement>,VariantProps<typeof headingVariants>{}

//-----------component
const Pragragh = forwardRef<HTMLHeadingElement, LargeHeadingProps>(
    ({ className, size, children, ...props }, ref) => {
      return (
        <p 
        ref={ref}
        {...props}
        className={cn(headingVariants({size,className}))} >
          {children}
        </p>
      );
    }
  );

  Pragragh.displayName= 'Heading'

  export default Pragragh

