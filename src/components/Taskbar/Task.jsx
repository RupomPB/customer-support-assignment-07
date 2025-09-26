import React from 'react';

const Task = ({issueSelected , removeIssue,  }) => {

    console.log(issueSelected)

    // const handleremove =()=>{
    //     removeIssue(issueSelected)
    // }


    return (
        <div className=' '>
            {
                issueSelected.map((issueTask, index)=>{
                   return(
                     <div key={issueTask.id+ "-"+ index } className=' bg-white rounded-2xl p-5 space-y-3 m-2'>
                <h1 className=' text-xl font-semibold text-gray-600 '>{issueTask.title}</h1>
                <button onClick={()=>removeIssue(issueTask.id)} className=' bg-[#02a53b] text-white w-full rounded-2xl py-2 text-xl'>
                    Complete
                </button>
            </div>
                   )
                }
                )
            }
        </div>
    );
};

export default Task;