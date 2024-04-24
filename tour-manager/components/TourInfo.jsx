import React from "react";

const TourInfo = ({ tour }) => {
  const { title, description, stops } = tour;
  const stopsString = stops;
  const stopsList = stopsString.split("\n");
  console.log(stopsList);
  return (
    <div className="max-w-2xl">
      <h1 className="text-4xl font-semibold mb-4">{title}</h1>
      <p className="leading-loose mb-6">{description}</p>
      <ul>
        {stopsList.map((stop) => {
          console.log(stop.length);
          return (
            <li key={stop} className="mb-4 bg-base-100 p-4 rounded-xl">
              {stop.length !== 0 ? <p>{stop}</p> : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TourInfo;
