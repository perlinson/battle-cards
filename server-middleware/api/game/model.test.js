import { Game } from '.'

let game

beforeEach(async () => {
  game = await Game.create({ result: 'test', playerX: 'test', playerO: 'test', position: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = game.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(game.id)
    expect(view.result).toBe(game.result)
    expect(view.playerX).toBe(game.playerX)
    expect(view.playerO).toBe(game.playerO)
    expect(view.position).toBe(game.position)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = game.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(game.id)
    expect(view.result).toBe(game.result)
    expect(view.playerX).toBe(game.playerX)
    expect(view.playerO).toBe(game.playerO)
    expect(view.position).toBe(game.position)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
