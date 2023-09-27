import React, { useEffect, useState } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import Navbar from './Navbar';
import { useLoaderData } from 'react-router-dom';

const Statistic = () => {
  const donations = useLoaderData();
  const [myDonation, setMyDonation] = useState([]);

  const myTotalDonation = myDonation.reduce((total, donation) => {
    return total + donation.cost;
  }, 0);

  const totalDonation = donations.reduce((total, donation) => {
    return total + donation.cost;
  }, 0);

  const myDonationPercentage = ((myTotalDonation * 100) / totalDonation).toFixed(2) * 1;
  const totalDonationPercentage = (100 - myDonationPercentage).toFixed(2) * 1;

  const data = [
    { name: 'Total Donation', value: totalDonationPercentage },
    { name: 'Your Donation', value: myDonationPercentage }
  ];

  const COLORS = ['#FF444A', '#00C49F'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  useEffect(() => {
    if (localStorage.getItem('donationList')) setMyDonation(JSON.parse(localStorage.getItem('donationList')));
  }, []);

  return (
    <>
      <Navbar position={'static pt-[53px]'} />
      <div className="max-w-[1350px] mx-auto pt-24 px-[15px] pb-32">
        {/* <ResponsiveContainer width="100%" height="100%"> */}
        <PieChart width={400} height={400} className="mx-auto">
          <Pie data={data} cx="50%" cy="50%" labelLine={false} label={renderCustomizedLabel} outerRadius={80} fill="#8884d8" dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        {/* </ResponsiveContainer> */}

        <div className="flex justify-center gap-x-14 flex-wrap gap-y-5">
          <div className="flex gap-4">
            <small>Your Donation</small> <div className="label bg-[#00C49F] rounded-sm w-[100px] h-3"></div>
          </div>
          <div className="flex gap-4">
            <small>Total Donation</small> <div className="label bg-[#FF444A] rounded-sm w-[100px] h-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistic;
