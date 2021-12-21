import React,{useState, useEffect} from 'react';
import './App.css';
import Container from './components/pages/container';
import { useSelector } from 'react-redux';
import { getCity } from './components/features/fetchData';
import {LimitExceeded} from './components/features/errorComponent'
function App() {
  const [isKeyExpierd, setisKeyExpierd] = useState(false)
  useEffect(async () => {
    await getCity()
      .then(() => setisKeyExpierd(false))
      .catch(() => setisKeyExpierd(true))
  }, [])
  const ThemColor = useSelector(state => state.ThemColor.data)
  if (isKeyExpierd) {
    return (
      <div style={{width:'100vw', display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <LimitExceeded/>
      </div>
    )
  }
  return (
    <div className="App" style={{backgroundColor:ThemColor.backgroundColor}}>
      <Container />
    </div>
  );
}

export default App;
