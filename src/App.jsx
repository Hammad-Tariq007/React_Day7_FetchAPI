import { useState, useEffect } from "react";
import Card from './components/Card';
import Navbar from './components/Navbar';
import Footer from './Footer';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <header className="app-header">
        <h1>Welcome to My App</h1>
        <p>Explore the latest posts below</p>
      </header>
      <div className="card-grid">
        {data.map((item) => (
          <Card key={item.id} id={item.id} title={item.title} body={item.body} />
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
