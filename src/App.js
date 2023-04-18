// css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Portfolio } from './components/Portfolio';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Portfolio />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
