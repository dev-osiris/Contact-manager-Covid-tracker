
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-element">
        <a href="/">Home</a>
      </div>

      <div className="sidebar-element">
        <a href="/contact">Contact</a>
      </div>

      <div className="sidebar-element">
        <a href="/map">Charts and Maps</a>
      </div>

      <div style={{"height": "60vh"}}>
        <p>
          Welcome to our website. Our platform seamlessly combines a powerful contact manager with a comprehensive COVID-19 tracker, offering you the tools you need to manage your contacts while staying vigilant in the face of the ongoing global health crisis. 
        </p>
      </div>
    </div>
  )
}

export default Sidebar
