import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
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



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: '/Relate-Persons',
    element: <RelatedPersons />
  },
  {
    path: "/LibraryService",
    element: <LibraryServiceRoomMat />
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
    path: "/transport",
    element: <Transport />
  },
  {
    path: "/overviewSupport",
    element: <OverviewSupport />
  },
  {
    path: '/accommodation',
    element: <Accommodation />
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
    path: "/consumption",
    element: <Consumption />
  },
  {
    path: "/occupation",
    element: <OccupationSupport />
  },
  {
    path: "/SchedulePlanning",
    element: <SchedulePlanning />
  },
  {
    path: "/reg-overview",
    element: <RegOverview />
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
    <RouterProvider router={router} />
  </React.StrictMode>

);

