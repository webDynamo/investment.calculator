
import { useState } from "react";
import Result from "./component/Result";
import Header from "./component/Header";
import UserInput from "./component/UserInput";
function App() {
  const [userInput,setuserInput]=useState(
    {
        initialInvestment:10000,
        annualInvestment:1200,
        expectedReturn:6,
        duration:10
    }
)
 const inputIsvalid=userInput.duration>=1;

function handleChange(inputIdentifier,newValue){
    setuserInput((prevUserInput)=>{
        return{
            ...prevUserInput,
            [inputIdentifier]:+newValue
        }
    })
}

  return (
    <div className="App">
       <Header/>
       <UserInput onChange={handleChange}  userInput={userInput}/>
      {!inputIsvalid && (<p>Please enter a valid duration</p>)}
      {inputIsvalid &&  <Result input={userInput}/>}
    </div>
  );
}

export default App;
