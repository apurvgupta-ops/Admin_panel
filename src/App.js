import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import UserList from "./Pages/UserList/UserList";
import AddUser from "./Pages/AddUser/AddUser";
import SingleUser from "./Pages/SingleUser/SingleUser";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="users">
            <Route index element={<UserList />} />
            <Route path=":userId" element={<SingleUser />} />
            <Route path="add " element={<AddUser />} />
          </Route>
          <Route path="products">
            <Route index element={<UserList />} />
            <Route path=":productId" element={<SingleUser />} />
            <Route path="add" element={<AddUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
