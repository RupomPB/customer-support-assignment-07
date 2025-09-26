import React from 'react';
// import { use } from 'react';
import Cards from '../components/Cards/Cards';
import Container from '../components/Container';
import Task from '../components/Taskbar/Task';




const IssueManagement = ({ setIssueSelected , issueSelected , removeIssue, handleIssueClicked , allIssues, resolvedIssues}) => {

    // const initialData = use(fetchPromise)
    // console.log(initialData)

    return (
        <Container>

            <div className=" border-2 border-amber-400 grid grid-cols-12 py-10">

                    <div className='border-2 border-red-500 col-span-9 p-2'>
                    <h1 className=' text-3xl font-semibold p-4 text-gray-500 '>Customer Tickets</h1>

                    {/* cards sections*/}
                    <div className=' grid grid-cols-2 gap-4'>
            {
                allIssues.map(issue =>{
                    {/* console.log(issue); */}
                 return (

                     <Cards key={issue.id} handleIssueClicked={handleIssueClicked} issueSelected={issueSelected} setIssueSelected ={setIssueSelected}  issue={issue}></Cards>   

                 )
                })
            }
                    </div>
                    </div>

            {/* task sections */}
                    <div className='border-2 border-black col-span-3 '>
                       <h1 className=' text-2xl p-5 font-semibold text-gray-500'> Task Status</h1> 
                <Task resolvedIssues={resolvedIssues} removeIssue={removeIssue} issueSelected ={issueSelected} ></Task>

                    </div>
        </div>
        </Container>
    );
};

export default IssueManagement;