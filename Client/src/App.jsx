import { useState } from 'react';
import Navbar from './Header/Navbar';
import ContactForm from './Components/ContactForm';
import ContactsTable from './Components/ContactsTable';
import { Flash } from './Components/Flash'
import Bus from './utils/Bus';

window.flash = (message, type = "success") => Bus.emit('flash', ({ message, type }));

function App() {
  const [activeTab, setActiveTab] = useState('new');

  return (
    <div>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === 'new' && <ContactForm />}
      {activeTab === 'submissions' && <ContactsTable />}

      <Flash />
    </div>
  );
}

export default App;