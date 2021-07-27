
import './App.css';
// import Rando from './Rando';
// import Button from './Button';
// import BrokenClick from './BrokenClick';
import Clicker from './Clicker';
import Score from './Score';
import Lotto from './Lotto';

function App() {
  return (
    <div className="App">
      {/* <Rando maxNum={7} />
      <Button />
      <BrokenClick /> */}
      {/* <Clicker /> */}
      {/* <Score score={1} /> */}
      <Lotto name="Lotto" numBalls={6} maxNum={40} />
      <Lotto />
      <Lotto name="Mini Daily" numBalls={4} maxNum={20} />
    </div>
  );
}

export default App;
