import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from './Sidebar';
import Menu  from './Menu';
import DragAndDrop from './DragAndDrop';

function App() {
  return (
    <div className="App">  
   
     <Sidebar/> 
     <Menu/>
    </div>
  );
}

export default App;