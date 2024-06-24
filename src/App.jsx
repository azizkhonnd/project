import { Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/nav/Navbar';
import About from './components/homepage/HomePage';
import Contacts from './components/contactsPage/Contacts';
import Settings from './components/settingspage/SettingsPage';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}


export default App;
