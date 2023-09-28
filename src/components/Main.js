import { BrowserRouter as Routes, Route, Link } from 'react-router-dom';
import React, { useReducer, useEffect } from 'react';
import HomePage from '../components/HomePage';
import Apropos from '../components/Apropos';
import Menu from '../components/Menu';
import BookingPage from '../components/BookingPage';
import BookingForm from '../components/BookingForm';
import CommanderEnLigne from '../components/CommanderEnLigne';
import SeConnecter from '../components/SeConnecter';


function mainReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // Ici, vous pouvez mettre à jour les horaires disponibles en fonction de la date
      // Pour l'instant, nous conservons les mêmes horaires, vous pouvez les changer ici
      return state;
    default:
      return state;
  }
}
export async function fetchData(date) {
  try {
    const response = await fetch(`/api/availability?date=${date}`);
    if (!response.ok) {
      throw new Error('Échec de la requête à l\'API');
    }
    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('Erreur lors de la récupération des horaires disponibles :', error);
    return { success: false, error: error.message };
  }
}
function initializeTimes() {
  // Create the initial state for availableTimes here
  const initialTimes = []; // Initialize with an empty array or any initial data you need
  return initialTimes;
}

function Main() {
  const initialTimes = []; // Initialisez avec un tableau vide

  const [availableTimes, dispatch] = useReducer(mainReducer, initialTimes);

  // Fonction pour récupérer les horaires disponibles pour la date du jour
  const initializeTimes = async () => {
    try {
      const today = new Date(); // Obtenez la date du jour
      const formattedDate = today.toISOString().split('T')[0]; // Formatage au format 'AAAA-MM-JJ'

      // Récupérez les horaires disponibles pour aujourd'hui depuis l'API en utilisant la fonction fetchData
      const response = await fetchData(formattedDate); // Assurez-vous d'avoir la fonction fetchData définie

      if (response.success) {
        // Mettez à jour les horaires disponibles dans l'état
        dispatch({ type: 'UPDATE_TIMES', times: response.data });
      } else {
        // Gérez l'erreur de l'API ici
        console.error('Échec de la récupération des horaires disponibles :', response.error);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des horaires disponibles :', error);
    }
  };

  // Fonction pour récupérer les horaires disponibles en fonction de la date sélectionnée
  const updateTimes = async (selectedDate) => {
    try {
      // Récupérez les horaires disponibles pour la date sélectionnée depuis l'API en utilisant la fonction fetchData
      const response = await fetchData(selectedDate);

      if (response.success) {
        // Mettez à jour les horaires disponibles dans l'état
        dispatch({ type: 'UPDATE_TIMES', times: response.data });
      } else {
        // Gérez l'erreur de l'API ici
        console.error('Échec de la récupération des horaires disponibles :', response.error);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des horaires disponibles :', error);
    }
  };

  // Appelez initializeTimes lorsque le composant est monté pour récupérer les horaires du jour
  useEffect(() => {
    initializeTimes();
  }, []);

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
    <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
</div>
   );
}export default Main;
