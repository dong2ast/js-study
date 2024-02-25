import Comment from "../Comment";
import CommentInput from "../CommentInput";
import {
  CommentNumberContainer,
  CommentNumber,
  CommentText,
  Wrapper,
} from "./CommentList.style";

interface Comment {
  id: number;
  nickname: string;
  content: string;
  createdAt: string;
}

interface CommentProps {
  data: Comment[];
}

function CommentList(props: CommentProps) {
  const { data } = props;
  return (
    <Wrapper>
      <CommentNumberContainer>
        <CommentText>댓글</CommentText>
        <CommentNumber>{data.length}</CommentNumber>
      </CommentNumberContainer>

      <CommentInput />

      <div>
        {data.map((element) => (
          <Comment
            key={element.id}
            nickname={element.nickname}
            content={element.content}
            date={element.createdAt
              .slice(0, 10)
              .replace("-", ". ")
              .replace("-", ". ")}
          />
        ))}
      </div>
    </Wrapper>
  );
}

export default CommentList;
