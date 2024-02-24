import { Glass, XBtn } from "../../../assets";
import { ClearBtn, Input, InputWrapper, SearchWrapper } from "./Search.style";

function Search() {
  return (
    <SearchWrapper>
      <InputWrapper>
        <Glass />
        <Input type="text" placeholder="제목을 입력하세요." />
        <ClearBtn>
          <XBtn />
        </ClearBtn>
      </InputWrapper>
    </SearchWrapper>
  );
}

export default Search;
