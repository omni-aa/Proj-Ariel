import {createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import {Route} from "react-router";
import {ThemeProvider} from "@/components/theme-provider.tsx";
import Navbar from "@/components/Navbar/Navbar.tsx";
import {HomePage} from "@/pages/Home/HomePage.tsx";
import NotFound from "@/components/404NotFound.tsx";
import News from "@/pages/News/News.tsx";
import ExplorePage from "@/pages/Explore/page.tsx";
import GuidesDirectory from "@/pages/Guides/GuidesDirectory.tsx";
import Graphics_Optimization from "@/pages/Guides/Graphics Settings & Optimization/page.tsx";
import PC_Build_Guides from "@/pages/Guides/PC Builder Guides/page.tsx";
import PC_Upgrades from "@/pages/Guides/PC Upgrades/page.tsx";
import Software_Guides from "@/pages/Guides/Software/page.tsx";
import Windows_Optimization_Guides from "@/pages/Guides/Windows Optimization/page.tsx";
import Game_Installations from "@/pages/Guides/Game Installations/Game_Installations.tsx";
import AboutUs from "@/pages/About/page.tsx";
import PrivacyPolicyPage from "@/pages/Privacy-Policy/page.tsx";
import ContactUs from "@/pages/Contact/page.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Navbar />}>
            <Route path='/' element={<HomePage />} />
            <Route path={"*"} element={<NotFound/>}/>
            <Route path={'/news'} element={<News/>}/>
            <Route path={'/explore'}  element={<ExplorePage/>}/>
            <Route path={"/guides"} element={<GuidesDirectory/>}/>
            <Route path={"/guides/-graphical-optimization-settings"}  element={<Graphics_Optimization/>}/>
            <Route path={"/guides/pc-build-guides"} element={<PC_Build_Guides/>}/>
            <Route path={"/guides/pc-upgrades"} element={<PC_Upgrades/>}/>
            <Route path={"/guides/software-installation-guides"} element={<Software_Guides/>}/>
            <Route path={"/guides/windows-os-optimization"} element={<Windows_Optimization_Guides/>}/>
            <Route path={"/guides/game-installations"} element={<Game_Installations/>}/>
            <Route path={"/contact-us"} element={<ContactUs/>}/>
            <Route path={"/about-us"} element={<AboutUs/>} />
            <Route path={"/privacy-policy"} element={<PrivacyPolicyPage/>} />







        </Route>
    )
);


function App() {
  return (

      <ThemeProvider>
          <RouterProvider router={router}/>
      </ThemeProvider>

  )
}

export default App
