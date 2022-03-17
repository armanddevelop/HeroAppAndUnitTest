import { Routes, Route } from "react-router-dom";
import {
  Navbar,
  MarvelScreen,
  DcScreen,
  SearchScreen,
  Hero,
} from "../Components";

export const DashBoardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="dc" element={<DcScreen />} />
          <Route path="search" element={<SearchScreen />} />
          <Route path="hero/:heroId" element={<Hero />} />
          <Route path="/" element={<MarvelScreen />} />
        </Routes>
      </div>
    </>
  );
};
