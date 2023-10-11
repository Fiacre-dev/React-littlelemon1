import React, { useReducer} from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Routes, Route, Link } from 'react-router-dom';
import HomePage from '../components/HomePage';
import Apropos from '../components/Apropos';
import Menu from '../components/Menu';
import BookingPage from '../components/BookingPage';
import BookingForm from '../components/BookingForm';
import CommanderEnLigne from '../components/CommanderEnLigne';
import SeConnecter from '../components/SeConnecter';

// Étape 2 : Créez la fonction updateTimes
const updateTimes = (selectedDate) => {
  // Utilisez la fonction fetchAPI de l'API pour obtenir les horaires disponibles pour la date sélectionnée
  const availableTimesForSelectedDate = fetchAPI(selectedDate);

  // Mettez à jour l'état availableTimes avec les horaires disponibles pour la date sélectionnée
  dispatch({ type: "UPDATE_TIMES", payload: availableTimesForSelectedDate });
};
// Étape 2 : Créez la fonction initializeTimes
const initializeTimes = () => {
  // Créez un objet Date pour représenter la date d'aujourd'hui
  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;

  // Utilisez la fonction fetchAPI de l'API pour obtenir les horaires disponibles
  const availableTimesForToday = fetchAPI(formattedDate);

  // Mettez à jour l'état availableTimes avec les horaires disponibles
  dispatch({ type: "INITIALIZE_TIMES", payload: availableTimesForToday });

};

// Étape 2 : Créez un reducer pour availableTimes
const availableTimesReducer = (state, action) => {
  switch (action.type) {
    // Vous pouvez ajouter d'autres types d'action ici pour gérer les changements d'état
    default:
      return state;
  }
};

function Main() {
  // Étape 1 : Transférez l'état jusqu'au composant Main
  // Étape 2 : Changez availableTimes en un reducer
  const [availableTimes, dispatch] = useReducer(
    availableTimesReducer,
    initializeTimes() // Initialisez les horaires disponibles
  );

  // Étape 2 : Mettez à jour les horaires disponibles en fonction de la date sélectionnée
  const handleDateChange = (date) => {
    const newTimes = updateTimes(date);
    dispatch({ type: 'update', newTimes }); // Dispatchez l'action de mise à jour
  };
  const navigate = useNavigate();

  const submitForm = (formData) => {
    // Soumettez les données du formulaire à l'API submitAPI
    const isBookingSuccessful = submitAPI(formData);

    if (isBookingSuccessful) {
      // Si la réservation a réussi, naviguez vers la page de confirmation
      navigate('/confirmation');
    }
  };
  return (
    <div>
      <nav className='nav'>
        <Link to="/" className='nav-item'>Accueil</Link>
        <Link to="/apropos" className='nav-item'>A propos</Link>
        <Link to="/menu" className='nav-item'>Menu</Link>
        <Link to="/Commanderligne" className='nav-item'>Commander en ligne</Link>
        <Link to="/Seconnecter" className='nav-item'>Se connecter</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/bookingpage" element={<BookingPage />} />
        <Route path="/bookingform" element={<BookingForm availableTimes={availableTimes} dispatch={dispatch} />} />
        <Route path="/commanderligne" element={<CommanderEnLigne />} />
        <Route path="/SeConnecter" element={<SeConnecter />} />
      </Routes>
      <h1>Réservation de table Little Lemon</h1>
       {/* Étape 1 : Passez l'état et les fonctions de changement d'état en tant que props */}
       <BookingForm
        availableTimes={availableTimes}
        onDateChange={handleDateChange} // Passez la fonction de changement de date
        submitForm={submitForm}
      />
    </div>
  );
}

export default Main;
