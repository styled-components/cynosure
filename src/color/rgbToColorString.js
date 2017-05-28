// @flow

import rgb from './rgb'
import rgba from './rgba'
import type { RgbColor, RgbaColor } from '../types/color'

/**
 * Converts a RgbColor or RgbaColor object to a color string.
 * This util is useful in case you only know on runtime which color object is
 * used. Otherwise we recommend to rely on `rgb` or `rgba`.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgbToColorString({ red: 255, green: 205, blue: 100 }),
 *   background: rgbToColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgbToColorString({ red: 255, green: 205, blue: 100 })};
 *   background: ${rgbToColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 })};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#ffcd64";
 *   background: "rgba(255,205,100,0.72)";
 * }
 */
function rgbToColorString(color: RgbColor | RgbaColor): string {
  if (
    typeof color === 'object' &&
    typeof color.red === 'number' &&
    typeof color.green === 'number' &&
    typeof color.blue === 'number'
  ) {
    // $FlowIgnoreNextLine not sure why this complains
    return (color.alpha && typeof color.alpha === 'number') ? rgba(color) : rgb(color)
  }

  throw new Error('Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.')
}

export default rgbToColorString
