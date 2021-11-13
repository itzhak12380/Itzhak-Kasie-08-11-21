import './App.css';
import Container from './components/pages/container';
import { useSelector } from 'react-redux';
function App() {
  const ThemColor = useSelector(state => state.ThemColor.data)
  return (
    <div className="App" style={{backgroundColor:ThemColor.backgroundColor}}>
      <Container />
    </div>
  );
}

export default App;
