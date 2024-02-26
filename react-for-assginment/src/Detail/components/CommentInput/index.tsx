import { FieldErrors, UseFormRegister } from "react-hook-form";
import {
  ConfirmWrapper,
  Input,
  Wrapper,
  InputNickName,
  ConfirmBtn,
  BtnText,
  WarnningText,
} from "./CommentInput.style";
import { Formvalues } from "../CommentList";

interface CommentInputProps {
  register: UseFormRegister<Formvalues>;
  errors: FieldErrors<Formvalues>;
}

function CommentInput(props: CommentInputProps) {
  const { register, errors } = props;

  return (
    <Wrapper>
      <Input
        {...register("body", {
          required: "내용을 입력해주세요.",
        })}
        type="text"
        placeholder="소중한 댓글을 남겨주세요."
      />
      <ConfirmWrapper>
        <InputNickName
          {...register("nickname", {
            required: "닉네임을 입력해주세요.",
            minLength: {
              value: 4,
              message: "닉네임은 4자~10자 사이로 입력해주세요.",
            },
            maxLength: {
              value: 10,
              message: "닉네임은 4자~10자 사이로 입력해주세요.",
            },
          })}
          type="text"
          placeholder="닉네임을 입력해주세요."
        />
        <WarnningText>
          {errors.nickname
            ? errors.nickname?.message
            : errors.body && errors.body?.message}
        </WarnningText>

        <ConfirmBtn>
          <BtnText>등록</BtnText>
        </ConfirmBtn>
      </ConfirmWrapper>
    </Wrapper>
  );
}

export default CommentInput;
