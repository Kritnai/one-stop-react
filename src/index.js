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
    element: <ProtectedRoute><LoginSuccess /></ProtectedRoute>
  },
  {
    path: "/reg-overview",
    element: <ProtectedRoute><RegOverview /></ProtectedRoute>
  },
  {
    path: '/Relate-Persons',
    element: <ProtectedRoute><RelatedPersons /></ProtectedRoute>
  },
  {
    path: "/Financial",
    element: <ProtectedRoute><Financial /></ProtectedRoute>
  },
  {
    path: '/AllSportService',
    element: <ProtectedRoute><AllSportService /></ProtectedRoute>
  },
  {
    path: "/LibraryService",
    element: <ProtectedRoute><LibraryServiceRoomMat /></ProtectedRoute>
  },
  {
    path: '/accommodation',
    element: <ProtectedRoute><Accommodation /></ProtectedRoute>
  },
  {
    path: "/consumption",
    element: <ProtectedRoute><Consumption /></ProtectedRoute>
  },
  {
    path: "/transport",
    element: <ProtectedRoute><Transport /></ProtectedRoute>
  },
  {
    path: "/overviewSupport",
    element: <ProtectedRoute><OverviewSupport /></ProtectedRoute>
  },
  {
    path: "/occupation",
    element: <ProtectedRoute><OccupationSupport /></ProtectedRoute>
  },


  {
    path: "/physical-health-support",
    element: <ProtectedRoute><PhysicalHealthSupport /></ProtectedRoute>
  },
  {
    path: "/mental-health-support",
    element: <ProtectedRoute><MentalHealthSupport /></ProtectedRoute>
  },
  
 
  {
    path: "/SchedulePlanning",
    element: <ProtectedRoute><SchedulePlanning /></ProtectedRoute>
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

