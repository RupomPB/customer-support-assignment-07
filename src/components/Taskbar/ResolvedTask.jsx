import React from 'react';

const ResolvedTask = ({resolvedIssues,}) => {
    console.log(resolvedIssues)
    return (
        <div>
            {
                resolvedIssues.map((resolvedTask, index)=>{
                    return(
                        <div key={resolvedIssues.id+ "-"+ index} className='bg-[#e0e7ff] p-5 rounded-2xl m-3'>
                <h1 className=' text-gray-700 font-semibold text-xl'>
                {resolvedTask.title}
            </h1>
            </div>
                    )
                })
            }
        </div>
    );
};

export default ResolvedTask;