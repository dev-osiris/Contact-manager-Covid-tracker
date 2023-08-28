import { useLocation } from "react-router"

function Sidebar() {
  let path = useLocation().pathname;
  return (
    <div className="sidebar">
      <div id={path === '/' ? 'active'  : ''} className="sidebar-element">
        <a href="/">Home</a>
      </div>

      <div id={path === '/contact' ? 'active'  : ''} className="sidebar-element">
        <a href="/contact">Contact</a>
      </div>

      <div id={path === '/map' ? 'active'  : ''} className="sidebar-element">
        <a href="/map">Covid Tracker</a>
      </div>

      <div style={{"height": "60vh", "borderLeft": "solid #ff7082"}}>
        <p>
          Welcome to our website. Our platform seamlessly combines a powerful contact manager with a comprehensive COVID-19 tracker, offering you the tools you need to manage your contacts while staying vigilant in the face of the ongoing global health crisis. 
        </p>
      </div>
    </div>
  )
}

export default Sidebar
