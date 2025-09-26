import "./App.css";
import Banner from "./components/Banner/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer/Footer";

import Navbar from "./components/Navbar/Navbar";
import Task from "./components/Taskbar/Task";

// import Cards from "./components/Cards/Cards";
import IssueManagement from "./IssueManagement/IssueManagement";
import { Suspense, useState } from "react";


const fetchIssue = async()=>{
  const result = await fetch("/data.json");
  return result.json();
}


function App() {

  const [allIssues, setAllIssues] = useState([])
  const [issueSelected, setIssueSelected] = useState([])
  const [resolvedIssues, setResolvedIssues] = useState([])


  const fetchPromise = fetchIssue();
  fetchPromise.then((data)=>{
    if(allIssues.length ===0 ) setAllIssues(data)
  })


  const removeIssue =(id)=>{
    const removed= issueSelected.find(issue => issue.id ===id);
    if(removed){
      setResolvedIssues([...resolvedIssues, removed]);
      setIssueSelected(issueSelected.filter(issue=> issue.id !==id));
    }
  
  }

  const handleIssueClicked=(issueData)=>{
        console.log("card clicked",issueData)
        
        setAllIssues(allIssues.filter((issue)=>issue.id !== issueData.id));

        setIssueSelected([...issueSelected, issueData])
    }

  return (
    <>
      <Navbar></Navbar>
    <div className="color">
      {/* Banner */}
      <Banner resolvedIssues={resolvedIssues}  issueSelected ={issueSelected}></Banner>
      
      {/* customer card */}
      <Suspense fallback="Loading.....">
        <IssueManagement resolvedIssues={resolvedIssues} allIssues={allIssues} handleIssueClicked={handleIssueClicked}  removeIssue ={removeIssue} issueSelected={issueSelected} setIssueSelected ={setIssueSelected} fetchPromise={fetchPromise}></IssueManagement>

        
      </Suspense>



    </div>



      {/*footer   */}
      <Footer></Footer>
    </>
  );
}

export default App;
