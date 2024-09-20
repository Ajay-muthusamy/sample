import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Order from "./Order";
import Update from "./Update";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<Order />} />
          <Route path="/page-updates" element={<Update />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
