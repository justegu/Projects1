import { useQuery } from "@tanstack/react-query";
import { API } from "../../../shared/API";
import SearchFilter from "../../molecules/SearchFilter";
import { ISpacexRocket } from "../../../shared/API/types";
import { ISearchFilterData } from "../../molecules/SearchFilter/SearchFilter";
import FullScreenLoader from "../../atoms/FullScreenLoader";

const SpacexRocketsSearchTable = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["rockets"],
    queryFn: () => API.getSpacexRockets(),
  });

  if (isLoading) {
    return <FullScreenLoader />;
  }
  if (isError) {
    return <p>Error..</p>;
  }

  const mappedRocketsList: ISearchFilterData = {
    title: "SpaceX Rockets",
    items: data.map((rocket: ISpacexRocket) => ({
      id: rocket.id ? rocket.id.toString() : "",
      values: [
        { title: "rocket name", value: rocket.rocket_name, unit: "" },
        { title: "diameter", value: rocket.diameter.meters, unit: "m" },
        { title: "height", value: rocket.height.meters, unit: "m" },
        { title: "mass", value: rocket.mass.kg, unit: "kg" },
        {
          title: "cost per launch",
          value: rocket.cost_per_launch,
          unit: "$",
        },
      ],
    })),
  };

  return <SearchFilter data={mappedRocketsList} />;
};

export default SpacexRocketsSearchTable;
