import { Partition } from "../../../assets";
import { Content, Info, InfoContainer, Wrapper, Text } from "./Comment.style";

interface CommentProps {
  key: number;
  nickname: string;
  content: string;
  date: string;
}

function Comment(props: CommentProps) {
  const { nickname, content, date } = props;
  return (
    <Wrapper>
      <Content>{content}</Content>
      <InfoContainer>
        <Info>
          <Text variant="nickname">{nickname}</Text>
          <Partition />
          <Text variant="createdAt">{date}</Text>
        </Info>
      </InfoContainer>
    </Wrapper>
  );
}

export default Comment;
