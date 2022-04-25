import '../src/styles/App.css';
import '../src/Components/DarkMode/DarkMode.css'
import 'flexboxgrid';
import Header from '../src/Components/Header/Header';
import Home from '../src/Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
