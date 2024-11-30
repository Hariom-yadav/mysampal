import React from "react";
// import Navbar from "./componets/Navbar";
import { Route, Routes } from "react-router-dom";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import MainHeader from "./componets/MainHeader"
import About from "./pages/About";
import Home from "./pages/Home"

// const router = createBrowserRouter(
//   [
//     { path: "/", element:<Home />  }, // Redirect to "/login"
//     { path: "/About", element: <About /> },
//     { path: "/Home", element: <Home /> },
//     // { path: "/Labs", element: <Labs /> },
//     // { path: "/Supports", element: <Supports /> },
//     // { path: "*", element: <NotFound /> }, // Fallback for unknown routes
//   ],
//   {
//     future: {
//       v7_relativeSplatPath: true, // Enables relative paths in nested routes
//       v7_fetcherPersist: true,   // Retains fetcher state during navigation
//       v7_normalizeFormMethod: true, // Normalizes form methods (e.g., POST or GET)
//       v7_partialHydration: true, // Supports partial hydration for server-side rendering
//       v7_skipActionErrorRevalidation: true, // Prevents revalidation when action errors occur
//     },
//   }
// );

// function App() {
//   return (
//     <RouterProvider
//       future={{ v7_startTransition: true }} // Enables React's startTransition API
//       router={router}
//     />
//   );

const App = () => {
  return (
    <div>
          

          <Routes>
                  <Route path="/" element={<MainHeader/>}>
                         
                          <Route index element={<Home/>}/>
                          <Route path="/about" element={<About/>}/>

                  </Route>
          </Routes>
      
    </div>
  )
};

export default App;
