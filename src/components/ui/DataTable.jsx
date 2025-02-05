/* eslint-disable */
// src/components/ui/DataTable.jsx
import React from "react";

const DataTable = ({ data, headers }) => {
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
          const nestedLength = isNested
            ? Object.keys(subCategories).reduce((acc, item) => {
                if (typeof subCategories[item] === "object") {
                  return acc + Object.keys(subCategories[item]).length;
                }
                return acc + 1;
              }, 0)
            : 1;
          return (
            <React.Fragment key={rowIndex}>
              {isNested ? (
                Object.keys(subCategories).map((subCategoryKey, subCategoryIndex) =>
                  typeof subCategories[subCategoryKey] === "object" ? (
                    Object.keys(subCategories[subCategoryKey]).map((innerKey, innerIndex) => (
                      <tr key={innerIndex} className="border-b">
                        {subCategoryIndex === 0 && (
                          <td className="first-column py-3 px-4 align-middle text-gray-800 font-medium border-r" rowSpan={nestedLength}>
                            {mainCategory}
                          </td>
                        )}
                        <td className={`middle-column py-3 px-4 align-middle text-gray-800 font-medium border-r`}>{subCategoryKey}</td>
                        <td className={`middle-column py-3 px-4 align-middle text-gray-800 font-medium border-r`}>{innerKey}</td>
                        <td className={`last-column py-3 px-4 align-middle text-gray-800 font-medium`}>
                          <button className="myButton bg-secondary text-primary px-4 py-2 rounded-md" onClick={() => window.open(subCategories[subCategoryKey][innerKey], "_blank")}>
                            DATA
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr key={subCategoryIndex} className="border-b">
                      {subCategoryIndex === 0 && (
                        <td className="first-column py-3 px-4 align-middle text-gray-800 font-medium border-r" rowSpan={nestedLength}>
                          {mainCategory}
                        </td>
                      )}

                      <td className={`middle-column py-3 px-4 align-middle text-gray-800 font-medium border-r`}>{subCategoryKey}</td>
                      <td className={`middle-column py-3 px-4 align-middle text-gray-800 font-medium border-r`}></td>
                      <td className={`last-column py-3 px-4 align-middle text-gray-800 font-medium `}>
                        <button className="myButton bg-secondary text-primary px-4 py-2 rounded-md" onClick={() => window.open(subCategories[subCategoryKey], "_blank")}>
                          DATA
                        </button>
                      </td>
                    </tr>
                  )
                )
              ) : (
                <tr key={rowIndex} className="border-b">
                  <td className="first-column py-3 px-4 align-middle text-gray-800 font-medium border-r">{mainCategory}</td>
                  {Object.keys(subCategories).map((key, colIndex) => (
                    <td key={colIndex} className={`middle-column py-3 px-4 align-middle text-gray-800 font-medium`}>
                      {key === "repositoryLink" ? (
                        <button className="myButton bg-secondary text-primary px-4 py-2 rounded-md" onClick={() => window.open(subCategories[key], "_blank")}>
                          DATA
                        </button>
                      ) : (
                        subCategories[key]
                      )}
                    </td>
                  ))}
                </tr>
              )}
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
