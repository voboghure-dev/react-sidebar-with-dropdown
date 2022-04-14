import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import { Reports, ReportsOne, ReportsThree, ReportsTwo } from './pages/Reports';
import Team from './pages/Team';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path='/overview' element={<Overview />} />
        <Route path='/team' element={<Team />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/reports/reports1' element={<ReportsOne />} />
        <Route path='/reports/reports2' element={<ReportsTwo />} />
        <Route path='/reports/reports3' element={<ReportsThree />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
