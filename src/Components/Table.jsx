import React from 'react';
import '../Styles/Table.css';
const Table = ({ titles = [], keys = [], data = [], onButtonClick, showAction = false, actionTitle = 'Action', buttonLabel = 'Action' }) => {
  return (
    <table className="Table-table">
      <thead>
        <tr>
          {titles.map((title, index) => (
            <th key={index}>{title}</th>
          ))}
          {showAction && <th>{actionTitle}</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {keys.map((key, columnIndex) => (
              <td key={columnIndex}>{row[key]}</td>
            ))}
            {showAction && (
              <td>
                <button className='actionbtn' onClick={() => onButtonClick(row)}>{buttonLabel}</button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

//How to use Table component
// Pass the following props to the Table component:
// titles: An array of strings representing the column titles.
// keys: An array of strings representing the keys to access the data in each row.
// data: An array of objects representing the data to be displayed in the table.
// onButtonClick: A function that is called when the action button is clicked. It receives the row data as an argument.
// showAction: A boolean value indicating whether to show the action column.
// actionTitle: A string representing the title of the action column.
// buttonLabel: A string representing the label of the action button.
