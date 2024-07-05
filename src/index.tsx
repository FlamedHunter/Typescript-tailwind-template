import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import "./index.css";

const domNode = document.getElementById('root');
if(domNode){

  const root = createRoot(domNode);

  root.render(
      <RouterProvider router={router} />
  );
}
