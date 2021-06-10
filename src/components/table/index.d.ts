export interface HeaderCell {
  label: string
  field: string,
  render?: Function<JSX.Element>
}

export interface TableProps {
  headerCells: HeaderCell[]
  dataRow: object[]
}

export interface TableRowProps {
  headerCells: HeaderCell[]
  data: any
  index: number
}