// @flow
import setSaturation from '../setSaturation'

describe('setSaturation', () => {
  it('should update the saturation and return a hex color', () => {
    expect(setSaturation(0.2, '#CCCD64')).toMatchSnapshot()
  })

  it('should update the saturation of an 8-digit hex color and return a hex color', () => {
    expect(setSaturation(0.2, '#6564CDB3')).toMatchSnapshot()
  })

  it('should update the saturation and return a color with opacity', () => {
    expect(setSaturation(0.2, 'rgba(101,100,205,0.7)')).toMatchSnapshot()
  })

  it('should update the saturation when passed a string', () => {
    expect(setSaturation('0.75', 'rgba(204,205,100,0.7)')).toMatchSnapshot()
  })
})
