import './App.css';
import { Sushi as LocalSushi } from 'react-svg-icon-library';
import { Sushi as OnlineSushi } from '@jiayi920429/react-svg-icon-library';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LocalSushi style={{ width: '200px' }} />
        <p>This is the demo of using local package</p>
        <OnlineSushi style={{ width: '200px' }} />
        <p>This is the demo of using published package</p>
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
