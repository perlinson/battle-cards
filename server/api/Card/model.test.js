import { Card } from '.'

let card

beforeEach(async () => {
  card = await Card.create({ name: 'test', cardType: 'test', cost: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = card.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(card.id)
    expect(view.name).toBe(card.name)
    expect(view.cardType).toBe(card.cardType)
    expect(view.cost).toBe(card.cost)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = card.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(card.id)
    expect(view.name).toBe(card.name)
    expect(view.cardType).toBe(card.cardType)
    expect(view.cost).toBe(card.cost)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
