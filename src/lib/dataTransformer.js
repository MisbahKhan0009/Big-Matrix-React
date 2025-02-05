// src/utils/dataTransformer.js
export const transformData = (morData) => {
  return [
    {
      "First Order": {
        "Generalized System": "",
        "DAE System": {
          "Index-1": morData[0]?.repositoryLink || "",
          "Index-2": morData[1]?.repositoryLink || "",
          "Index-3": morData[2]?.repositoryLink || "",
        },
      },
    },
    {
      "Second Order": {
        "Generalized System": "",
        "DAE System": {
          "Index-1": morData[3]?.repositoryLink || "",
          "Index-2": morData[4]?.repositoryLink || "",
          "Index-3": morData[5]?.repositoryLink || "",
        },
      },
    },
  ];
};
