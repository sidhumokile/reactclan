import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";

import ReactIntro from "./components/therory/ReactIntro.jsx";
import Components from "./components/therory/Components.jsx";
import ConditionalRendering from "./components/therory/ConditionalRendering.jsx";
import Props from "./components/therory/Props.jsx";
import ReactState from "./components/therory/ReactState.jsx";
import JSX from "./components/therory/JSX.jsx";
import Fragments from "./components/therory/Fragments.jsx";
import Events from "./components/therory/Events.jsx";
import ReactRouting from "./components/therory/ReactRouting.jsx";
import FormValidation from "./components/therory/FormValidation.jsx";

import Login from "./components/authuorize/login.jsx";
import Register from "./components/authuorize/register.jsx";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");  

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Layout (without ProtectedRoute component) */}
        {isLoggedIn ? (
          <Route
            path="/*"
            element={
              <div className="flex min-h-screen">
                <Sidebar />

                <main className="flex-1 p-6 bg-gray-50">
                  <Routes>
                    <Route path="/" element={<ReactIntro />} />
                    <Route path="/components" element={<Components />} />
                    <Route
                      path="/conditional-rendering"
                      element={<ConditionalRendering />}
                    />
                    <Route path="/props" element={<Props />} />
                    <Route path="/state" element={<ReactState />} />
                    <Route path="/jsx" element={<JSX />} />
                    <Route path="/fragments" element={<Fragments />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/routing" element={<ReactRouting />} />
                    <Route
                      path="/form-validation"
                      element={<FormValidation />}
                    />
                  </Routes>
                </main>
              </div>
            }
          />
        ) : (
          /* If not logged in redirect everything to login */
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
