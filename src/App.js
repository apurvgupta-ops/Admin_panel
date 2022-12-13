import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import UserList from "./Pages/UserList/UserList";
import Add from "./Pages/Add/Add";
import SingleUser from "./Pages/SingleUser/SingleUser";
import { productInputs, userInputs } from "./formSource";

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
            <Route
              path="add"
              element={<Add title="Add New User" inputs={userInputs} />}
            />
          </Route>
          <Route path="products">
            <Route index element={<UserList />} />
            <Route path=":productId" element={<SingleUser />} />
            <Route
              path="add"
              element={<Add title="Add New Products" inputs={productInputs} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
