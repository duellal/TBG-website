import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

import Website from './Website'
//components/pages
import { About } from './pages/about';
// import { Team } from './pages/about'
// import { Careers } from './pages/about'
import Boarding from './pages/boarding';
// import { Contact } from './pages/about'
import Daycare from './pages/daycare';
import FAQs from './pages/FAQs';
import Forms from './pages/forms';
import Grooming from './pages/grooming';
import Home from './pages/home';
// import Requirements from './pages/requirements'
//import Sitemap from './pages/sitemap

const router = createBrowserRouter([
    {
        path: '/',
        element: <Website />,
        children: [
            {path: 'about', element: <About />},
            {path: 'boarding', element: <Boarding />},
            {path: 'daycare', element: <Daycare />},
            {path: 'faq', element: <FAQs />},
            {path: 'forms', element: <Forms />},
            {path: 'grooming', element: <Grooming />},
            {path: '', element: <Home />},
            // {path:'about/team', element: <Team />},
            // {path:'about/careers', element: <Careers />},
            // {path:'requirements', element: <Requirements />},
            // {path: 'about/contact', element: <Contact />}
            // {path: '/sitemap', element: <Sitemap />}
        ]
    }
])

export default router