import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
        <p>This is neither a header nor a footer.</p>
      <Footer />
    </div>
  );
}

export default App;
