import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import Header from "./components/Header";


const MainPage = lazy(()=> import("../src/pages/MainPage" /* webpackChunkName: "main_page" */))
const ProjectPage = lazy(()=> import("../src/pages/ProjectPage" /* webpackChunkName: "project_page" */))
const CategoryPage = lazy(()=> import("../src/pages/CategoryPage" /* webpackChunkName: "category_page" */))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<p>Loading...</p>}>
        <Header/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/project/:id" element={<ProjectPage/>}/>
          <Route path="category/:name" element={<CategoryPage/>}/>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
