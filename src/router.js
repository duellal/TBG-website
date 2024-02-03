import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

import Website from './Website';
//components/pages
import About from './pages/about/about';
import Boarding from './pages/boarding';
import Credits from './pages/credits';
import Err404 from './pages/err404';
import Daycare from './pages/daycare';
import DigitalIntake from './pages/forms/intake-form';
import Forms from './pages/forms/formPage';
import Grooming from './pages/grooming';
import Home from './pages/home';
import Requirements from './pages/general-components/requirements';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Website />,
        errorElement: <Err404 />,
        children: [
            {path: '', element: <Home />},
            {path: 'about', element: <About />},
            {path: 'credits', element: <Credits />},
            {path: 'boarding', element: <Boarding />},
            {path: 'daycare', element: <Daycare />},
            {path: 'forms', element: <Forms />},
            {path: '/forms/newowner', element: <DigitalIntake />},
            {path: 'grooming', element: <Grooming />},
            {path:'requirements', element: <Requirements />}
        ]
    }
]);

export default router;