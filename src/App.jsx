import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Landing from './pages/Landing';
import Machilipatnam from './pages/Machilipatnam';

import ResidencyLayout from './layouts/ResidencyLayout';
import ResidencyHome from './pages/residency/Home';
import ResidencyAbout from './pages/residency/About';
import ResidencyRooms from './pages/residency/Rooms';
import ResidencyAmenities from './pages/residency/Amenities';
import ResidencyContact from './pages/residency/Contact';

import PrimeLayout from './layouts/PrimeLayout';
import PrimeHome from './pages/prime/Home';
import PrimeAbout from './pages/prime/About';
import PrimeRooms from './pages/prime/Rooms';
import PrimeAmenities from './pages/prime/Amenities';
import PrimeContact from './pages/prime/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/machilipatnam" element={<Machilipatnam />} />

        <Route path="/residency" element={<ResidencyLayout />}>
          <Route index element={<ResidencyHome />} />
          <Route path="about" element={<ResidencyAbout />} />
          <Route path="rooms" element={<ResidencyRooms />} />
          <Route path="amenities" element={<ResidencyAmenities />} />
          <Route path="contact" element={<ResidencyContact />} />
        </Route>

        <Route path="/prime" element={<PrimeLayout />}>
          <Route index element={<PrimeHome />} />
          <Route path="about" element={<PrimeAbout />} />
          <Route path="rooms" element={<PrimeRooms />} />
          <Route path="amenities" element={<PrimeAmenities />} />
          <Route path="contact" element={<PrimeContact />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
