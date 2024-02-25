import { Content, Info, InfoContainer, Wrapper, Text } from "./Comment.style";

interface CommentProps {
  key: number;
  nickname: string;
  content: string;
  date: string;
}

function Comment(props: CommentProps) {
  const { nickname, content, date } = props;
  const rename = nickname.slice(0, -2) + "**";
  return (
    <Wrapper>
      <Content>{content}</Content>
      <InfoContainer>
        <Info>
          <Text variant="nickname">{rename}</Text>
          <Text variant="createdAt">|</Text>
          <Text variant="createdAt">{date}</Text>
        </Info>
      </InfoContainer>
    </Wrapper>
  );
}

export default Comment;
