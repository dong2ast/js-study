import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./Swiper.style";
import { FirstBanner, SecondBanner } from "../../../assets";

function Swiper() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <div className="carousel">
      <Slider {...settings}>
        <S.Banner src={FirstBanner} />
        <S.Banner src={SecondBanner} />
      </Slider>
    </div>
  );
}

export default Swiper;
