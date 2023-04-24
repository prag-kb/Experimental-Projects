import './App.css';
import { Homepage } from './components/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUpPage from './components/SignUpPage';

function App() {
  return (
    <div className="App">
      <SignUpPage/>
      {/* <Homepage/> */}
    </div>
  );
}

export default App;
