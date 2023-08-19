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
    <>
      <a href="/NewContact">
        <button className="add-new-btn">Add New</button>
      </a>
      <div className="main-grid">

      {
        props.contactList.length > 0 ?
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
              : (
                <>
            <h2>No contacts found. Add some to see here.</h2>
          </>
          )
        }
    </div>
  </>
    
  )
}

export default Contact
