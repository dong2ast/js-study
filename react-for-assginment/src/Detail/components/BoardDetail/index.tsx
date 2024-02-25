import MenuBar from "../../../components/MenuBar";
import BoardButton from "../BoardButton";
import {
  Content,
  Main,
  Title,
  TitleDate,
  TitleText,
  Wrapper,
} from "./BoardDetail.style";

interface BoardDetailProps {
  data: string;
}

function BoardDetail(props: BoardDetailProps) {
  const { data } = props;
  return (
    <Wrapper>
      <MenuBar />
      <Main>
        <Title>
          <TitleText>연말 연휴 휴무 공지 (2023.12.25 - 2024.01.02)</TitleText>
          <TitleDate>2023. 11. 22 10:04:26</TitleDate>
        </Title>
        <Content>{data}</Content>
        <BoardButton />
      </Main>
    </Wrapper>
  );
}

export default BoardDetail;
