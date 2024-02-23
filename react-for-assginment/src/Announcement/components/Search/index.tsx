import { Glass, XBtn } from "../../../assets";
import { Input, InputWrapper, SearchWrapper } from "./Search.style";

function Search() {
  return (
    <SearchWrapper>
      <InputWrapper>
        <img src={Glass} />
        <Input type="text" placeholder="제목을 입력하세요." />
        <img src={XBtn} />
      </InputWrapper>
    </SearchWrapper>
  );
}

export default Search;
