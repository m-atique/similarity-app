/** here we use two liberary clsx for using more than two class inputs 
  tailwind merge to merge classes e.g 
  if we have className = 'px-2,py2' then tailwind merge  it as 'p-2'
 */

import { ClassValue,clsx } from "clsx";
import {twMerge} from 'tailwind-merge'

export function cn(...inputs:ClassValue[]){
    return twMerge(clsx(inputs))
}

//------------now we can use this function anywhere to merge classes 
//1. its used in paragrgh component