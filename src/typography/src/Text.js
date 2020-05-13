import React, { memo, forwardRef } from 'react'
import cx from 'classnames'
import { css as glamorCss } from 'glamor'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { useTheme } from '../../theme'

const Text = memo(
  forwardRef((props, ref) => {
    const {
      size = 400,
      color = 'default',
      fontFamily = 'ui',
      marginTop,
      className,
      css,
      ...rest
    } = props

    const theme = useTheme()

    const { marginTop: defaultMarginTop, ...textStyle } = theme.getTextStyle(
      size
    )

    const finalMarginTop =
      marginTop === 'default' ? defaultMarginTop : marginTop

    return (
      <Box
        is="span"
        ref={ref}
        color={theme.getTextColor(color)}
        fontFamily={theme.getFontFamily(fontFamily)}
        marginTop={finalMarginTop}
        {...textStyle}
        className={cx(className, css ? glamorCss(css).toString() : undefined)}
        {...rest}
      />
    )
  })
)

Text.propTypes = {
  /**
   * Composes the Box component as the base.
   */
  ...Box.propTypes,

  /**
   * Size of the text style.
   * Can be: 300, 400, 500.
   */
  size: PropTypes.oneOf([300, 400, 500]).isRequired,

  /**
   * Font family.
   * Can be: `ui`, `display` or `mono` or a custom font family.
   */
  fontFamily: PropTypes.string.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
}

export default Text
