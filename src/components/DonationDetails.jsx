import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './Navbar';

const DonationDetails = () => {
  let userId = useParams();
  const donations = useLoaderData();
  const exactList = donations.find(list => list.id === userId.id * 1);

  const [donationList, setDonationList] = useState([]);
  function handleDonation(item) {
    const allDonations = [...donationList];
    const existingDonation = allDonations.find(list => list.id === item.id);
    if (existingDonation) {
      return toast('Donation already done!');
    }
    allDonations.push(item);
    setDonationList(allDonations);
    localStorage.setItem('donationList', JSON.stringify(allDonations));
    toast('Donation Added!');
  }

  useEffect(() => {
    if (localStorage.getItem('donationList')) setDonationList(JSON.parse(localStorage.getItem('donationList')));
  }, []);

  return (
    <>
      <Navbar position={'static pt-[53px]'} />
      <div className="max-w-[1350px] mx-auto pt-24 px-[15px] pb-32">
        <div className="img-container relative">
          <img src={exactList.image} alt={exactList.title} className="w-full rounded-lg" />
          <div className="overlay bg-[#0B0B0B] bg-opacity-50 absolute bottom-0 left-0 right-0 rounded-es-lg rounded-ee-lg p-[37px]">
            <button className={`inline-flex text-lg rounded-[4px] py-2 px-4 text-white w-fit`} style={{ backgroundColor: `${exactList.color}` }} onClick={() => handleDonation(exactList)}>
              Donate ${exactList.cost}
            </button>
          </div>
        </div>
        <h2 className="mt-14 mb-6 text-4xl text-[#0b0b0b] font-bold">{exactList.title}</h2>
        <p className="text-base text-[#0b0b0b] text-opacity-70">{exactList.description}</p>
      </div>
      <ToastContainer />
    </>
  );
};

export default DonationDetails;
