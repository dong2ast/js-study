import MenuBar from "../../../components/MenuBar";
import { BoardDetailProps } from "../../types/DetailTypes";
import BoardButton from "../BoardButton";
import {
  Content,
  Main,
  Title,
  TitleDate,
  TitleText,
  Wrapper,
} from "./BoardDetail.style";

function BoardDetail(props: BoardDetailProps) {
  const { data } = props;
  return (
    <Wrapper>
      <MenuBar />
      <Main>
        <Title>
          <TitleText>{data.title}</TitleText>
          <TitleDate>
            {data.createdAt
              .slice(0, -5)
              .replace("-", ". ")
              .replace("-", ". ")
              .replace("T", " ")}
          </TitleDate>
        </Title>
        <Content>{data.body}</Content>
        <BoardButton />
      </Main>
    </Wrapper>
  );
}

export default BoardDetail;
