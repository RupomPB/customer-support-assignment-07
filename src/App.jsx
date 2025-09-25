import "./App.css";
import Banner from "./components/Banner/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer/Footer";

import Navbar from "./components/Navbar/Navbar";

// import Cards from "./components/Cards/Cards";
import IssueManagement from "./IssueManagement/IssueManagement";
import { Suspense } from "react";


const fetchIssue = async()=>{
  const result = await fetch("/data.json");
  return result.json();
}


function App() {

  const fetchPromise = fetchIssue();



  return (
    <>
      <Navbar></Navbar>

      {/* Banner */}
      <Banner></Banner>
      
      {/* customer card */}
      <Suspense fallback="Loading.....">
        <IssueManagement fetchPromise={fetchPromise}></IssueManagement>
      </Suspense>





      {/*footer   */}
      <Footer></Footer>
    </>
  );
}

export default App;
