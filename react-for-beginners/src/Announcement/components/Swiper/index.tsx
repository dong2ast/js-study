import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./Swiper.style";
import { FirstBanner, SecondBanner } from "../../../assets";

function Swiper() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "liner",
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <S.BannerImage src={FirstBanner} />
        <S.BannerImage src={SecondBanner} />
      </Slider>
    </div>
  );
}

export default Swiper;
