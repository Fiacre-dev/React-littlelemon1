import React, { useState } from 'react';

function BookingForm() {
  // Définissez les états pour chaque champ du formulaire
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00'); // Définissez une valeur par défaut
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday'); // Définissez une valeur par défaut

  // Créez un état pour stocker les horaires disponibles
  const [availableTimes, setAvailableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]);

  // Gérez les changements de date
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  // Gérez les changements d'heure
  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  // Gérez les changements du nombre d'invités
  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };

  // Gérez les changements de l'occasion
  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  // Gérez la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Effectuez les actions nécessaires lors de la soumission du formulaire
    // Par exemple, vous pouvez envoyer les données à une API ici
    // Puis réinitialisez les champs du formulaire ou effectuez d'autres actions
  };

  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={handleTimeChange}>
        {availableTimes.map((timeOption) => (
          <option key={timeOption} value={timeOption}>
            {timeOption}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuestsChange} />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={handleOccasionChange}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
