import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import UserList from "./Pages/UserList/UserList";
import Add from "./Pages/Add/Add";
import SingleUser from "./Pages/SingleUser/SingleUser";
import { productInputs, userInputs } from "./formSource";
import "./styles/darkMode.scss";
import { DarkModeContext } from "./Context/DarkModeContext";
import { AuthContext } from "./Context/AuthContext";

const App = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { user } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    return user ? children : <Navigate to="/login" />;
  };

  // console.log(user);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/login" element={<Login />} />
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="users">
            <Route
              index
              element={
                <ProtectedRoute>
                  <UserList />
                </ProtectedRoute>
              }
            />
            <Route
              path=":userId"
              element={
                <ProtectedRoute>
                  <SingleUser />
                </ProtectedRoute>
              }
            />
            <Route
              path="add"
              element={
                <ProtectedRoute>
                  <Add title="Add New User" inputs={userInputs} />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="products">
            <Route
              index
              element={
                <ProtectedRoute>
                  <UserList />
                </ProtectedRoute>
              }
            />
            <Route
              path=":productId"
              element={
                <ProtectedRoute>
                  <SingleUser />
                </ProtectedRoute>
              }
            />
            <Route
              path="add"
              element={
                <ProtectedRoute>
                  <Add title="Add New Products" inputs={productInputs} />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
