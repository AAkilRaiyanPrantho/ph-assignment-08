import { useLoaderData, useParams } from "react-router-dom";


const DonationDetails = () => {
    const details = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const detail = details.find( detail => detail.id === idInt);
    const {picture,price,title,description,text_button_bg} = detail;
    return (
        <div className="p-4 lg:px-20">
            <div className="flex flex-col items-center mx-auto relative">
                <div><img className="max-lg:h-full lg:w-[1320px] h-[700px]" src={picture} alt="" /></div>
                <div className="absolute bottom-0 bg-[#0b0b0b]/50 max-lg:w-full lg:w-[1320px] h-[130px]"><button className="btn btn-error text-[#FFF] relative left-12 top-6"
                style={{
                    backgroundColor:
                      text_button_bg,border: 0,
                  }}>Donate ${price}</button></div>
              </div>
              <div className="p-6 lg:px-48">
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
        </div>
    );
};

export default DonationDetails;