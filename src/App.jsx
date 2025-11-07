import "./App.css";
// import Controlled from "./assets/components/Controlled/Controlled";
// import SubmetFrom from "./assets/components/SubmetFrom/SubmetFrom";
import Statefulform from "./components/Statefulform/Statefulform";

function App() {



const handleSignSubmit =data =>{


 console.log("Sign in data:", data);
}
const handleRegistSubmit =data =>{


 console.log("Register data:", data)

}






  return <>
  
  {/* <SubmetFrom></SubmetFrom> */}
  {/* <Controlled></Controlled> */}
  <Statefulform  Submit ={"Sign"}  handleSignSubmit={handleSignSubmit}  >


<div>
  <h2>Sign in</h2> 
  <p>Sign in thes prage</p>
</div>

  </Statefulform>
  <Statefulform  Submit={"Regist in"} handleSignSubmit = {handleRegistSubmit}  >


    <div>
      <h2>Regist</h2>
      <p>Regist new</p>
         </div>
  </Statefulform>

  
  </>;
}

export default App;
