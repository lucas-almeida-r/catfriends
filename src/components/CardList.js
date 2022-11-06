import React from 'react';
import Card from './Card';

const CardList = ({ users }) => {
  //throw new Error('Uncomment to test <ErrorBoundary> component');

  const cards = users.map(user => 
    <Card 
      key={user.id} 
      id={user.id} 
      name={user.name} 
      email={user.email}
    />
  );

  return (
    <div>
      {cards}
    </div>
  );
}

export default CardList;
