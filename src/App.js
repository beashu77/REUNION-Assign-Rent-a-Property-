
import './App.css';
import Form from './Components/Form';
import Propertys from './Components/Propertys';
import Navbar from "./Components/Navbar";
import style from "./Components/PropertysStyle.module.css"
function App() {
  return (
    <div id={style} className="App">
      <Navbar />
     <Propertys/>
     {/* <Form/> */}
    </div>
  );
}

export default App;
