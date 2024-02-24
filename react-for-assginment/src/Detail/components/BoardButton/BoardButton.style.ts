import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  justify-content: flex-end;

  width: 100%;
  height: 4.6rem;
`;

export const HeartButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 7.6rem;
  height: 2.8rem;
  border-radius: 0.8rem;
  padding: 0.2rem, 0.8rem;
  gap: 0.8rem;
  margin-right: 1rem;
`;

export const HeartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.4rem;
  height: 2.4rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const HeartText = styled.span`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 1.5rem;

  color: #8b8e91;
`;

export const ReturnButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 18.1rem;
  height: 4.6rem;
  background-color: white;

  border-radius: 1rem;
  border: 0.1rem solid black;
  cursor: pointer;
`;

export const ReturnButtonText = styled.span`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 1.9rem;

  letter-spacing: -2%;
`;
