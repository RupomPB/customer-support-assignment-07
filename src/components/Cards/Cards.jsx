import React from 'react';
import openimg from "/open.png"



const Cards = ({issue}) => {
    return (
       <div key={issue.id} className=' bg-[#fff8f8] rounded-2xl p-4 shadow-xl'>
                            <div className='flex justify-between items-center'>
                                <h3 className=' font-bold text-2xl'>{issue.title}</h3>
                               <div className=''>
                                  <span className={`font-bold text-green-700 text-lg rounded-3xl  py-2 px-5 flex justify-between gap-2 h-10 items-center 
                                 ${issue.status == 'Submitted'?
                                    'bg-green-100 text-green-400 px-4 py-1 rounded-3xl':
                                    issue.status == 'Resolved'?
                                    'bg-pink-100 text-pink-400 px-4 py-1 rounded-3xl':
                                    issue.status == 'In Progress'?
                                    'bg-yellow-100 text-yellow-400 px-4 py-1 rounded-3xl':
                                    'bg-blue-100 text-blue-400 px-4 py-1 rounded-3xl'
                                 }
                                 `}> <img src={openimg}></img> {issue.status}</span>
                               </div>
                            </div>

                            <p className=' text-[#627382] text-lg py-2'>{issue.description}</p>

                            <div className='flex  justify-between items-center'>
                                <div className='flex gap-4'>
                                    <p className=' text-[#627382] text-lg'>{issue.id}</p>
                                    <p className={`text-lg font-semibold 
                                    ${issue.priority == 'High'
                                        ? 'bg-red-100 text-red-400 px-4 py-1 rounded-3xl':
                                        issue.priority == 'Medium'?
                                        'bg-yellow-100 text-yellow-400 px-4 py-1 rounded-3xl':
                                        
                                        'bg-green-100 text-green-400 px-4 py-1 rounded-3xl'
                                    }
                                   
                                    `}>{issue.priority}</p>
                                </div>
                                <div className='flex gap-3'>
                                    <p className=' text-xl text-[#627382] font-bold'>{issue.customer}</p>
                                    <p>{issue.createdAt}</p>
                                </div>
                            </div>

                        </div>
    );
};

export default Cards;