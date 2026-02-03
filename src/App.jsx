import './App.css';
import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsApp from './components/Whatsapp';

// PAGES
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Pricing from './pages/Packages';
import International from './pages/International';
import PurposePage from './pages/Purpose';
import GlobalVisionPage from './pages/GlobalVision.Jsx';
import EthicalGrowthPage from './pages/Growth';
import AcademicExcellencePage from './pages/AcademicExcellence';
import CareerReadinessPage from './pages/CareerReadiness';
import FinancialSecurityPage from './pages/FinancialSecurity';
import DegreeProgramsPage from './pages/DegreePrograms';
import SkillCoursesPage from './pages/SkillCourses';
import AITrainingPage from './pages/AiTraining';
import CareerMentorshipPage from './pages/Mentoraship';
import MobileAppPage from './pages/MobileApp';
import JobAssurancePage from './pages/JobAssurance';

const Homepage = lazy(() => import("./pages/HomePage"));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo({ top: 0, behavior: 'smooth' }), [pathname]);
  return null;
};

const Layout = () => (
  <>
    <Navbar />
    <main className="font-sans text-slate-900">
      <Outlet />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/packages" element={<Pricing />} />
            <Route path="/international" element={<International />} />
            <Route path="/purpose" element={<PurposePage />} />
            <Route path="/global-vision" element={<GlobalVisionPage />} />
            <Route path="/ethical-growth" element={<EthicalGrowthPage />} />
            <Route path="/academic-excellence" element={<AcademicExcellencePage />} />
            <Route path="/career-readiness" element={<CareerReadinessPage />} />
            <Route path="/financial-security" element={<FinancialSecurityPage />} />
            <Route path="/degree-programs" element={<DegreeProgramsPage />} />
            <Route path="/skill-courses" element={<SkillCoursesPage />} />
            <Route path="/ai-training" element={<AITrainingPage />} />
            <Route path="/mentorship" element={<CareerMentorshipPage />} />
            <Route path="/mobile-app" element={<MobileAppPage />} />
            <Route path="/job-assurance" element={<JobAssurancePage />} />
          </Route>
        </Routes>
      </Suspense>

      {/* FLOATING BUTTONS */}
      <WhatsApp />
    </BrowserRouter>
  );
}

export default App;
