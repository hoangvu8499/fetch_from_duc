import React from 'react'
import TableRow from './tableRow'
import { TableProps } from './index.d'

const Table: React.FC<TableProps> = ({ headerCells, dataRow }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          {headerCells.map((item, idx) => (
            <th key={idx + item.field}>{item.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataRow.map((item, idx) => (
          <TableRow key={`body-${idx}`} data={item} index={idx} headerCells={headerCells} />
        ))}
      </tbody>
    </table>
  )
}

export default Table
