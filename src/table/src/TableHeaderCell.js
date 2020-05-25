import React, { memo, forwardRef } from 'react'
import TableCell from './TableCell'

const TableHeaderCell = memo(
  forwardRef((props, ref) => {
    return (
      <TableCell
        overflow="visible"
        borderBottom={null}
        {...props}
        innerRef={ref}
      />
    )
  })
)
TableHeaderCell.propTypes = {
  /**
   * Composes the TableCell component as the base.
   */
  ...TableCell.propTypes
}

export default TableHeaderCell
