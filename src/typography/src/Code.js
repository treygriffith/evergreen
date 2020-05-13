import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useTheme } from '../../theme'
import Text from './Text'

const Code = memo(
  forwardRef((props, ref) => {
    const { className, appearance, ...rest } = props
    const theme = useTheme()

    const {
      className: themedClassName = '',
      ...themeProps
    } = theme.getCodeProps(appearance)

    return (
      <Text
        is="code"
        ref={ref}
        className={cx(className, themedClassName)}
        fontFamily="mono"
        {...themeProps}
        {...rest}
      />
    )
  })
)

Code.propTypes = {
  ...Text.propTypes,

  /**
   * The appearance of the code.
   */
  appearance: PropTypes.oneOf(['default', 'minimal']).isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired,

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
}

export default Code
