import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/HomePage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import ArticlePage from './pages/ArticlePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/"            element={<HomePage />} />
        <Route path="/blog"        element={<BlogPage />} />
        <Route path="/blog/:slug"  element={<ArticlePage />} />
        <Route path="/contact"     element={<ContactPage />} />
      </Routes>
    </>
  );
}
