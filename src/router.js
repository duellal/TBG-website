import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

import Website from './Website';
//components/pages
import About from './pages/about/about';
import Boarding from './pages/boarding';
import Contact from './pages/about/contact';
import Credits from './pages/credits';
import Err404 from './pages/err404';
import Daycare from './pages/daycare';
import DigitalIntake from './pages/forms/intake-form';
import FAQs from './pages/faqs/FAQs';
import Forms from './pages/forms/forms';
import Grooming from './pages/grooming';
import Home from './pages/home';
import Requirements from './pages/general-components/requirements';
import Sitemap from './pages/sitemap';
import TeamCareers from './pages/about/team-careers';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Website />,
        errorElement: <Err404 />,
        children: [
            {path: '', element: <Home />},
            {path: 'about', element: <About />},
            {path: 'about/contact', element: <Contact />},
            {path:'about/team', element: <TeamCareers />},
            {path: 'credits', element: <Credits />},
            {path: 'boarding', element: <Boarding />},
            {path: 'daycare', element: <Daycare />},
            {path: 'faqs', element: <FAQs />},
            {path: 'forms', element: <Forms />},
            {path: '/forms/intake', element: <DigitalIntake />},
            {path: 'grooming', element: <Grooming />},
            {path:'requirements', element: <Requirements />},
            {path: 'sitemap', element: <Sitemap />}
        ]
    }
]);

export default router;