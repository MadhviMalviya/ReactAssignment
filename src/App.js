// import logo from './logo.svg';


 import './App.css';

 import Submit from "./submit";
 import Phone from "./phone";
 import Heading from "./heading";
 import Password from "./password";

 function App() {
   return (
     <div  className="form" > 
 <Heading headingText="Register here..." />
 <Phone  />
 <Password />
 <Submit btnText="submit"/>
    
     </div>
  );
}

 export default App;



