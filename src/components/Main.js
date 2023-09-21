import { BrowserRouter as Routes, Route, Link } from 'react-router-dom';
import HomePage from '../components/HomePage';
import Apropos from '../components/Apropos';
import Menu from '../components/Menu';
import BookingPage from '../components/BookingPage';
import CommanderEnLigne from '../components/CommanderEnLigne';
import SeConnecter from '../components/SeConnecter';
function Main() {
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
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/commanderligne" element={<CommanderEnLigne />} />
        <Route path="/SeConnecter" element={<SeConnecter />} />
        </Routes>
    </div>
}export default Main;
