import './App.css';
import AirlineData from './components/AirlineData'
import AirportData from './components/AirportData'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        Airline Travel API Portal        
      </header>
      <main>
        
        <AirlineData />
        
        <AirportData />

      </main>

    </div>
  );
}

export default App;
