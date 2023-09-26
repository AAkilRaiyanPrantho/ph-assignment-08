

const DonationDetails = () => {
    return (
        <div>
            <div>
                <div className="relative"><img src={image} alt="" /></div>
                <div className="absolute"><button className="btn btn-error">Donate {price}</button></div>
              </div>
              <div>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
        </div>
    );
};

export default DonationDetails;