import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../../utility/localStorage";
import DonationCards from "../DonationCards/DonationCards";

const Donations = () => {
    const details = useLoaderData();

    const [givenDonations, setGivenDonations] = useState([]);

    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        const storedDonationIds = getStoredDonations();
        if(details.length > 0){
            const donationsDone = details.filter(detail => storedDonationIds.includes(detail.id)) 
            console.log(donationsDone);
            setGivenDonations(donationsDone);
        }
    },[]
    )
    return (
        <div>
            <div className="grid max-lg:grid-cols-1 max-lg:px-4 max-lg:mx-0 md:px-20 lg:grid-cols-2 gap-x-20 gap-y-4 px-36 mx-40 mb-4">
            
            
            {
                givenDonations.slice(0, dataLength).map(givenDonation => <DonationCards key={givenDonation.id} givenDonation={givenDonation}></DonationCards>)
            }
            
        </div>
        <div className={`flex justify-center items-center mx-auto my-10 ${dataLength === givenDonations.length && 'hidden'}`}>
        <button 
        onClick={() => setDataLength(givenDonations.length)}
        className="btn btn-error px-4 border-none text-[#FFF] bg-[#009444] rounded-lg">See All</button>
        </div>
        </div>
        
    );
};

export default Donations;