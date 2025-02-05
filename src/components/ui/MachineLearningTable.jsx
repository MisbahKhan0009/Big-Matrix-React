/* eslint-disable */

const MachineLearningTable = ({ data, headers }) => {
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
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="border-b">
            <td className="py-3 px-4 text-gray-800 font-medium border-r">
              {row.dataClass}
            </td>
            <td className="py-3 px-4 text-gray-800 font-medium border-r">
              {row.dataName}
            </td>
            <td className="py-3 px-4 text-gray-800 font-medium">
              <button 
                className="myButton bg-secondary text-primary px-4 py-2 rounded-md"
                onClick={() => window.open(row.repositoryLink, "_blank")}
              >
                DATA
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MachineLearningTable;