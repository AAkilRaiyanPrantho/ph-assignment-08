const getStoredDonations = () =>{
    const storedDonations = localStorage.getItem('donated-donations');
    if(storedDonations){
        return JSON.parse(storedDonations);
    }
    return [];
}


const savedDonations = id =>{
    const storedDonations = getStoredDonations();
    const exists = storedDonations.find(donationID => donationID === id);
    if(!exists){
        storedDonations.push(id);
        localStorage.setItem('donated-donations',JSON.stringify(storedDonations))
    }
}

export { savedDonations, getStoredDonations }