import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

import Website from './Website';
//components/pages
import About from './pages/about/about';
import TeamCareers from './pages/about/team-careers';
import Boarding from './pages/boarding';
import Daycare from './pages/daycare';
import FAQs from './pages/FAQs';
import Forms from './pages/forms';
import Grooming from './pages/grooming';
import Home from './pages/home';
import Requirements from './pages/requirements';
import Sitemap from './pages/sitemap';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Website />,
        children: [
            {path: '', element: <Home />},
            {path: 'about', element: <About />},
            {path: 'boarding', element: <Boarding />},
            {path: 'daycare', element: <Daycare />},
            {path: 'faq', element: <FAQs />},
            {path: 'forms', element: <Forms />},
            {path: 'grooming', element: <Grooming />},
            {path:'about/team', element: <TeamCareers />},
            {path:'requirements', element: <Requirements />},
            {path: 'sitemap', element: <Sitemap />}
        ]
    }
]);

export default router;