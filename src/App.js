import React, { useState } from 'react';
import EventCard from './components/Eventcard';
import EventModal from './components/EventModal';
import events from './data/events.json';

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const openModal = (event) => setSelectedEvent(event);
  const closeModal = () => setSelectedEvent(null);

  // Filter events based on the search term with defensive checks
  const filteredEvents = events.filter(event => {
    const name = event.name ? event.name.toLowerCase() : ''; // Fallback to empty string if undefined
    const location = event.location ? event.location.toLowerCase() : ''; // Fallback to empty string if undefined

    return name.includes(searchTerm.toLowerCase()) || location.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">EventSpot Lite</h1>
      
      <input
        type="text"
        placeholder="Search events..."
        className="w-full max-w-md mx-auto mb-6 p-2 rounded border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
        onChange={(e) => setSearchTerm(e.target.value)} // Update search term state
      />
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} onClick={() => openModal(event)} />
          ))
        ) : (
          <p className="text-center text-gray-500">No events found.</p> // Display message if no events match
        )}
      </div>

      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;