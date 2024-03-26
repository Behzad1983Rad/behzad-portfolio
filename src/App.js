import React, { useEffect } from 'react';
import './App.css';
import '../src/assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Main from './components/Index.jsx';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Main />
    </>
  );
}

export default App;
