import ContactPage from "./ContactPage"

interface contactObj {
  firstName: string, 
  lastName: string, 
  isActive: boolean,
  id: number,
}

interface contactProps{
  contactList: Array<contactObj>,
}

function Contact(props: contactProps) {
  return (
    <div className="contact_2">

      <a href="/NewContact">
        <button className="add-new-btn">Add New</button>
      </a>
      
      <div className="main-grid">

      {
        props.contactList.length > 0 ? //if contact list is not empty show them
        (
          props.contactList.map((contact) => {
            return(
              <ContactPage 
                  key={contact.id}
                  firstName={contact.firstName} 
                  lastName={contact.lastName} 
                  isActive={contact.isActive}
                  id={contact.id}
                />
                )
              })
              )
              : ( //if contact list is empty show this msg.
                <>
            <h2 style={{"marginLeft": "min(5%, 80px)"}}>No contacts found. Add some to see here.</h2>
          </>
          )
        }
    </div>
  </div>
    
  )
}

export default Contact
