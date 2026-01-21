import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import Event from './Components/Events/Event.jsx';
import App from './App.jsx';
import {
  EventDetails,
  TechCard,
  MechCard,
  ShCard,
  MbaCard,
  ElectricalCard
} from "./Components/Events/index.js"
import Footer from './Components/Footer/Footer.jsx';

// DEBUG: Alert
alert('Application Starting...');


// DEBUG: Error Handler
window.onerror = function (message, source, lineno, colno, error) {
  const errorDiv = document.createElement('div');
  errorDiv.style.position = 'fixed';
  errorDiv.style.top = '0';
  errorDiv.style.left = '0';
  errorDiv.style.width = '100vw';
  errorDiv.style.height = '100vh';
  errorDiv.style.backgroundColor = '#fff';
  errorDiv.style.color = 'red';
  errorDiv.style.zIndex = '999999';
  errorDiv.style.padding = '20px';
  errorDiv.style.fontSize = '16px';
  errorDiv.style.whiteSpace = 'pre-wrap';
  errorDiv.innerHTML = `<h1>Application Error</h1><p>${message}</p><p>${source}:${lineno}:${colno}</p><pre>${error && error.stack}</pre>`;
  document.body.appendChild(errorDiv);
};

window.addEventListener('unhandledrejection', function (event) {
  const errorDiv = document.createElement('div');
  errorDiv.style.position = 'fixed';
  errorDiv.style.top = '50%';
  errorDiv.style.left = '0';
  errorDiv.style.width = '100vw';
  errorDiv.style.height = '50vh';
  errorDiv.style.backgroundColor = '#ffecec';
  errorDiv.style.color = 'darkred';
  errorDiv.style.zIndex = '999999';
  errorDiv.style.padding = '20px';
  errorDiv.style.fontSize = '16px';
  errorDiv.style.whiteSpace = 'pre-wrap';
  errorDiv.innerHTML = `<h1>Promise Rejection</h1><p>${event.reason}</p>`;
  document.body.appendChild(errorDiv);
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Home />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/event",
        element: <Event />,
        children: [
          {
            path: "/event/tech",
            element: <TechCard />,
          },
          {
            path: "/event/electrical",
            element: <ElectricalCard />,
          },
          {
            path: "/event/sh",
            element: <ShCard />,
          },
          {
            path: "/event/mech",
            element: <MechCard />,
          },
          {
            path: "/event/mba",
            element: <MbaCard />,
          }
        ]
      },
      {
        path: "/event/tech/:techTitle",
        element: <EventDetails />,
      },
      {
        path: "/event/electrical/:electricalTitle",
        element: <EventDetails />,
      },
      {
        path: "/event/mba/:mbaTitle",
        element: <EventDetails />,
      },
      {
        path: "/event/sh/:shTitle",
        element: <EventDetails />,
      },
      {
        path: "/event/mech/:mechTitle",
        element: <EventDetails />,
      },
    ]
  },
], {
  basename: "/Infest2k25-production"
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
