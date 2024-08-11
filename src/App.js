
import './App.css';
import Body from './components/Body';
import { BrowserRouter ,Routes , Route} from 'react-router-dom'
import Donate from './components/Donate';
import Currentsituation from './components/currentsituation';
import Weatherpage from './components/weatherpage';
import ViewMap from './components/ViewMap';
function App() {
  return (
    <div>
      <BrowserRouter> 
           <Routes>
                  <Route  path='/' element={<Body/>} />
                  <Route  path='/weather' element={<Weatherpage/>}/>
                  <Route  path='/donate' element={<Donate/>}/>
                  <Route  path='/current' element={<Currentsituation/>}/>
                  <Route  path='/viewmap' element={<ViewMap/>}/>


            
            </Routes> 
       </BrowserRouter>
    </div>
     
  );
}

export default App;
