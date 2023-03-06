import { Navigate, Route, Routes } from "react-router-dom";
import App from "./Homepage/App";
import Puzzle1 from "./Puzzle1/puzzle1";
import Puzzle2 from "./Puzzle2/puzzle2";

const VDayRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/puzzle1" element={<Puzzle1 />} />
      <Route path="/puzzle2" element={<Puzzle2 />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default VDayRoutes;
