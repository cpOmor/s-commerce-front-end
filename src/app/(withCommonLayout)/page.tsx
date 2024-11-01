import Discount from "@/components/ui/Discount/Discount";
import HomePageSlider from "@/components/ui/HomePageSlider/HomePageSlider";
import Policy from "@/components/ui/Policy/Policy";
import BestSellers from "@/components/ui/Best Sellers/page";
import BeautyPersonalCare from "@/components/ui/BeautyPersonalCare/page";
import MedjoolKhejur from "@/components/ui/MedjoolKhejur/page";
import NewProducts from "@/components/ui/NewPrducts/page";
import Acher from "@/components/ui/Acher/page";

const HomePage = () => {
  return (
    <div>
      <HomePageSlider />
      <Policy />
      <NewProducts />
      <MedjoolKhejur />
      <Discount />
      <Acher />
      <BestSellers />
      <BeautyPersonalCare />
    </div>
  );
};

export default HomePage;
