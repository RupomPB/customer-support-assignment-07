import React from 'react';

import Container from '../Container';


const Banner = ({issueSelected=[],  resolvedIssues=[]}) => {
    return (
         <Container>
        <div className=" grid grid-cols-2 justify-between gap-10 py-8">

          {/* progress part */}
          <div className="  h-[250px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex flex-col justify-center items-center rounded-2xl relative">

          <div className=" absolute left-0 top-0 h-full">
            <img src="/public/bg-left.png"></img>
          </div>
          <div className=" absolute right-0 top-0 h-full">
            <img src="/public/bg-right.png"></img>
          </div>
            <h3 className=" font-bold text-4xl text-white">In-Progress</h3>
            <p className=" font-semibold text-white text-6xl mt-3">{issueSelected.length}</p>
          </div>


          {/* resolved part */}
          <div className="h-[250px] bg-gradient-to-r from-[#54CF68] to-[#00827A]  flex flex-col justify-center items-center rounded-2xl relative">

          <div className=" absolute left-0 top-0 h-full">
            <img src="/public/bg-left.png"></img>
          </div>
          <div className=" absolute right-0 top-0 h-full">
            <img src="/public/bg-right.png"></img>
          </div>
            <h3 className=" font-bold text-4xl text-white">Resolved </h3>
            <p className=" font-semibold text-white text-6xl mt-3">{resolvedIssues.length}</p>
          </div>
        </div>
      </Container>
    );
};

export default Banner;