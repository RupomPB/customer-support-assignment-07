import React from 'react';
// import { use } from 'react';
import Cards from '../components/Cards/Cards';
import Container from '../components/Container';
import Task from '../components/Taskbar/Task';
import ResolvedTask from '../components/Taskbar/ResolvedTask';


const IssueManagement = ({ setIssueSelected , issueSelected , removeIssue, handleIssueClicked , allIssues, resolvedIssues}) => {

    // const initialData = use(fetchPromise)
    // console.log(initialData)

    return (
        <Container>

            <div className="  grid grid-cols-12 py-10">

                    <div className='col-span-12 lg:col-span-9 p-2'>
                    <h1 className=' text-3xl font-semibold p-4 text-gray-500 '>Customer Tickets</h1>

                    {/* cards sections*/}
                    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
            {
                allIssues.length ===0 ?(
                    <p> No More Cards Left</p>
                ) : (
                    allIssues.map(issue =>{
                    {/* console.log(issue); */}
                 return (

                     <Cards key={issue.id} handleIssueClicked={handleIssueClicked} issueSelected={issueSelected} setIssueSelected ={setIssueSelected}  issue={issue}></Cards>   

                 )
                })
                )
            }
                    </div>
                    </div>

            {/* task sections */}
                    <div className=' col-span-12  lg:col-span-3 '>
                       <h1 className=' text-2xl p-5 font-semibold text-gray-500'> Task Status</h1> 
                <Task resolvedIssues={resolvedIssues} removeIssue={removeIssue} issueSelected ={issueSelected} ></Task>
                <h1 className=' text-2xl p-5 font-semibold text-gray-500'>Resolved  Task</h1>

                <ResolvedTask resolvedIssues={resolvedIssues} issueSelected={issueSelected}></ResolvedTask>
                    </div>
        </div>
        </Container>
    );
};

export default IssueManagement;