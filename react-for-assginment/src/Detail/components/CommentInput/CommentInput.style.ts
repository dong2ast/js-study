import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 20.9rem;
  border-radius: 1.2rem;
  border: 0.1rem solid #f1f1f1;
  padding: 2.4rem;
  gap: 1rem;
  background-color: #eef2f8;
  box-sizing: border-box;
  margin-bottom: 1.8rem;
`;

export const Input = styled.input`
  white-space: pre-wrap;
  width: 100%;
  height: 11.9rem;
  padding: 1.6rem;
  gap: 1rem;
  border: 0.1rem solid #f1f1f1;
  border-radius: 0.8rem;
  outline: none;
  background-color: #ffffff;
  box-sizing: border-box;

  &::placeholder {
    font-family: Pretendard;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2.9rem;
    letter-spacing: -1.03%;
    color: #8b8e91;
  }
`;

export const ConfirmWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 3.2rem;
  justify-content: space-between;

  margin-top: 1rem;
`;

export const InputNickName = styled.input`
  width: 28.5rem;
  height: 2.4rem;
  border-radius: 0.8rem;
  border: 0.1rem solid #f1f1f1;
  padding: 0.4rem 1.6rem;
  gap: 1rem;
  background-color: #ffffff;

  outline: none;

  &::placeholder {
    font-family: Pretendard;
    font-weight: 400;
    font-size: 1.4rem;
    letter-spacing: -1.03%;
    color: #8b8e91;
  }
`;

export const ConfirmBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.7rem;
  height: 3.2rem;
  gap: 0.8rem;
  border-radius: 1rem;
  background-color: #2776e1;
  border: none;
  cursor: pointer;
`;

export const BtnText = styled.span`
  font-family: Pretendard;
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: -1%;
  color: #ffffff;
`;
