import { useEffect, useState } from 'react';

import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Card from './components/Card';
import { useLoaderData, useNavigate } from 'react-router-dom';

function App() {
  const donations = useLoaderData();
  const navigate = useNavigate();
  function handleDonationRoute(id) {
    navigate(`/donation-details/${id}`);
  }
  return (
    <>
      <Navbar />
      <Hero />
      <div className="card-container max-w-[1350px] mx-auto px-[15px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-24 pb-32">
        {donations.map(donation => (
          <Card donation={donation} key={donation.id} handleDonationRoute={handleDonationRoute} />
        ))}
      </div>
    </>
  );
}

export default App;
