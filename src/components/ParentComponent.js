// ParentComponent.js
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <ChildComponent message={message} onMessageChange={handleMessageChange} />
      <p>Message from ChildComponent: {message}</p>
    </div>
  );
};

export default ParentComponent;
