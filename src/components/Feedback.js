// src/components/Feedback.js
import React from 'react';
import { Card } from 'react-bootstrap';
import './Feedback.css';

const Feedback = () => {
  const feedbacks = [
    { name: 'Jenny Wilson', feedback: 'The food was excellent...', rating: 5 },
    { name: 'Dianne Russell', feedback: 'We enjoyed the Eggs Benedict...', rating: 4 },
    { name: 'Devon Lane', feedback: 'Normal wines are wines...', rating: 4 },
    { name: 'Jenny Wilson', feedback: 'The food was excellent...', rating: 5 },
    { name: 'Dianne Russell', feedback: 'We enjoyed the Eggs Benedict...', rating: 4 },
    { name: 'Devon Lane', feedback: 'Normal wines are wines...', rating: 4 },
    { name: 'Jenny Wilson', feedback: 'The food was excellent...', rating: 5 },
    { name: 'Dianne Russell', feedback: 'We enjoyed the Eggs Benedict...', rating: 4 },
    { name: 'Devon Lane', feedback: 'Normal wines are wines...', rating: 4 },
    
  ];

  return (
    <Card className="feedback-card">
      <Card.Body>
        <Card.Title>Customer Feedback</Card.Title>
        <div className="feedback-list">
          {feedbacks.map((item, index) => (
            <div key={index} className="feedback-item">
              <p className="feedback-name">{item.name}</p>
              <p className="feedback-text">{item.feedback}</p>
              <p className="feedback-rating"><strong>Rating:</strong> {item.rating} Stars</p>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Feedback;
