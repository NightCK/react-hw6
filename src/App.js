import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { HeroCard } from "./components/HeroCard";
import { HeroProfile } from "./components/HeroProfile";


export default function App() {
  return(
    <BrowserRouter>
      <div>
        <Link to="/hero1">Hero1</Link>
      </div>
      <div>
        <Link to="/hero2">Hero2</Link>
      </div>
      <switch>
        <Route path="/heroes" exact="true">
          <HeroCard />
        </Route>
        <Route path="/heroes/:heroId" exact="true">
          <HeroProfile />
        </Route>
        <Route path="*">404 Page</Route>
      </switch>
    </BrowserRouter>
  )
}