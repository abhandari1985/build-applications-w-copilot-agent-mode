import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';

function App() {
  const [backendStatus, setBackendStatus] = useState('');

  useEffect(() => {
    fetch('https://turbo-train-x79v6w9v6563vqj6-8000.app.github.dev/api/status/') // Updated endpoint to check backend status
      .then((response) => response.json())
      .then((data) => setBackendStatus(data.status))
      .catch((error) => setBackendStatus('Error connecting to backend'));
  }, []);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">OctoFit Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#activities">Activities</Nav.Link>
            <Nav.Link href="#leaderboard">Leaderboard</Nav.Link>
            <Nav.Link href="#teams">Teams</Nav.Link>
            <Nav.Link href="#workouts">Workouts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <header className="App-header">
        <h1 className="display-4">Welcome to OctoFit Tracker</h1>
        <p className="lead">Track your fitness activities and compete with others!</p>
        <p>Backend Status: {backendStatus}</p>
      </header>
    </div>
  );
}

export default App;
