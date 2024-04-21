
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Dashboard from './Pages/Dashboard';
import ActiveCases from './Pages/ActiveCases';
import History from './Pages/HistoryCases';


function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/active-cases" element={<ActiveCases/>} />
        <Route path="/history" element={<History/>} />
        {/* <Route path="/logout" component={Logout} /> */}
      </Routes>
    </Router>
  );
}

export default App;