import { Routes, Route } from 'react-router-dom';
import MintPage from './pages/MintPage/MintPage';

function App() {
  return (
   <>
    <Routes>
      <Route path="*" element={<MintPage />} />
      <Route path="/mint" element={<MintPage />} />
    </Routes>
   </>
  );
}

export default App;
