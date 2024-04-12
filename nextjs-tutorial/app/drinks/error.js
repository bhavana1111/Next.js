"use client";

const error = () => {
  console.log("error");
  //   return <div>there was an error....</div>;

  return <div>{error.message}</div>;
};
export default error;
