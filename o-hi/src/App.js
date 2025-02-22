import './App.css';
import HomePage from './components/HomePage';
import Nomination from './components/Nomination';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primereact/resources/primereact.min.css'; // for general styles
import 'primeicons/primeicons.css'; // for icons
import Leaderboard from './components/Leaderboard';
import Connect from './components/Connect';
import Add from './components/Add';
import Footer from './components/Footer';
function App() {
  return (
    <>
     <HomePage></HomePage>
     <Nomination></Nomination>
     <Leaderboard></Leaderboard>
     <Connect></Connect>
     <Add></Add>
     <Footer></Footer>
    </>
   
    
  );
}

export default App;
