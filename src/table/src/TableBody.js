import React, { memo, forwardRef } from 'react'
import { Pane } from '../../layers'

const TableBody = memo(
  forwardRef(({ children, ...props }, ref) => {
    return (
      <Pane
        data-evergreen-table-body
        flex="1"
        overflowY="auto"
        {...props}
        ref={ref}
      >
        {children}
      </Pane>
    )
  })
)

TableBody.propTypes = {
  ...Pane.propTypes
}

export default TableBody
