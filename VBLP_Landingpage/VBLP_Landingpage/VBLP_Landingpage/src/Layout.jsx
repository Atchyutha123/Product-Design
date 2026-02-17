import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="app-layout">
      <Navbar />

      <main className="content" style={{paddingTop:'0px'}}>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout