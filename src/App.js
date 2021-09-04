// import './App.css';
import Nav from './components/nav';
import Poster from './components/poster';
import Timeline from './components/timeline';
import Today from './components/today';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Poster></Poster>
      <Timeline></Timeline>
      <Today></Today>
    </div>
  );
}

export default App;
