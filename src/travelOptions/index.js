import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './style/travelOptions.css';





const TravelOptions = () => {
  const [tripType, setTripType] = useState('oneway');
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [travelers, setTravelers] = useState(1);

  const handleTripTypeChange = (type) => {
    setTripType(type);
  };

  const handleSaveOptions = () => {
    // Handle saving options (you can store them in state or send to a server)
    console.log('Options saved:', {
      tripType,
      fromLocation,
      toLocation,
      departureDate,
      returnDate,
      travelers,
    });
  };

  return (
    <div className="travel-options-container">
      <div className="trip-type-selector">
        <button
          className={`trip-type-button ${tripType === 'oneway' ? 'active' : ''}`}
          onClick={() => handleTripTypeChange('oneway')}
        >
          One Way
        </button>
        <button
          className={`trip-type-button ${tripType === 'roundtrip' ? 'active' : ''}`}
          onClick={() => handleTripTypeChange('roundtrip')}
        >
          Round Trip
        </button>
        <button
          className={`trip-type-button ${tripType === 'multicity' ? 'active' : ''}`}
          onClick={() => handleTripTypeChange('multicity')}
        >
          Multi City
        </button>
      </div>

      <div className="bus-container">
      <div className="bus">
        <p className="top-text">From</p>
        <p className="bottom-text">Lagos, Nigeria</p>
      </div>

      <div className="bus">
        <p className="top-text">To</p>
        <p className="bottom-text">Calgary, Canada</p>
      </div>

      <div className="bus">
        <p className="top-text">Depart</p>
        <p className="bottom-text">30/12/2021</p>
      </div>

      <div className="bus">
        <p className="top-text">Return</p>
        <p className="bottom-text">21/04/2023</p>
      </div>

      <div className="bus">
        <p className="top-text">Travellers</p>
        <p className="bottom-text">One Adult</p>
      </div>
    </div>

      <button className="save-button" onClick={handleSaveOptions}>
        Save
      </button>
    </div>
  );
};

export default TravelOptions;
