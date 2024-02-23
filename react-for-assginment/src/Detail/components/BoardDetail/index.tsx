import MenuBar from "../../../components/MenuBar";
import {
  Content,
  Main,
  Title,
  TitleDate,
  TitleText,
  Wrapper,
} from "./BoardDetail.style";

const content = `안녕하세요. 가이드미입니다.
          
아래 기간동안 휴무로 인해 업무가 중단됩니다.

휴무기간 : 2023.12.25 - 2024.01.02 9일간

문의 답변은 2024.01.03 오전에 순차적으로 진행됩니다.

감사합니다.`;

function BoardDetail() {
  return (
    <Wrapper>
      <MenuBar />
      <Main>
        <Title>
          <TitleText>연말 연휴 휴무 공지 (2023.12.25 - 2024.01.02)</TitleText>
          <TitleDate>2023. 11. 22 10:04:26</TitleDate>
        </Title>
        <Content>{content}</Content>
        <div>좋아요 + 목록 버튼</div>
      </Main>
    </Wrapper>
  );
}

export default BoardDetail;
