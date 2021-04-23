import Header from "./Header/index";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    
      <div style={{width:"100%"}}>
        <Header />
        {children}
        <Footer />
      </div>
  )
}

export default Layout;
