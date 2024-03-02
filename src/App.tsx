import { Routes, Route } from 'react-router-dom';
import MintPage from './pages/MintPage/MintPage';
import MintList from './pages/MintList/MintList';
import { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';

function App() {
  useEffect(() => {
    WebApp.expand();
  }, []);

  return (
   <>
    <Routes>
      <Route path="*" element={<MintPage />} />
      <Route path="/mint" element={<MintPage />} />
      <Route path="/list" element={<MintList />} />
    </Routes>
   </>
  );
}

export default App;
