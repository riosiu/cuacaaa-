import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <nav className=" bg-header p-5 flex flex-row text-white justify-between top-0 left-0">
        <h1>Cuacaaaa!</h1>
        <ul className="flex flex-row gap-5">
          <li>Home</li>
          <li>About Us</li>
        </ul>
      </nav>

      <main className="min-h-screen bg-slate-900 p-2  text-white">
        {children}
      </main>
      <footer className="p-5 bg-footer text-center text-white">
        Create Using React.js and Import API from openweather.com
      </footer>
    </>
  );
};

export default Layout;
