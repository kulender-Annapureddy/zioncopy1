
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import AboutUs from '../src/pages/Aboutus/AboutUs';
import Tzmf from './pages/Aboutus/Tzmf';
import ImpactOnSociety from './pages/Aboutus/ImpactOnSociety';
import Research from './pages/Aboutus/Research';
import Health from './pages/Ourworks/Health';
import Education from './pages/Ourworks/Education';
import Gallery from './pages/Mediacenter/Gallery';
import Events from './pages/Mediacenter/Events';
import ZmfBlog from './pages/Resources/ZmfBlog';
import NewsLetter from './pages/Resources/NewsLetter';
import AnnualImpactReports from './pages/Resources/AnnualImpactReports';
import Contact from './pages/Contactus/Contact';
import Faqs from './pages/Contactus/Faqs';
import Corporate from './pages/GetInvolved/Corporate';
import Individual from './pages/GetInvolved/Individual';
import Volunteer from './pages/GetInvolved/Volunteer';
import { Footer } from './sections';
import Donation from './pages/Dontaion';
import DonationQr from './pages/DonationQr';
import useScrollToTop from './Components/Scroll';

export default function App() {
  // Apply the useScrollToTop hook here//
  useScrollToTop();

  return (
    <main className="relative text-black bg-white font-montserrat">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/#/about-us" element={<AboutUs />} />
        <Route path="/zmf" element={<Tzmf />} />
        <Route path="/impact" element={<ImpactOnSociety />} />
        <Route path="/reach" element={<Research />} />
        <Route path="/health" element={<Health />} />
        <Route path="/education" element={<Education />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/zmfblog" element={<ZmfBlog />} />
        <Route path="/newsletter" element={<NewsLetter />} />
        <Route path="/annual-reports" element={<AnnualImpactReports />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/donationqr" element={<DonationQr />} />
        <Route path="/individual" element={<Individual />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
      <Footer />
    </main>
  );
}
