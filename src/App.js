import React from 'react';
import Navbar from './components/Navbar';
import Links from './components/Links';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
     
      <main>
        <Links />
      </main>
      <Footer />
    </div>
  );
}

export default App;
