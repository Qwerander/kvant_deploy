import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
// import { Header } from './components/header/Header';
// import { Layout } from './shared/layout/Layout';
import { BackHome } from "./components/backHome/BackHome";
import { HomePage } from "./pages/homePage/HomePage";
import { BuchPage } from "./pages/buchPage/BuchPage";
import { JurPage } from "./pages/jurPage/JurPage";
import { ContactsPage } from "./pages/contatsPage/ContactsPage";
import { Modal } from "./shared/Modal/Modal";
import { Form } from "./components/form/Form";
import { useState } from "react";
import { AboutPage } from "./pages/aboutPage/AboutPage";
// import { Risk } from './pages/risk/Risk';
// import { Oferta } from './pages/oferta/Oferta';
// import { Parthner } from './pages/parthner/Parthner';
// import { Politics } from './pages/politics/Politics';

export const App = () => {
  const { pathname } = useLocation();
  const [isOpenForm, toggleIsOpenForm] = useState(false);

  return (
    <>
      {/* {pathname !== "/" && <BackHome />} */}
      {/* <Header /> */}
      {/* <Layout> */}
      {/* <Outlet /> */}
      {/* </Layout> */}
      <Routes>
        <Route path="/" element={<HomePage toggleIsOpenForm={toggleIsOpenForm}/>} />
        <Route path="/about" element={<AboutPage toggleIsOpenForm={toggleIsOpenForm}/>} />
        <Route path="/buch" element={<BuchPage toggleIsOpenForm={toggleIsOpenForm}/>} />
        <Route path="/jur" element={<JurPage toggleIsOpenForm={toggleIsOpenForm}/>} />
        <Route path="/contacts" element={<ContactsPage toggleIsOpenForm={toggleIsOpenForm}/>} />
        {/* <Route path="/politics" element={<Politics />} />
                <Route path="/risk" element={<Risk />} />
                <Route path="/oferta" element={<Oferta />} />
                <Route path="/parthner" element={<Parthner />} /> */}
      </Routes>
      <Footer />
      <Modal isOpen={isOpenForm} onClose={toggleIsOpenForm}>
        <Form toggleIsOpen={toggleIsOpenForm} />
      </Modal>
    </>
  );
};
