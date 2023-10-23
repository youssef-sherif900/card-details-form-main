import { useState } from 'react';
import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [info , setInfo] = useState({
    cardNumber:"0000000000000000",
    userName:"USER NAME",
    M:"00",
    Y:"00",
    cvc:"000"
  })
  let changingEvents = (e) =>{
    let {name , value} = e.target
    setInfo(prev =>{return{
      ...prev,
      [name]:value
    }})
  }
  return (
    <div className="App">
    <LeftContainer
     cardNumber={info.cardNumber}
     userName={info.userName}
     m ={info.M}
     y={info.Y}
     cvc = {info.cvc}
       />
    <RightContainer changing ={changingEvents} validate={info} />
    </div>
  );
}

export default App;
