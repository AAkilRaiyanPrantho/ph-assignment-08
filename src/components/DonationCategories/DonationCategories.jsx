import { useEffect, useState } from "react";
import Donation from "../Donation/Donation";

const DonationCategories = () => {
    const [donations, setDonations] = useState([]);

    useEffect( () =>{
        fetch('donations.json')
        .then(res => res.json())
        .then(data => setDonations(data));
    })
    
    
    return (
        <div className="grid grid-cols-1 w-full max-lg:px-5 md:max-lg:px-48 lg:grid-cols-4 px-20 gap-20 my-10">
            {
                donations.map(donation => <Donation key={donation.id} donation={donation}></Donation>)
            }
        </div>
    );
};

export default DonationCategories;