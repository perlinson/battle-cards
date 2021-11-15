import { Card } from '.'

let card

beforeEach(async () => {
  card = await Card.create({ name: 'test', type: 'test', desc: 'test', atk: 'test', def: 'test', level: 'test', race: 'test', attribute: 'test', card_images: 'test', card_prices: 'test', game: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = card.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(card.id)
    expect(view.name).toBe(card.name)
    expect(view.type).toBe(card.type)
    expect(view.desc).toBe(card.desc)
    expect(view.atk).toBe(card.atk)
    expect(view.def).toBe(card.def)
    expect(view.level).toBe(card.level)
    expect(view.race).toBe(card.race)
    expect(view.attribute).toBe(card.attribute)
    expect(view.card_images).toBe(card.card_images)
    expect(view.card_prices).toBe(card.card_prices)
    expect(view.game).toBe(card.game)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = card.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(card.id)
    expect(view.name).toBe(card.name)
    expect(view.type).toBe(card.type)
    expect(view.desc).toBe(card.desc)
    expect(view.atk).toBe(card.atk)
    expect(view.def).toBe(card.def)
    expect(view.level).toBe(card.level)
    expect(view.race).toBe(card.race)
    expect(view.attribute).toBe(card.attribute)
    expect(view.card_images).toBe(card.card_images)
    expect(view.card_prices).toBe(card.card_prices)
    expect(view.game).toBe(card.game)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
