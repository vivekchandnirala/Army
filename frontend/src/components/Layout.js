// src/components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import LogoSection from './LogoSection';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <LogoSection />
      <NavBar />
      <div>
        <Outlet /> {/* Renders the nested routes like Home, MissionVision, etc. */}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
