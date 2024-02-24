import styled from "@emotion/styled";

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  height: 6.4rem;
  margin: 1.6rem 0 2rem 0;

  border-radius: 1.4rem;
  background-color: #f1f6fe;
  border: 0.1rem solid #86c5ff0a;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 36.8rem;
  height: 4.4rem;
  padding: 0 1.2rem 0 1rem;
  margin-right: 1rem;

  border-radius: 1.4rem;
  background-color: #ffffff;
`;

export const Input = styled.input`
  width: 29.8rem;
  border: none;
  outline: none;

  &::placeholder {
    font-family: Pretendard;
    font-weight: 500;
    font-size: 1.5rem;
    color: #616569;
  }
`;

export const ClearBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.4rem;
  height: 2rem;

  background-color: transparent;
  border: none;
  cursor: pointer;
`;
