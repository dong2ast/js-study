import { Glass, XBtn } from "../../../assets";
import { ClearBtn, Input, InputWrapper, SearchWrapper } from "./Search.style";

interface SearchProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

function Search(props: SearchProps) {
  const { value, setValue } = props;
  return (
    <SearchWrapper>
      <InputWrapper>
        <Glass />
        <Input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="제목을 입력하세요."
        />
        <ClearBtn onClick={() => setValue("")}>
          <XBtn />
        </ClearBtn>
      </InputWrapper>
    </SearchWrapper>
  );
}

export default Search;
