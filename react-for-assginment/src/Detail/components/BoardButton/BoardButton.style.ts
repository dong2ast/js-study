import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  justify-content: flex-end;

  width: 100%;
  height: 46px;
`;

export const HeartButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 76px;
  height: 28px;
  border-radius: 8px;
  padding: 2px, 8px;
  gap: 8px;
  margin-right: 10px;
`;

export const HeartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const HeartText = styled.span`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 15px;
  line-height: 15px;

  color: #8b8e91;
`;

export const ReturnButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 181px;
  height: 46px;
  background-color: white;

  border-radius: 10px;
  border: 1px solid black;
  cursor: pointer;
`;

export const ReturnButtonText = styled.span`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 19px;
  line-height: 19px;
  //질문?

  letter-spacing: -2%;
`;
