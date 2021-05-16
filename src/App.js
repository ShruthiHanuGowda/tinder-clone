import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className='App'>
      {/*  header */}
      <Header />
      {/* body  */}
      <TinderCards />
      {/* footer */}
      <SwipeButtons />
    </div>
  );
}

export default App;
