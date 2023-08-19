import Heading from "./components/Heading";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Map from "./components/Map";
import {useState, useEffect} from 'react'
import useLocalStorage from "use-local-storage";
import NewContact from "./components/NewContact";
import SingleContact from "./components/SingleContact";

function App() {
  interface contactObj {
    firstName: string, 
    lastName: string, 
    isActive: boolean,
  }

  const [contactList, setContactList] = useLocalStorage("list", []);
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('list')) || [];
    setContactList(data)
  }, [])


  const handleDelete = (id: number) => {
    const contact = contactList.filter(contact => (contact.id).toString() != id.toString());
    setContactList(contact);
    navigate('/contact', {replace:true})
  }
  const handleEdit = (id: number) => {

  }

  return (
    <>
      <Heading title="hello man"/>
      
      <div className="side-by-side">
        <Sidebar />

        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={ <Contact contactList={contactList} /> } />
          <Route path="/map" element={ <Map /> } />
          <Route path="/NewContact" element={ <NewContact 
                                                  firstName={firstName}
                                                  setFirstName={setFirstName} 
                                                  lastName={lastName}
                                                  setLastName={setLastName}
                                                  isActive={isActive}
                                                  setIsActive={setIsActive}
                                                  contactList={contactList}
                                                  setContactList={setContactList}
                                              /> 
                                          } />
          <Route path="/singlecontact/:id" element={ <SingleContact 
                                                        contactList={contactList}
                                                        handleDelete={handleDelete}
                                                        handleEdit={handleEdit}
                                                    />} />
        </Routes>
      </div>  
    </>
  );
}

export default App;
