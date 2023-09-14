import { Routes as Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/experience" element={<Experience />} />
    </Switch>
  );
}
