import React from 'react';

const EventModal = ({ event, onClose }) => (
  <div 
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300"
    onClick={onClose}
  >
    <div 
      className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-lg transform transition-transform duration-300"
      onClick={(e) => e.stopPropagation()} // Prevent click from closing the modal
    >
      <button 
        onClick={onClose} 
        className="text-gray-400 hover:text-gray-600 font-bold text-xl float-right"
      >
        &times;
      </button>
      <img 
        src={event.imageURL} 
        alt={event.eventName} 
        className="w-full h-48 object-cover rounded-md mb-4" 
      />
      <h2 className="text-2xl font-bold mb-2 text-gray-800">{event.eventName}</h2>
      <p className="text-sm text-gray-500 mb-4">{event.eventDate} - {event.location}</p>
      <p className="text-gray-600">{event.description}</p>
    </div>
  </div>
);

export default EventModal;