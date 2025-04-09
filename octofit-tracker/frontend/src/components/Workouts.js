import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://turbo-train-x79v6w9v6563vqj6-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Workouts</h2>
      {workouts.map(workout => (
        <Card className="mb-3" key={workout._id}>
          <Card.Body>
            <Card.Title>{workout.name}</Card.Title>
            <Card.Text>{workout.description}</Card.Text>
            <Button variant="primary">Start Workout</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Workouts;
