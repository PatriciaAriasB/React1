
import './App.css'
import Person from "./components/Person/Person"
 
const name = "Pepe";
  const surname = "Roni";
  const age = 32;
  
  function App() {
  
    return (
      <div className="App">
          <Person name={name} surname={surname} age={age}n />
          <Person name= "Loles" surname="Leon" age={57} />
          <Person name="Laura" surname="Navarro" age={37} />
        </div>
      );
      
    }
    
  
  
  export default App;