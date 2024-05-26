import SignUpForm from './components/sign-up-form/SignUpForm';
import { ApiProvider } from './context/ApiContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <ApiProvider>
        <SignUpForm />
      </ApiProvider>
    </div>
  );
}

export default App;
