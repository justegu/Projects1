import { useEffect, useState } from "react";
import Input from "../../atoms/Input";
import ICONS from "../../../assets/icons";
import { StyledSearchFilterWrapper, StyledTitleContainer } from "./styles";
import Table from "../Table";

export interface IItem {
  id: string | number;
  values: {
    title: string;
    value: string | number;
    unit?: string;
  }[];
}

export interface ISearchFilterData {
  title: string;
  items: Array<IItem>;
}

interface ISearchFilterProps {
  data: ISearchFilterData;
}

const SearchFilter = ({ data }: ISearchFilterProps) => {
  const { title, items } = data;
  const [displayData, setDisplayData] = useState<IItem[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);

  // search filter
  useEffect(() => {
    if (searchValue) {
      const itemsAfterSearch = items.filter((item) =>
        item.values.some((value) => {
          if (typeof value.value === "string") {
            return value.value
              .toLowerCase()
              .includes(searchValue.toLowerCase());
          }
          if (typeof value.value === "number") {
            return value.value.toString().includes(searchValue);
          }
          return false;
        })
      );

      setDisplayData(itemsAfterSearch);
    } else {
      setDisplayData(items);
    }
  }, [data, searchValue]);

  // sorting by title
  const handleSort = (key: string) => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  useEffect(() => {
    if (sortConfig !== null) {
      const { key, direction } = sortConfig;
      let sortedData: IItem[] = [...displayData];

      if (key === "rocket name") {
        sortedData.sort((a, b) => {
          const valueA = a.values.find((value) => value.title === key)
            ?.value as string;
          const valueB = b.values.find((value) => value.title === key)
            ?.value as string;

          return direction === "asc"
            ? valueA.localeCompare(valueB)
            : valueB.localeCompare(valueA);
        });
      } else {
        sortedData.sort((a, b) => {
          const valueA = a.values.find((value) => value.title === key)
            ?.value as number;
          const valueB = b.values.find((value) => value.title === key)
            ?.value as number;

          return direction === "asc" ? valueA - valueB : valueB - valueA;
        });
      }

      setDisplayData(sortedData);
    }
  }, [sortConfig]);

  return (
    <StyledSearchFilterWrapper>
      <StyledTitleContainer>
        <h1>{title}</h1>
        <p>{displayData.length} Results</p>
        <Input
          type="text"
          value={searchValue}
          setvalue={setSearchValue}
          icon={ICONS.search}
          placeholder="Search"
        />
      </StyledTitleContainer>
      <Table displayData={displayData} handleSort={handleSort} />
    </StyledSearchFilterWrapper>
  );
};

export default SearchFilter;
