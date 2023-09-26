import Banner from "../Banner/Banner";
import DonationCategories from "../DonationCategories/DonationCategories";

const Home = () => {
  return (
    <div className="flex flex-col static">
        <div className="static">
            <Banner></Banner>
            </div>
        <div className="absolute max-lg:relative lg:top-[850px]">
            <DonationCategories></DonationCategories>
            </div>
    </div>
  );
};

export default Home;
