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
    if(allIssues.length ===0 ) setAllIssues(data)
  })


  const removeIssue =(id)=>{
    const removed= issueSelected.find(issue => issue.id ===id);
    toast.success(`${removed.title} - Resolved Done`)
    if(removed){
      setResolvedIssues([...resolvedIssues, removed]);
      setIssueSelected(issueSelected.filter(issue=> issue.id !==id));
    }
  
  }

  const handleIssueClicked=(issueData)=>{
        console.log("card clicked",issueData)
        
        toast.info(` ${issueData.title} - Added To Task`,{
          position: "top-center", 
          autoClose: 2000,
        })

        const updatedIssues =(allIssues.filter((issue)=>issue.id !== issueData.id));
        setAllIssues(updatedIssues);
        setIssueSelected([...issueSelected, issueData])

        if(updatedIssues.length ===0 ){
          toast.success("Congratulations No More Card Left")
         
        }
        
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
