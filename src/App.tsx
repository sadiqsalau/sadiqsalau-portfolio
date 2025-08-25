import { Route, Routes } from "react-router";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import InnerPageLayout from "./layouts/InnerPageLayout";
import ProjectDetails from "./pages/ProjectDetails";
import Projects from "./pages/Projects";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route element={<InnerPageLayout />}>
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
