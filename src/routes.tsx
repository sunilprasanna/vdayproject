import { Navigate, Route, Routes } from 'react-router-dom';
import App from './Homepage/App';
import Puzzle1 from './Puzzle1/puzzle1';

const VDayRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/puzzle1" element={<Puzzle1 />} />
        <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default VDayRoutes;