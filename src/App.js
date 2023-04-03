import logo from './logo.svg';
import './App.css';
import Header from './header';

const App = () => {
  return (
    <div>
      <div> <Header /></div>
      <div className="App">
        <ul>
          <li>css</li>
          <li>html</li>
          <li>js</li>
          <li>react</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
