import { ApiProvider } from './context/ApiContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import './App.css';
import SignUpForm from './components/sign-up-form/SignUpForm';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <ApiProvider>
        <Router>
          <SignUpForm />
        </Router>
      </ApiProvider>
    </div>
  );
}

export default App;
