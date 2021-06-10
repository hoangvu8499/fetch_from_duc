import React from 'react'
import { TableRowProps } from './index.d'

const TableRow: React.FC<TableRowProps> = ({ headerCells, data, index }) => {
  return (
    <tr>
      {headerCells.map((item, idx) => (
        <td key={`body-${item.field}-${idx}`}>
          {item.render
            ? item.render(data, index, data[item.field])
            : data[item.field]
          }
        </td>
      ))}
    </tr>
  )
}

export default TableRow
