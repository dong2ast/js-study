import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 161px;
  border-radius: 12px;
  border: 1px solid #f1f1f1;
  padding: 24px;
  gap: 10px;
  background: #eef2f8;
`;

export const Input = styled.input`
  white-space: pre-wrap;
  width: 100%;
  height: 87px;
  padding: 16px;
  gap: 10px;
  border: 1px solid #f1f1f1;
  border-radius: 8px;
  outline: none;

  &::placeholder {
    font-family: Pretendard;
    font-weight: 500;
    font-size: 18px;
    line-height: 29px;
    letter-spacing: -1.03%;
    color: #8b8e91;
  }
`;

export const ConfirmWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 32px;
  justify-content: space-between;

  margin-top: 10px;
`;

export const InputNickName = styled.input`
  width: 285px;
  height: 24px;
  border-radius: 8px;
  border: 1px solid #f1f1f1;
  padding: 4px 16px;
  gap: 10px;

  outline: none;

  &::placeholder {
    font-family: Pretendard;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -1.03%;
    color: #8b8e91;
  }
`;

export const ConfirmBtn = styled.button`
  width: 57px;
  height: 32px;
  gap: 8px;
  border-radius: 10px;
  background-color: #2776e1;
  border: none;
  cursor: pointer;
`;

export const BtnText = styled.span`
  font-family: Pretendard;
  font-size: 14px;
  line-height: 14px;
  font-weight: 600;
  letter-spacing: -1%;
  color: #ffffff;
`;
