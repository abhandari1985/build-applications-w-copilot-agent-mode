import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://turbo-train-x79v6w9v6563vqj6-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Teams</h2>
      {teams.map(team => (
        <Card className="mb-3" key={team._id}>
          <Card.Body>
            <Card.Title>{team.name}</Card.Title>
            <Card.Text>Members: {team.members}</Card.Text>
            <Button variant="primary">View Team</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Teams;
