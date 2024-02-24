import styled from "@emotion/styled";

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  height: 64px;
  margin: 16px 0 20px 0;

  border-radius: 14px;
  background-color: #f1f6fe;
  border: 1px solid #86c5ff0a;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 346px;
  height: 44px;
  padding: 0 12px 0 10px;
  margin-right: 10px;

  border-radius: 14px;
  background-color: #ffffff;
`;

export const Input = styled.input`
  width: 298px;
  border: none;
  outline: none;
`;

export const ClearBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 24px;
  height: 20px;

  background-color: transparent;
  border: none;
  cursor: pointer;
`;
