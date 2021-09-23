import './css/reset.css';
import './css/index.css';
import LeftBar from './components/LeftBar/LeftBar';
import Main from './components/Main/Main';
import RightBar from './components/RightBar/RightBar';

function App() {
  return (
    <div className='app'>
      <LeftBar />
      <Main />
      <RightBar />
    </div>
  );
}

export default App;
