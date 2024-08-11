import React from "react";
import useQuery from "../hooks/useQuery";

const T1 = () => {
  const { data, isLoading } = useQuery({
    url: "https://restcountries.com/v3.1/all",
  });


  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data.map((item) => (
            <h5 key={item?.cca3}>{item?.name?.common}</h5>
          ))}
        </div>
      )}
    </div>
  );
};

export default T1;
