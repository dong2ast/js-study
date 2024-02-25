import Comment from "../Comment";
import CommentInput from "../CommentInput";
import {
  CommentNumberContainer,
  CommentNumber,
  CommentText,
  Wrapper,
} from "./CommentList.style";

const List = [
  {
    id: 1,
    nickname: "abcedf****",
    content:
      " 울돌목을 가로지르는 해상케이블카가 생겨서 가봤는데 경치와 바다가 넘 좋아요. 고소공포증이 있어서 조금 무서웠지만 바다보니 마음이 시원해져요.울돌목을 가로지르는 해상케이블카가 생겨서 가봤는데 경치와 바다가 넘 좋아요. 고소공포증이 있어서 조금 무서웠지만 바다보니 마음이 시원해져요.울돌목을 가로지르는 해상케이블카가 생겨서 가봤는데 경치와 바다가 넘 좋아요. 고소공포증이 있어서 조금 무서웠지만 바다보니 마음이 시원해져요. 울돌목을 가로지르는 해상케이블카가 생겨서 가봤는데 경치와 바다가 넘 좋아요. 고소공포증이 있어서 조금 무서웠지만 바다보니 마음이 시원해져요.",
    date: "2023.08.08",
  },
  {
    id: 2,
    nickname: "abcedf****",
    content:
      " 울돌목을 가로지르는 해상케이블카가 생겨서 가봤는데 경치와 바다가 넘 좋아요. 고소공포증이 있어서 조금 무서웠지만 바다보니 마음이 시원해져요.울돌목을 가로지르는 해상케이블카가 생겨서 가봤는데 경치와 바다가 넘 좋아요. 고소공포증이 있어서 조금 무서웠지만 바다보니 마음이 시원해져요.울돌목을 가로지르는 해상케이블카가 생겨서 가봤는데 경치와 바다가 넘 좋아요. 고소공포증이 있어서 조금 무서웠지만 바다보니 마음이 시원해져요. 울돌목을 가로지르는 해상케이블카가 생겨서 가봤는데 경치와 바다가 넘 좋아요. 고소공포증이 있어서 조금 무서웠지만 바다보니 마음이 시원해져요.",
    date: "2023.08.08",
  },
  {
    id: 3,
    nickname: "abcedf****",
    content: "울들목 어쩌구",
    date: "2023.08.08",
  },
  {
    id: 4,
    nickname: "abcedf****",
    content: "울들목 어쩌구",
    date: "2023.08.08",
  },
];

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
