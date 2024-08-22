import { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // Add a comment describing the functionality of this method
  // using the currentPage we use the if statement to return different components based on whatever currentPage is
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
        return <Portfolio />;
      } 
      if (currentPage === 'Resume') {
        return <Resume />;
      } 
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* the current state of what page we are on, then handlePageChange, function to change the page. */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* using the render page function inside the main to display what page we are on */}
      <main className="mx-3">{renderPage()}</main>
    </div>
  );
}
