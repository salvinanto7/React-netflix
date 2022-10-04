
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Rowpost from './Components/Rowpost/Rowpost';
import {ACTION,ORIGINALS,COMEDY,HORROR} from './urls'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost url={ORIGINALS}  title='Netflix Original'/>
      <Rowpost url={ACTION} title='Action' isSmall />
      <Rowpost url={COMEDY} title='Comedy' isSmall />
      <Rowpost url={HORROR} title='Horror' isSmall />
    </div>
  );
}

export default App;
