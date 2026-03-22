import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import "./index.css";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
        <ContactForm />
      <footer>
      <Footer />
      </footer>
    </>
  );
}
