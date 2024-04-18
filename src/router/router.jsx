import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home.jsx";
import AddCard from "../Pages/AddCard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/AddCard",
    element: <AddCard />,
  },
]);

export default router;
