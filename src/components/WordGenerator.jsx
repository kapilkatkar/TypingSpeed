import React from "react";

const WordGenerator = ({ words }) => {
  return <div>{words.join(" ")}</div>;
};

export default WordGenerator;
