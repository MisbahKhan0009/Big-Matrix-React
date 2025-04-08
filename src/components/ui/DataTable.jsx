/* eslint-disable */
// src/components/ui/DataTable.jsx
import React from "react";

const DataTable = ({ data, headers }) => {
  const handleLinkClick = (link) => {
    if (link && link !== "link1" && link !== "link2" && link !== "link3") {
      window.open(link, "_blank");
    }
  };

  return (
    <table className="data-software-table w-full text-left border-collapse">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="first-column py-3 px-4 font-semibold uppercase border-b">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => {
          const mainCategory = Object.keys(row)[0];
          const subCategories = row[mainCategory];
          const isNested = typeof subCategories === "object" && !Array.isArray(subCategories);

          if (!isNested) {
            return (
              <tr key={rowIndex} className="border-b">
                <td className="first-column py-3 px-4 align-middle text-gray-800 font-medium border-r">{row.dataClass}</td>
                <td className="middle-column py-3 px-4 align-middle text-gray-800 font-medium border-r">{row.index}</td>
                <td className="last-column py-3 px-4 align-middle text-gray-800 font-medium">
                  <button className={`myButton bg-secondary text-primary px-4 py-2 rounded-md ${row.repositoryLink === "link1" || row.repositoryLink === "link2" || row.repositoryLink === "link3" ? "opacity-50 cursor-not-allowed" : "hover:bg-secondary/90"}`} onClick={() => handleLinkClick(row.repositoryLink)} disabled={row.repositoryLink === "link1" || row.repositoryLink === "link2" || row.repositoryLink === "link3"}>
                    DATA
                  </button>
                </td>
              </tr>
            );
          }

          // Handle nested structure
          return Object.keys(subCategories).map((subCategoryKey, subCategoryIndex) => {
            if (typeof subCategories[subCategoryKey] === "object") {
              return Object.keys(subCategories[subCategoryKey]).map((innerKey, innerIndex) => (
                <tr key={`${rowIndex}-${subCategoryIndex}-${innerIndex}`} className="border-b">
                  {subCategoryIndex === 0 && innerIndex === 0 && (
                    <td className="first-column py-3 px-4 align-middle text-gray-800 font-medium border-r" rowSpan={Object.keys(subCategories).length}>
                      {mainCategory}
                    </td>
                  )}
                  <td className="middle-column py-3 px-4 align-middle text-gray-800 font-medium border-r">{subCategoryKey}</td>
                  <td className="middle-column py-3 px-4 align-middle text-gray-800 font-medium border-r">{innerKey}</td>
                  <td className="last-column py-3 px-4 align-middle text-gray-800 font-medium">
                    <button className="myButton bg-secondary text-primary px-4 py-2 rounded-md hover:bg-secondary/90" onClick={() => handleLinkClick(subCategories[subCategoryKey][innerKey])}>
                      DATA
                    </button>
                  </td>
                </tr>
              ));
            }
            return null;
          });
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
