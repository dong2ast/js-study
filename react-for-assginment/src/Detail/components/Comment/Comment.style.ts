import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  /* height: 255px; */
  border-radius: 12px;
  border: 1px solid #e8e9e9;
  background-color: #fcfcfc;
  padding: 20px 24px 0 24px;

  margin-top: 18px;
`;

export const Content = styled.span`
  white-space: pre-wrap;
  width: 100%;
  /* height: 145px; */
  padding: 0 0 10px 0;
  font-family: Pretendard;
  font-weight: 500;
  font-size: 18px;
  line-height: 29px;
  letter-spacing: -1.03%;
  color: #616569;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #e8e9e9;
  width: 100%;
  height: 35px;
  padding: 8px 0 10px 0;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 193px;
  height: 15px;
  gap: 16px;
`;

export const Text = styled.span<{ variant: string }>`
  font-size: 15px;
  line-height: 15px;
  font-weight: ${({ variant }) => (variant === "nickname" ? 600 : 500)};
  color: ${({ variant }) => (variant === "nickname" ? "black" : "#B5B7B9")};
`;
