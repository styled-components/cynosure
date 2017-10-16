// @flow
import margin from '../margin'

describe('margin', () => {
  it('properly applies a value when passed only one', () => {
    expect(margin('12px')).toMatchSnapshot()
  })
  it('properly applies values when passed two', () => {
    expect(margin('12px', '24px')).toMatchSnapshot()
  })
  it('properly applies values when passed three', () => {
    expect(margin('12px', '24px', '36px')).toMatchSnapshot()
  })
  it('properly applies values when passed four', () => {
    expect(margin('12px', '24px', '36px', '48px')).toMatchSnapshot()
  })
  it('properly applies values when passed four', () => {
    expect(margin(12, 24, 36, 48)).toMatchSnapshot()
  })
  it('properly applies zero value', () => {
    expect(margin(0)).toMatchSnapshot()
  })
})
