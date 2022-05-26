import { meeting } from './meetings'

describe('meetings', () => {
  it('should be empty strings if there is no guest', () => {
    expect(meeting('')).toBe('')
  })
  it('should correctly format the guest list when there is one guest', () => {
    expect(meeting('Fred:Corwill')).toBe('(CORWILL, FRED)')
  })

  it('the list should be correctly formatted when there is more than one guest with same last name already classed by alphabetical order', () => {
    expect(meeting('Fred:Corwill;Wilfred:Corwill')).toBe('(CORWILL, FRED)(CORWILL, WILFRED)')
  })
  it('should sort the guest list by alphabetical order', () => {
    expect(
      meeting(
        'Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill'
      )
    ).toBe(
      '(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)'
    )
  })
})
