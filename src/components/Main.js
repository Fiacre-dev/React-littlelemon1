import { BrowserRouter as Routes, Route, Link } from 'react-router-dom';
import React, { useReducer } from 'react';
import HomePage from '../components/HomePage';
import Apropos from '../components/Apropos';
import Menu from '../components/Menu';
import BookingPage from '../components/BookingPage';
import BookingForm from '../components/BookingForm';
import CommanderEnLigne from '../components/CommanderEnLigne';
import SeConnecter from '../components/SeConnecter';

// Fonction pour mettre à jour les horaires disponibles
const updateTimes = (state, action) => {
    // Pour l'instant, renvoyez les mêmes horaires disponibles
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  };
  // Fonction pour initialiser les horaires disponibles
const initializeTimes = () => {
    // Vous pouvez mettre des horaires initiaux ici si nécessaire
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  };
  // Réducteur pour gérer availableTimes
const timesReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return updateTimes(state, action.date); // Appelez la fonction de mise à jour avec la date
      default:
        return state;
    }
  };
function Main() {
    const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);
   return(
    <div>
    <nav className='nav'>
     <Link to="/" className='nav-item'>Accueil</Link>
     <Link to="/Aprops" className='nav-item'>A propos</Link>
     <Link to="/Menu" className='nav-item'>Menu</Link>
     <Link to="/Commanderligne" className='nav-item'>Commander en ligne</Link>
     <Link to="/Seconnecter" className='nav-item'>Se connecter</Link>
    </nav>
    <Routes>
    <Route path="/"element={<HomePage />} />
    <Route path="/apropos" element={<Apropos />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/bookingpage" element={<BookingPage />} />
    <Route path="/bookingform" element={<BookingForm />} />
    <Route path="/commanderligne" element={<CommanderEnLigne />} />
    <Route path="/SeConnecter" element={<SeConnecter />} />
    </Routes>
</div>
   );
}export default Main;
