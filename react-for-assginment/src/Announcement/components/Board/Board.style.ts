import styled from "@emotion/styled";

export const Wrapper = styled.ol`
  display: flex;
  gap: 5rem;

  /* padding: 30px 0 30px 0; */
  padding: 3rem 2.05rem 3rem 2.5rem;
  border-bottom: 0.1rem solid #d5d6d7;

  /* height: 7.6rem;

  box-sizing: border-box; */
`;

export const Text = styled.span`
  font-size: 1.6rem;
  line-height: 1.6rem;
  font-weight: 400;
`;

export const Number = styled(Text)`
  width: 3rem;
  text-align: center;
`;

export const Title = styled(Text)`
  width: calc(100% - 8rem);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`;

export const Date = styled(Text)`
  width: 12.8rem;
  text-align: center;
`;
