import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={`${process.env.PUBLIC_URL}/img/Lionel.png`}
         class="lionel" 
         alt="picture of lionel" />
        <h1>Hello....! </h1>
        <audio controls>
          <source src={`${process.env.PUBLIC_URL}/hello/Lionel-Richie-Hello.mp3`} type='audio/mpeg'></source>
          Sorry, but it seems that lionel can't sing hello right now!!
        </audio>
        <p>
          is it me you looking for? <br/>
        </p>

        {/* this is made just for fun */}
      </header>
    </div>
  );
}

export default App;
