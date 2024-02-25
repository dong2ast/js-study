import { Glass, XBtn } from "../../../assets";
import { SearchProps } from "../../types/AnnouncementTypes";
import { ClearBtn, Input, InputWrapper, SearchWrapper } from "./Search.style";

function Search(props: SearchProps) {
  const { value, setValue, setSearch } = props;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  /** 엔터 입력되었는지 체크하는 함수 */
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearch(value);
      setValue("");
    }
  };

  return (
    <SearchWrapper>
      <InputWrapper>
        <Glass />
        <Input
          value={value}
          onChange={(e) => handleInputChange(e)}
          placeholder="제목을 입력하세요."
          onKeyDown={(e) => {
            handleEnter(e);
          }}
        />
        <ClearBtn onClick={() => setValue("")}>
          <XBtn />
        </ClearBtn>
      </InputWrapper>
    </SearchWrapper>
  );
}

export default Search;
