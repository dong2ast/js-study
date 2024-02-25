import { CommentProps } from "../../types/DetailTypes";
import Comment from "../Comment";
import CommentInput from "../CommentInput";
import {
  CommentNumberContainer,
  CommentNumber,
  CommentText,
  Wrapper,
} from "./CommentList.style";

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
        {data.map((element, index) => (
          <Comment
            key={index}
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
