import { Heart } from "../../../assets";
import {
  HeartButtonContainer,
  HeartText,
  ReturnButton,
  ReturnButtonText,
  Wrapper,
} from "./BoardButton.style";

function BoardButton() {
  return (
    <Wrapper>
      <HeartButtonContainer>
        <img src={Heart} />
        <HeartText>234</HeartText>
      </HeartButtonContainer>
      <ReturnButton>
        <ReturnButtonText>목록으로 돌아가기</ReturnButtonText>
      </ReturnButton>
    </Wrapper>
  );
}

export default BoardButton;
