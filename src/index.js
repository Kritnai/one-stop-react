import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";

import Home from './appView/Home';
import LibraryServiceRoomMat from './appView/LibraryServiceRoomMat';
import Financial from './appView/Financial';
import Page404 from './appView/Page404';
import RelatedPersons from './appView/RelatedPersons';
import Transport from './appView/Transport';
import MentalHealthSupport from './appView/MentalHealthSupport';
import PhysicalHealthSupport from './appView/PhysicalHealthSupport';
import OccupationSupport from './appView/OccupationSupport';
import Consumption from './appView/Consumption';
import Accommodation from './appView/Accommodation';
import OverviewSupport from './appView/OverviewSupport';
import SchedulePlanning from './appView/SchedulePlanning';
import RegOverview from './appView/RegOverview';
import AllPageLink from './appView/AllPagesLink';
import AllSportService from './appView/AllSportService';
import LoginSuccess from './appView/LoginSuccess';

import { UserAuthContextProvider } from './appModel/UserOfContext';
import ProtectedRoute from './appModel/auth/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login-success",
    element: <LoginSuccess />
  },
  {
    path: "/reg-overview",
    element: <RegOverview />
  },
  {
    path: '/Relate-Persons',
    element: <ProtectedRoute><RelatedPersons /></ProtectedRoute>
  },
  {
    path: "/Financial",
    element: <Financial />
  },
  {
    path: '/AllSportService',
    element: <AllSportService />
  },
  {
    path: "/LibraryService",
    element: <LibraryServiceRoomMat />
  },
  {
    path: '/accommodation',
    element: <Accommodation />
  },
  {
    path: "/consumption",
    element: <Consumption />
  },
  {
    path: "/transport",
    element: <Transport />
  },
  {
    path: "/overviewSupport",
    element: <OverviewSupport />
  },
  {
    path: "/occupation",
    element: <OccupationSupport />
  },


  {
    path: "/physical-health-support",
    element: <PhysicalHealthSupport />
  },
  {
    path: "/mental-health-support",
    element: <MentalHealthSupport />
  },
  
 
  {
    path: "/SchedulePlanning",
    element: <SchedulePlanning />
  },
  {
    path: "/all-pages",
    element: <AllPageLink />
  },
  {
    path: "*",
    element: <Page404 />
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <RouterProvider router={router} />
    </UserAuthContextProvider>
  </React.StrictMode>
);

