import React from "react";
import Input from "../../atoms/Input";
import { StyledSearchFilterWrapper } from "./styles";

export interface ISearchFilterData {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  data?: any[];
  filteredData?: any[];
}

const SearchFilter = ({
  searchValue,
  setSearchValue,
  data,
  filteredData,
}: ISearchFilterData) => {
  return (
    <>
      <StyledSearchFilterWrapper>
        <Input
          type={"text"}
          value={searchValue}
          setValue={setSearchValue}
          placeholder="Paieška"
        />
      </StyledSearchFilterWrapper>
    </>
  );
};

export default SearchFilter;
