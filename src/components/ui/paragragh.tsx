import { HTMLAttributes, forwardRef } from "react"; 
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

//----this code will create variants of paragragh
export const paragraphVariants = cva(
  'max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center',
  {
    variants: {
      size: {
        default: 'text-base sm:text-lg',
        sm: 'text-sm sm:text-base',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

//---------------------------------paragragh interface

/** here we define the interface with to extentions HTMLAttributes of type pragragh 
 and its variants as a type of prghraghvarants
 */

 interface ParagraphProps
 extends React.HTMLAttributes<HTMLParagraphElement>,
   VariantProps<typeof paragraphVariants> {}
//-------------------------------------------component
/** here we are using farwardref from react to use refrences
 * its helpfull in use of this component if we use ref in rendering   then that will lead us to this component*/
const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(paragraphVariants({ size, className }))}>
        {children}
      </p>
    )
  }
)

Paragraph.displayName = 'Paragraph'

export default Paragraph