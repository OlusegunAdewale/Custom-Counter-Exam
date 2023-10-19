import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './style.css';
import Counter from './CustomHook/Counter';
import NotFound from './Routes/NotFound';
import HomePage from './Routes/HomePage';
import ErrorBoundary from './Routes/ErrorBoundary';
import ErrorBoundaryTest from './Routes/ErrorBoundaryTest';
function App() {
  return (
    <>
      <ErrorBoundary>
        <ul className="navlink">
          <li className="links">
            <Link className="linksto home" to="/">
              Home page{' '}
            </Link>
          </li>
          <li className="links">
            <Link className="linksto" to="/counter">
              Counter
            </Link>
          </li>
          <li className="links">
            <Link className="linksto" to="/error">
              Error
            </Link>
          </li>
        </ul>
        <hr></hr>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/error" element={<ErrorBoundaryTest />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}
export default App;
