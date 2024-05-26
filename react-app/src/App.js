import { ApiProvider } from './context/ApiContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import ChosenPlanPage from './pages/ChosenPlanPage';
import GlobalStyles from './GlobalStyles';
import './App.css';
import { BtnClickedProvider } from './context/ClickedBtnContext';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <ApiProvider>
        <BtnClickedProvider>
          <Router>
            <Routes>
              <Route path="/" element={<SignUpPage />} />
              <Route path="/chosen-plan" element={<ChosenPlanPage />} />
            </Routes>
          </Router>
        </BtnClickedProvider>
      </ApiProvider>
    </div>
  );
}

export default App;