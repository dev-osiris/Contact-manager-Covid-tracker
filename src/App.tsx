import Heading from "./components/Heading";
import Sidebar from "./components/Sidebar";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import {useEffect, useState} from 'react'
import useLocalStorage from "use-local-storage";
import NewContact from "./components/NewContact";
import SingleContact from "./components/SingleContact";
import Edit from "./components/Edit";
import AppCovid from "./covid/AppCovid";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";


function App() {

  const [contactList, setContactList] = useLocalStorage("list", []);
  const [filteredPosts, setFilteredPosts] = useState(contactList);
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  //search function
  useEffect(() => {
    const newData = contactList.filter((contact) => {
      return ((contact.firstName + contact.lastName).toLowerCase()).includes(searchText.toLowerCase());
    })

    setFilteredPosts(newData);
  }, [searchText])

  useEffect(() => {
    //get data from local storage
    const data = JSON.parse(localStorage.getItem('list')) || [];
    setContactList(data)
  }, [])


  //delete contacts
  const handleDelete = (id: number, isEditing: boolean) => {
    const contact = contactList.filter(contact => (contact.id).toString() !== id.toString());
    setContactList(contact);
    setFilteredPosts(contact);//this is necessary otherwise the contact list doesn't update
    if(!isEditing)
      navigate('/contact', {replace:true})
  }

  return (
    <>
      <a href="/" className='navbar' style={{textDecoration: "none"}}>
        <Heading title="Contact and Covid tracker"/>
      </a>
        
      
      <div className="side-by-side">
        <Sidebar />

        <Routes> 
          <Route path="/" element={<Home />} />

          <Route path="/contact" element={ <Contact 
                                              contactList={filteredPosts} 
                                              searchText={searchText} 
                                              setSearchText={setSearchText}
                                            /> } />

          <Route path="/map" element={ <AppCovid /> } />

          <Route path="/NewContact" element={ <NewContact 
                                                  contactList={contactList}
                                                  setContactList={setContactList}
                                                  setFilteredPosts={setFilteredPosts}
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
                                              setFilteredPosts={setFilteredPosts}
                                            />} />
          
          <Route path="*" element={ <NotFound /> } />
        </Routes>

      </div>  

      <Footer />
    </>
  );
}


export default App;
