import { useState } from 'react';
import './App.css';
import BVK from './BVK';



function App() {

  const[name,setName]=useState('BVK');
  
  const changeFullName = ()=>{
    setName("Bandi Vamshi Krishna");
    alert(name);
  }

  return (
    <div className="App">
      

  <p>Hi This is {name}</p>
<button onClick={changeFullName} type='button'>Change Full Name</button>


<BVK></BVK>
    </div>

    
  );
  
}

export default App;
