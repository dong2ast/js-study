import styled from "@emotion/styled";
export const Wrapper = styled.div`
  width: 100%;
  height: 2.4rem;

  display: flex;
  gap: 0.8rem;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 0.1rem solid #393d42;
`;

export const Text = styled.span<{ variant: string }>`
  font-family: Pretendard;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ variant }) => (variant === "board" ? "#23282E" : "#006CFF")};
`;
