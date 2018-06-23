// @flow
import setLightness from '../setLightness'

describe('setLightness', () => {
  it('should update the lightness and return a hex color', () => {
    expect(setLightness(0.2, '#CCCD64')).toMatchSnapshot()
  })

  it('should update the lightness of an 8-digit hex color and return a hex color', () => {
    expect(setLightness(0.2, '#CCCD647F')).toMatchSnapshot()
  })

  it('should update the lightness and return a color with opacity', () => {
    expect(setLightness(0.75, 'rgba(204,205,100,0.7)')).toMatchSnapshot()
  })

  it('should update the lightness when passed a string', () => {
    expect(setLightness('0.2', '#CCCD64')).toMatchSnapshot()
  })
})
