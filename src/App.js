// css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Portfolio } from './components/Portfolio';
import { Resume } from './components/Resume';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Portfolio />
      <Resume />
    </div>
  );
}

export default App;
