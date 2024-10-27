// EventCard.js
import React from 'react';

const EventCard = ({ event, onClick }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-200" onClick={() => onClick(event)}>
      <img src={event.imageURL} alt={event.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold">{event.name}</h2>
        <p>{event.date}</p>
        <p>{event.location}</p>
      </div>
    </div>
  );
};

export default EventCard;