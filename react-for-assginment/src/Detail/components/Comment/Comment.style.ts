import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  /* height: 255px; */
  border-radius: 1.2rem;
  border: 0.1rem solid #e8e9e9;
  background-color: #fcfcfc;
  padding: 2rem 2.4rem 0 2.4rem;

  margin-bottom: 1.8rem;
`;

export const Content = styled.span`
  white-space: pre-wrap;
  width: 100%;
  /* height: 145px; */
  padding-bottom: 1rem;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.9rem;
  letter-spacing: -1.03%;
  color: #616569;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 0.1rem solid #e8e9e9;
  width: 100%;
  height: 3.5rem;
  padding: 0.8rem 0 1rem 0;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 19.3rem;
  height: 1.5rem;
  gap: 1.6rem;
`;

export const Text = styled.span<{ variant: string }>`
  font-family: Pretendard;
  font-size: 1.5rem;
  font-weight: ${({ variant }) => (variant === "nickname" ? 600 : 500)};
  color: ${({ variant }) => (variant === "nickname" ? "black" : "#B5B7B9")};
`;
