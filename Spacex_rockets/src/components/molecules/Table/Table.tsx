import { useState } from "react";
import { IItem } from "../SearchFilter/SearchFilter";
import { StyledItemsContainer } from "./styles";
import ICONS from "../../../assets/icons";

interface ITableProps {
  displayData: IItem[];
  handleSort: (key: string) => void;
}

const Table = ({ displayData, handleSort }: ITableProps) => {
  // filter by icon
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const toggleFilterOptions = () => {
    setShowFilterOptions(!showFilterOptions);
  };

  return (
    <StyledItemsContainer>
      <div className="table-container">
        <div
          className={`filter-icon ${showFilterOptions ? "active" : ""}`}
          onClick={toggleFilterOptions}
        >
          {ICONS.filter} <span>Filter</span>
        </div>
        {showFilterOptions && (
          <div className="filter-options">
            {displayData[0]?.values.map((value, index) => (
              <h5
                key={index}
                onClick={() => {
                  handleSort(value.title);
                  setShowFilterOptions(false);
                }}
              >
                {value.title.charAt(0).toUpperCase() + value.title.slice(1)}
              </h5>
            ))}
          </div>
        )}

        <div className="table-container__title">
          {displayData[0]?.values.map((value, index) => (
            <h5 key={index} onClick={() => handleSort(value.title)}>
              {value.title.charAt(0).toUpperCase() + value.title.slice(1)}
            </h5>
          ))}
        </div>
        <div className="result-no-result">
          {displayData.length ? (
            displayData.map((item) => (
              <div key={item.id} className="rocket-values">
                {item.values.map((value, index) => (
                  <span key={index} className="item-value">
                    {value.title === "cost per launch"
                      ? `${value.unit} ${value.value}`
                      : `${value.value} ${value.unit}`}
                  </span>
                ))}
              </div>
            ))
          ) : (
            <p className="no-result">No results..</p>
          )}
        </div>
      </div>
    </StyledItemsContainer>
  );
};

export default Table;
