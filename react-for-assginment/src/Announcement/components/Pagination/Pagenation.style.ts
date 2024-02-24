import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 9rem;

  padding: 3.4rem 0 2.4rem 0;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 38rem;
`;

export const ArrowBtn = styled.button`
  width: 2.4rem;
  height: 2.4rem;
`;

export const NumberBtn = styled.button<{ state: boolean }>`
  font-size: 1.6rem;
  width: 3rem;
  height: 3rem;

  background-color: ${({ state }) => (state ? "blue" : "transparents")};
  color: ${({ state }) => (state ? "#ffffff" : "#000000")};
  border-radius: 4rem;
`;
