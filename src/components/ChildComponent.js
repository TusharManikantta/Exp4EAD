// ChildComponent.js
import React from 'react';

const ChildComponent = ({ message, onMessageChange }) => {
  const handleChange = (event) => {
    const newMessage = event.target.value;
    onMessageChange(newMessage);
  };

  return (
    <div>
      <h3>Child Component</h3>
      <input type="text" value={message} onChange={handleChange} />
    </div>
  );
};

export default ChildComponent;
