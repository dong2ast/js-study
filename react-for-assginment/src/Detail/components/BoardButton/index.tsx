import { useEffect, useState } from "react";
import { EmptyHeart, Heart } from "../../../assets";
import {
  HeartButton,
  HeartButtonContainer,
  HeartText,
  ReturnButton,
  ReturnButtonText,
  Wrapper,
} from "./BoardButton.style";
import { useNavigate } from "react-router-dom";

function BoardButton() {
  const navigate = useNavigate();
  const [count, setCount] = useState(
    Number(window.localStorage.getItem("count"))
  );
  const [isHeart, setIsHeart] = useState(
    window.localStorage.getItem("isHeart") == "true"
  );

  const toggleHandler = () => {
    setIsHeart((prev) => !prev);
    setCount((prev) => (!isHeart ? prev + 1 : prev - 1));
  };

  const handleClickButton = () => {
    navigate(`/`);
  };

  useEffect(() => {
    if (count == null && isHeart == null) {
      setCount(0);
      setIsHeart(false);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("count", String(count));
    window.localStorage.setItem("isHeart", String(isHeart));
  }, [count, isHeart]);

  return (
    <Wrapper>
      <HeartButtonContainer>
        <HeartButton onClick={toggleHandler}>
          <img src={isHeart ? Heart : EmptyHeart} />
        </HeartButton>
        <HeartText>{count}</HeartText>
      </HeartButtonContainer>
      <ReturnButton onClick={handleClickButton}>
        <ReturnButtonText>목록으로 돌아가기</ReturnButtonText>
      </ReturnButton>
    </Wrapper>
  );
}

export default BoardButton;
