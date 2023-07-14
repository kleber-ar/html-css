import Greeting from "./components/greeting"
import LuckyNumbers from "./components/luckyNumbers"
import PastResults from "./components/PastResults";
import './App.css';

function App() {

  return (
    <>
     <Greeting person={{fistName: "Kleber",lastNmae: "Rodrigues"}} />
     <LuckyNumbers/>
     <PastResults/>
    </>
  );
}

export default App
