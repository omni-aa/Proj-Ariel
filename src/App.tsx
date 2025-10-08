import {createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import {Route} from "react-router";
import {ThemeProvider} from "@/components/theme-provider.tsx";
import Navbar from "@/pages/Navbar/Navbar.tsx";
import {HomePage} from "@/pages/Home/HomePage.tsx";
import NotFound from "@/components/404NotFound.tsx";
import News from "@/pages/News/News.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Navbar />}>
            <Route path='/' element={<HomePage />} />
            <Route path={"*"} element={<NotFound/>}/>
            <Route path={'/news'} element={<News/>}/>
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
