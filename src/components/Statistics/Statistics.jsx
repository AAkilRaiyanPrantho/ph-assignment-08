import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../../utility/localStorage";


const Statistics = () => {
  const details = useLoaderData();

  const [donationsGiven, setDonationsGiven] = useState([]);

  useEffect(() => {
    const storedDonationIds = getStoredDonations();
    if (details.length > 0) {
      const donationsCompleted = details.filter((detail) =>
        storedDonationIds.includes(detail.id)
      );

      setDonationsGiven(donationsCompleted);
    }
  }, []);

  const donationSize = donationsGiven.length;
  console.log(donationSize);

  const donationSizeInPercentage = (donationSize * 8.3).toFixed(2);
  console.log(donationSizeInPercentage);

  const donationSizeInPercentageNumber = Number(donationSizeInPercentage);
  console.log(donationSizeInPercentageNumber);

  const totalDonation = 100 - donationSizeInPercentageNumber;
  console.log(totalDonation);

  return (
    <div className="absolute z-10">
      <h2>Donations Statistics: {donationSize}</h2>
      <h2>Your Donation:{donationSizeInPercentageNumber}%</h2>
      <h2>Total Donation:{totalDonation}%</h2>
    </div>
  );
};

export default Statistics;
