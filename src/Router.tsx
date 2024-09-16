import { DigiNotificationErrorPage } from "@digi/arbetsformedlingen-react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Start } from "./pages/Start";
import { AdPresentation } from "./pages/AdPresentation";
import { AdsOnMap } from "./pages/AdsOnMap";
import { AdsPresentation } from "./pages/AdsPresentation";
import { RecentGraduate } from "./pages/RecentGraduate";
import { Contact } from "./pages/Contact";
import { FilteredCategory } from "./pages/FilteredCategory";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Start />,
            },
            {
                path: '/annonser',
                element: <AdsPresentation />,

            },
            {
                path: '/annons/:id',
                element: <AdPresentation />
            },
            {
                path: '/kategori/:id',
                element: <FilteredCategory />
            },

            {
                path: '/karta',
                element: <AdsOnMap />
            },
            {
                path: '/nyexaminerad',
                element: <RecentGraduate />
            },
            {
                path: '/kontakt',
                element: <Contact />
            },
        ],
        errorElement: <DigiNotificationErrorPage />
    }

])