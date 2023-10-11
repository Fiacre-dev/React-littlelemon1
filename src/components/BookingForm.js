import React, { useState } from 'react';

function BookingForm({ availableTimes, onDateChange }) {
  // Étape 1 : Utilisez l'état et les fonctions de changement d'état passés en tant que props
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Anniversaire');
  const [formValid, setFormValid] = useState(false);


  const validateDate = () => {
 // Récupérez la date actuelle
 const currentDate = new Date();

 // Récupérez la date sélectionnée dans le format "yyyy-mm-dd"
 const selectedDate = new Date(date);

 // Comparez la date sélectionnée avec la date actuelle
 // Par exemple, assurez-vous que la date sélectionnée est supérieure ou égale à la date actuelle
 const isDateValid = selectedDate >= currentDate;

 return isDateValid;
  };

  const validateTime = () => {
    // Récupérez l'heure sélectionnée sous forme de chaîne de caractères
    const selectedTime = time;

    // Définissez une expression régulière pour valider l'heure au format HH:mm
    const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

    // Utilisez la méthode test de l'expression régulière pour vérifier si l'heure est valide
    const isTimeValid = timeRegex.test(selectedTime);

    return isTimeValid;
  };
  // Fonction de validation pour l'occasion
  const validateOccasion = () => {
  // Liste des occasions valides
  const validOccasions = ['Anniversaire', 'Anniversaire de mariage'];

  // Vérifiez si l'occasion est dans la liste des options valides
  const isValid = validOccasions.includes(occasion);

  return isValid;
};


  const validateForm = () => {
    const isDateValid = validateDate();
    const isTimeValid = validateTime();
    const isValid = validateOccasion();
        // Validez d'autres champs
    const isFormValid = isDateValid && isTimeValid && isValid /* autres champs valides */;
    setFormValid(isFormValid);
  };


 // Gérez les changements de date
 const handleDateChange = (e) => {
  const newDate = e.target.value;
  setDate(newDate);
  // Étape 2 : Appelez la fonction de changement de date passée en tant que prop
  onDateChange(newDate);
  validateForm(); // Appelez la fonction de validation globale
};

 // Gérez les changements d'heure
 const handleTimeChange = (e) => {
  const newTime = e.target.value;
  setTime(newTime);
  validateForm(); // Appelez la fonction de validation globale
};

// Gérez les changements du nombre d'invités
const handleGuestsChange = (e) => {
  const newGuests = parseInt(e.target.value);
  setGuests(newGuests);
  validateForm(); // Appelez la fonction de validation globale
};

// Gérez les changements de l'occasion
const handleOccasionChange = (e) => {
  const newOccasion = e.target.value;
  setOccasion(newOccasion);
  validateForm(); // Appelez la fonction de validation globale
};

// Gérez la soumission du formulaire
const handleSubmit = (e) => {
  e.preventDefault();

  // Validez le formulaire
  const isFormValid = validateForm();

  if (isFormValid) {
    // Le formulaire est valide, appelez la fonction submitForm avec les données du formulaire
    submitForm({
      date,
      time,
      guests,
      occasion,
    });
  } else {
    // Le formulaire n'est pas valide, affichez un message d'erreur à l'utilisateur ou effectuez d'autres actions nécessaires
    alert("Le formulaire n'est pas valide. Veuillez vérifier les champs.");
  }
};

  return (
    <form
      style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="res-date">Choisissez la date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
      />
      <label htmlFor="res-time">Choisissez l'heure</label>
      <select
       id="res-time"
        value={time}
         onChange={handleTimeChange}
         required>
        {availableTimes.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Nombre d'invités</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={handleGuestsChange}
        required
      />
      <label htmlFor="occasion">Occasion</label>
      <select
       id="occasion"
       value={occasion}
       onChange={handleOccasionChange}
       required>
        <option value="Anniversaire">Anniversaire</option>
        <option value="Anniversaire de mariage">Anniversaire de mariage</option>
      </select>
      <input type="submit" disabled={!formValid} value="Faire votre réservation" />
    </form>
  );
}

export default BookingForm;
