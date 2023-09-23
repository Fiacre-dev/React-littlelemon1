import React, { useState } from 'react';

function BookingForm({ availableTimes, setAvailableTimes }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Anniversaire');

  function BookingForm({ dispatch }) {
    const [date, setDate] = useState('');
  
    // Gestionnaire d'événements pour le changement de date
    const handleDateChange = (e) => {
      const newDate = e.target.value;
      setDate(newDate);
  
      // Envoyez une action pour mettre à jour les horaires disponibles avec la nouvelle date
      dispatch({ type: 'UPDATE_TIMES', date: newDate });
    };
  
    // ... Le reste de votre code du formulaire reste inchangé
  }
    function handleSubmit(e){
        e.preventDefault();
        // Ajoutez ici la logique de validation des données du formulaire
        if(!date || !time || !guests || !occasion)
        {
            alert('veuillez remplir tous les champs du formulaire.');
            return;
        }
        // Préparez les données à envoyer à l'API (ou à traiter de toute autre manière)
        const formData = {
            date,
            time,
            guests,
            occasion,
        };
        // Ici, vous pouvez ajouter le code pour envoyer les données à une API
        // Par exemple, en utilisant la fonction fetch() ou une bibliothèque de requêtes HTTP comme axios
        // Assurez-vous d'ajouter la gestion des réponses de l'API et de gérer les erreurs si nécessaire

        // Après une soumission réussie, vous pouvez rediriger l'utilisateur vers une autre page
        // Par exemple, en utilisant React Router
        // history.push('/confirmation'); // Redirigez vers la page de confirmation

        // Réinitialisez le formulaire (effacez les valeurs des champs)
            setDate('');
            setTime('');
            setGuests(1);
            setOccasion('Anniversaire');

        // Affichez un message de confirmation à l'utilisateur
        alert('Votre réservation a été soumise avec succès. Merci !');
    }
  return (
    <form 
    style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
    onSubmit={handleSubmit}
    >
      <label htmlFor="res-date">Choisir une date</label>
      <input
       type="date"
       id="res-date"
       value={date}
       onChange={(e) => setDate(e.target.value)}
     />
      <label htmlFor="res-time">Choisissez l'heure</label>
      <select
      id="res-time"
      value={time}
      onChange={(e) => setTime(e.target.value)}
      >
        {
            availableTimes.map((option) =>(
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
        onChange={(e) => setGuests(e.target.value)} 
      />
      <label htmlFor="occasion">Occasion</label>
      <select 
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Anniversaire</option>
        <option>Fête d'anniversaire</option>
      </select>
      <input type="submit" value="Faites votre réservation" />
    </form>
  );
}

export default BookingForm;
