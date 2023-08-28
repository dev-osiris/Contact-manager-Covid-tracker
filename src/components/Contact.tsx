import ContactPage from "./ContactPage"

interface contactObj {
  firstName: string, 
  lastName: string, 
  isActive: boolean,
  id: number,
}

interface contactProps{
  contactList: Array<contactObj>,
  searchText: string,
  setSearchText: (a: string) => void,
}

function Contact(props: contactProps) {

  return (
    <div className="contact">

      <div className="add-new-and-search-box">
        <a style={{"width": "fit-content"}} href="/NewContact">
          <button className="add-new-btn">Add New</button>
        </a>

        {/* preventDefualt prevents the page to reload on hitting enter and losing the search results. */}
        <form onSubmit={(e) => e.preventDefault()} role="search">
          <input 
            className="search-box" 
            type="search" 
            placeholder="search contacts"
            aria-label="Search"
            value={props.searchText}
            onChange={(e) => props.setSearchText(e.target.value)} 
          />
          </form>
      </div>
      
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
