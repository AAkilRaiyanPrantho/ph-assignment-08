import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../../utility/localStorage";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

// import { PieChart, Pie, Tooltip } from "recharts";

ChartJS.register(ArcElement, Tooltip, Legend);

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

  const donationSizeInPercentage = (donationSize * 8.3333).toFixed(2);
  console.log(donationSizeInPercentage);

  const donationSizeInPercentageNumber = Number(donationSizeInPercentage);
  console.log(donationSizeInPercentageNumber);

  const totalDonation = 100 - donationSizeInPercentageNumber;
  console.log(totalDonation);

  const data = {
    datasets: [
      {
        data: [totalDonation, donationSizeInPercentageNumber],
        backgroundColor: ["#FF444A", "#00C49F"],
      },
    ],
    labels: [`Total Donation ${totalDonation}%`, `Your Donation ${donationSizeInPercentageNumber}%`],
  };
  const options = {};

  return (
    <div>
      <div className="flex w-[600px] h-[600px] mx-auto">
        <Pie options={options} data={data} />
      </div>
    </div>
  );
};

export default Statistics;
