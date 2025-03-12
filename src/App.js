import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import Specials from "./components/Specials";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Booking from "./components/Booking/Booking";
import Menu from "./components/Menu/Menu";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Alert />
    </>
  );
};

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={
                <>
                  <LandingSection />
                  <Specials />
                  <Testimonials />
                  <About />
                </>
              } />
              <Route path="/booking" element={<Booking />} />
              <Route path="/menu" element={<Menu />} />
            </Routes>
          </Layout>
        </Router>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
