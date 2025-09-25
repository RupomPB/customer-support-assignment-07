import React from 'react';
import { use } from 'react';
import Cards from '../components/Cards/Cards';
import Container from '../components/Container';




const IssueManagement = ({fetchPromise}) => {

    const initialData = use(fetchPromise)
    console.log(initialData)

    return (
        <Container>

            <div className=" border-2 border-amber-400 grid grid-cols-12 ">

                    <div className='border-2 border-red-500 col-span-9 p-2'>
                    <h1 className=' text-3xl font-semibold p-4 text-gray-500 '>Customer Tickets</h1>
                    <div className=' grid grid-cols-2 gap-4'>
            {
                initialData.map(issue =>{
                    console.log(issue);
                 return (

                     <Cards key={issue.id} issue={issue}></Cards>   

                 )
                })
            }
                    </div>
                    </div>
        </div>
        </Container>
    );
};

export default IssueManagement;