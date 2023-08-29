import { useLocation } from "react-router"

function Sidebar() {
  let path = useLocation().pathname;
  return (
    <div className="sidebar">
      <a id={path === '/' ? 'active'  : ''} className="sidebar-element" href="/">
        Home
      </a>

      <a 
        id={path === '/contact' || path === '/NewContact' || path.includes('/edit/') || path.includes('/singlecontact/') ? 'active' : ''} 
        className="sidebar-element" 
        href="/contact"
        >
          Contact
      </a>

      <a id={path === '/map' ? 'active'  : ''} className="sidebar-element" href="/map">
        Covid Tracker
      </a>

      <div style={{"height": "60vh"}}>
        <p>
          Welcome to our website. Our platform seamlessly combines a powerful contact manager with a comprehensive 
          COVID-19 tracker, offering you the tools you need to manage your contacts while staying vigilant in the 
          face of the ongoing global health crisis. 
        </p>
      </div>
    </div>
  )
}

export default Sidebar
