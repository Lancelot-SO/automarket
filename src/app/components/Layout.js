"use client";
import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout({ children }) {
  useEffect(() => {
    import("preline");
  }, []);

  return (
    <div className='overflow-x-hidden'>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
