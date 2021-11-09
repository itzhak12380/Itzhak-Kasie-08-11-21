import logo from './logo.svg';
import './App.css';
import Header from './components/features/header';
import test from './components/pages/test'
import Home from './components/pages/Home';
import Container from './components/pages/container';
function App() {
  return (
    <div className="App">
      {/* <div style={{height:'100vh',display: 'flex',justifyContent:'center' ,width:'98vw',alignItems:'center'}}>
        <Home />
      </div> */}
      <Container/>
    </div>
  );
}

export default App;
