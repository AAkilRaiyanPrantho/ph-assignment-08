import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Donation = ({ donation }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg,
    card_bg,
    text_button_bg
  } = donation;

  return (
    
      <div className="card w-96 bg-base-100 shadow-xl">
      <Link to={`/details/${id}`}>
      <figure>
        <img
          src={picture}
          alt={title}
          className="h-72"
        />
      </figure>
      <div className="card-body" style={{backgroundColor: card_bg}}>
        <div className="badge badge-secondary w-[70px] h-[35px] rounded-lg px-10 py-0" style={{backgroundColor: category_bg,border: 0,color: text_button_bg}}>{category}</div>
        <h2 className="card-title text-text_button_bg"
        style={{color: text_button_bg}}>
          {title}
         </h2>
      </div>
      </Link>
    </div>
     
  );
};

Donation.propTypes = {
  donation: PropTypes.object,
};

export default Donation;
