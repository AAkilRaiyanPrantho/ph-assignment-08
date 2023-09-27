import PropTypes from "prop-types";

const DonationCards = ({ givenDonation }) => {
  const {title,picture,category,category_bg,card_bg,text_button_bg,price } = givenDonation;
  return (
    <div>
      <div className="flex w-full h-[200px] bg-base-100 shadow-xl rounded-lg lg:w-[650px]">
        <figure>
          <img
            src={picture}
            alt={title}
            className="w-full h-full"
          />
        </figure>
        <div className="flex flex-col w-full gap-2 px-4 py-6" style={{backgroundColor: card_bg}}>
        <div className="badge badge-secondary w-[70px] h-[35px] rounded-lg px-10 py-0" style={{backgroundColor: category_bg,border: 0,color: text_button_bg}}>{category}</div>
         <div><h2 className="card-title">
          {title}
          </h2></div>
          <div>
            <p className="text-md font-semibold" style={{color: text_button_bg}}>${price}.00</p>
          </div>
          
          <div><button className="btn btn-error p-2 text-[#FFF]" style={{backgroundColor: text_button_bg,border: 0}}>View Details</button></div> 
        </div>
      </div>
    </div>
  );
};

DonationCards.propTypes = {
  givenDonation: PropTypes.object,
};

export default DonationCards;
