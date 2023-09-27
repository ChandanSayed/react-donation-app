import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Card from './Card';

const Donation = () => {
  const [donatedList, setDonatedList] = useState([]);
  const [sliceLength, setSliceLength] = useState(4);

  useEffect(() => {
    if (localStorage.getItem('donationList')) setDonatedList(JSON.parse(localStorage.getItem('donationList')));
  }, []);
  function handleDonation() {}
  return (
    <>
      <Navbar position={'static pt-[53px]'} />
      <div className="max-w-[1350px] mx-auto pt-24 px-[15px] pb-32">
        {donatedList.length ? (
          <div className="card-container grid grid-cols-1 lg:grid-cols-2 gap-6">
            {donatedList.slice(0, sliceLength).map(donation => (
              <Card donation={donation} key={donation.id} handleDonation={handleDonation} classes={`card-side`} showPriceViewDetails={true} />
            ))}
          </div>
        ) : (
          <h2 className="text-5xl text-red-600 py-5 text-center">No donation comes yet!</h2>
        )}
        {donatedList.length <= 4 ? (
          ''
        ) : (
          <button className={`bg-[#009444] text-white rounded-lg py-4 px-7 text-base mt-10 mb-36 block mx-auto ${sliceLength > 4 || donatedList.length === 0 ? 'hidden' : ''}`} onClick={() => setSliceLength(donatedList.length)}>
            See All
          </button>
        )}
      </div>
    </>
  );
};

export default Donation;
