import { CommentProps } from "../../types/DetailTypes";
import Comment from "../Comment";
import CommentInput from "../CommentInput";
import {
  CommentNumberContainer,
  CommentNumber,
  CommentText,
  Wrapper,
} from "./CommentList.style";
import postComment from "../../api/postComment";
import { SubmitHandler, useForm } from "react-hook-form";

export type Formvalues = {
  body: string;
  nickname: string;
};

function CommentList(props: CommentProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Formvalues>({
    defaultValues: {
      body: "",
      nickname: "",
    },
  });
  const { data, boardId } = props;

  const handlePostComment: SubmitHandler<Formvalues> = (data) => {
    const { body, nickname } = data;
    postComment({
      content: body,
      boardId: Number(boardId),
      nickname: nickname,
    });
    window.location.reload();
  };

  return (
    <Wrapper>
      <CommentNumberContainer>
        <CommentText>댓글</CommentText>
        <CommentNumber>{data.length}</CommentNumber>
      </CommentNumberContainer>

      <form onSubmit={handleSubmit(handlePostComment)}>
        <CommentInput register={register} errors={errors} />
      </form>

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
