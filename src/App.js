import '../src/styles/App.css';
import 'flexboxgrid';
import Header from '../src/Components/Header/Header';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
