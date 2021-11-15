import { Player } from '.'

let player

beforeEach(async () => {
  player = await Player.create({ name: 'test', email: 'test', wins: 'test', losses: 'test', ties: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = player.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(player.id)
    expect(view.name).toBe(player.name)
    expect(view.email).toBe(player.email)
    expect(view.wins).toBe(player.wins)
    expect(view.losses).toBe(player.losses)
    expect(view.ties).toBe(player.ties)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = player.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(player.id)
    expect(view.name).toBe(player.name)
    expect(view.email).toBe(player.email)
    expect(view.wins).toBe(player.wins)
    expect(view.losses).toBe(player.losses)
    expect(view.ties).toBe(player.ties)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
