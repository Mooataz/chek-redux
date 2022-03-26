import logo from './logo.svg';
import './App.css';
import Access from './Components/Access';
import 'bootstrap/dist/css/bootstrap.min.css';
import Editask from './Components/Editask'
import Addtask from './Components/Addtask'
import Filtred from './Components/Filtred'
import {Routes,Route} from 'react-router-dom'
import ListTask from './Components/ListTask';
//<Routes>
      //   <Route path="/" />
        //<Route path="/Editask" element={<Editask />} />
         //<Route path="/Addtask" element={<Addtask />} />
         //<Route path="/Filtred" element={<Filtred />} />
     // </Routes>
function App() {
  return (
    <div className="App">
      <Access />
      <ListTask />
      <Routes>
      <Route path="/" />
      <Route path="/Addtask" element={<Addtask />} />
      <Route path="/Editask" element={<Editask />} />
      <Route path="/Filtre" element={<Filtred  />} />
      </Routes>
    </div>
  );
}

export default App;
