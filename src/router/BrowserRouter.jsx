import { Routes, Route } from 'react-router-dom';
import Home from '../components/homepage/HomePage';
import Contacts from '../components/contactsPage/Contacts';
import Settings from '../components/settingspage/SettingsPage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;
