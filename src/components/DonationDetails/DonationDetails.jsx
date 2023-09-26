import { useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DonationDetails = () => {
  const details = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const detail = details.find((detail) => detail.id === idInt);
  const { picture, price, title, description, text_button_bg } = detail;

  const notify = () => toast(`Thank you for your donation!!!`);

  return (
    <div className="p-4 lg:px-20">
      <div className="flex flex-col items-center mx-auto relative">
        <div>
          <img
            className="max-lg:h-full lg:w-[1320px] h-[700px]"
            src={picture}
            alt=""
          />
        </div>
        <div className="absolute bottom-0 bg-[#0b0b0b]/50 max-lg:w-full lg:w-[1320px] h-[130px]">
          <button onClick={notify}
            className="btn btn-error text-[#FFF] relative left-12 top-6"
            style={{
              backgroundColor: text_button_bg,
              border: 0,
            }}
          >
            Donate ${price}
          </button>
        </div>
      </div>
      <div className="p-6 lg:px-48">
        <h2 className="text-5xl font-extrabold p-4">{title}</h2>
        <p className="text-lg font-normal p-4">{description}</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DonationDetails;
