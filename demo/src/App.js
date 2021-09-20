import './App.css';
import { Sushi } from 'react-svg-icon-library';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Sushi style={{ width: '200px' }} />
        <p>The demo of using svg icon</p>
        <a
          className="App-link"
          href="https://github.com/jiayi1992/react-svg-icon-library"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </header>
    </div>
  );
}

export default App;
