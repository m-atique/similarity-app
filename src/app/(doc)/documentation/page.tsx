import {FC} from 'react';
import type { Metadata } from 'next';
import LargeHeading from '@/ui/largeHeading';
import Paragraph from '@/components/ui/paragragh';

const metadata:Metadata ={
    title:'Similarity api | Documentation',
    description:'Free & open source text similarity app'
}


const page:FC = ({})=>{
return<div className = 'container max-w-7xl mx-auto mt-12'>
   <div className="flex flex-col items-center gap-6">
    <LargeHeading>
        Making request
    </LargeHeading>
    <Paragraph> api/v1/similarity</Paragraph>
   </div>

</div>
}

export default page