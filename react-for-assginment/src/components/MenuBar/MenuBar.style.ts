import styled from "@emotion/styled";
export const Wrapper = styled.div`
  width: 100%;
  height: 24px;

  display: flex;
  gap: 8px;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #393d42;
`;

export const Text = styled.span<{ variant: string }>`
  font-size: 16px;
  line-height: 16px;
  font-weight: 600;
  color: ${({ variant }) => (variant === "board" ? "#23282E" : "#006CFF")};
`;
