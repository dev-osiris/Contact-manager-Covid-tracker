import Heading from "./components/Heading";
import Sidebar from "./components/Sidebar";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import {useEffect} from 'react'
import useLocalStorage from "use-local-storage";
import NewContact from "./components/NewContact";
import SingleContact from "./components/SingleContact";
import Edit from "./components/Edit";
import AppCovid from "./covid/AppCovid";
import Footer from "./components/Footer";


function App() {

  const [contactList, setContactList] = useLocalStorage("list", []);
  const navigate = useNavigate();

  useEffect(() => {
    //get data from local storage
    const data = JSON.parse(localStorage.getItem('list')) || [];
    setContactList(data)
  }, [])


  //delete contacts
  const handleDelete = (id: number, isEditing: boolean) => {
    const contact = contactList.filter(contact => (contact.id).toString() !== id.toString());
    setContactList(contact);
    if(!isEditing)
      navigate('/contact', {replace:true})
  }

  return (
    <>
      <a href="/" className='navbar' style={{textDecoration: "none"}}>
        <Heading title="Contact and Map App"/>
      </a>
        
      
      <div className="side-by-side">
        <Sidebar />

        <Routes> 
          <Route path="/" element={<Home />} />

          <Route path="/contact" element={ <Contact contactList={contactList} /> } />

          <Route path="/map" element={ <AppCovid /> } />

          <Route path="/NewContact" element={ <NewContact 
                                                  contactList={contactList}
                                                  setContactList={setContactList}
                                              /> 
                                          } />
          <Route path="/singlecontact/:id" element={ <SingleContact 
                                                        contactList={contactList}
                                                        handleDelete={handleDelete}
                                                    />} />

          <Route path="/edit/:id" element={ <Edit 
                                              contactList={contactList} 
                                              setContactList={setContactList} 
                                              handleDelete={handleDelete}
                                            />} />
        </Routes>

      </div>  
      
      <Footer />
    </>
  );
}


export default App;
