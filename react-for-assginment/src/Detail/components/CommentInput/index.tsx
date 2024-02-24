import {
  ConfirmWrapper,
  Input,
  Wrapper,
  InputNickName,
  ConfirmBtn,
  BtnText,
} from "./CommentInput.style";

function CommentInput() {
  return (
    <Wrapper>
      <Input type="text" placeholder="소중한 댓글을 남겨주세요." />
      <ConfirmWrapper>
        <InputNickName placeholder="닉네임을 입력해주세요." />
        <ConfirmBtn>
          <BtnText>등록</BtnText>
        </ConfirmBtn>
      </ConfirmWrapper>
    </Wrapper>
  );
}

export default CommentInput;
