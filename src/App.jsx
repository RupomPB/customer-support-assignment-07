import "./App.css";
import Banner from "./components/Banner/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer/Footer";
import { toast, ToastContainer } from 'react-toastify';
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
    if(allIssues.length ===0 ){
      setAllIssues(data)
    }
  })


  const removeIssue =(id)=>{
    const removed= issueSelected.find(issue => issue.id ===id);
    
    if(!removed) return;
    
      
      const updatedRemoved ={...removed, status:"Resolved"};
      
      toast.success(`${removed.title} - Resolved Done`)

      setResolvedIssues([...resolvedIssues, updatedRemoved]);
      setIssueSelected(issueSelected.filter(issue=> issue.id !==id));
    setAllIssues(allIssues.filter(issue=> issue.id !==id));  
  
  }

  const handleIssueClicked=(issueData)=>{
    if(!issueData) return;
        console.log("card clicked",issueData)
        
      
      const alreadySelected = issueSelected.find(issue=> issue.id === issueData.id);
      if(alreadySelected){
        toast.warn(`${issueData.title} is already in progress`)
        return
      }

      // const updatedIssues =(allIssues.filter((issue)=>issue.id !== issueData.id));
      // setAllIssues(updatedIssues);
      // setIssueSelected([...issueSelected, issueData])
      const updatedIssue ={...issueData, status:"In Progress"};
      
      toast.info(` ${issueData.title} - Added To Task`,{
        position: "top-right", 
        autoClose: 2000,
      })
      setIssueSelected([...issueSelected, updatedIssue]);
      
        // if(updatedIssues.length ===0 ){
        //   toast.success("Congratulations No More Card Left")
         
        // }
        
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


      <ToastContainer></ToastContainer>

    </>
  );
}

export default App;
