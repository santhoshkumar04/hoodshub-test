import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NewPage from "../pages/NewPage";
import AppLayout from "../layout/AppLayout";
import Mainpage from "../pages/Mainpage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "new-page",
        element: (
          <AppLayout>
            <NewPage />
          </AppLayout>
        ),
      },
      {
        path: "",
        element: <Mainpage />,
      },
    ],
  },
]);
