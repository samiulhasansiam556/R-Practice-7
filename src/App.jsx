
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import './App.css';
import { CountProvider } from './CountContex';

function App() {
  return (
   
    <CountProvider>

        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>

    </CountProvider>
   
 
  );
}

export default App;
