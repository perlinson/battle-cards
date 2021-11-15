import { File } from '.'

let file

beforeEach(async () => {
  file = await File.create({ title: 'test', description: 'test', file_path: 'test', file_mimetype: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = file.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(file.id)
    expect(view.title).toBe(file.title)
    expect(view.description).toBe(file.description)
    expect(view.file_path).toBe(file.file_path)
    expect(view.file_mimetype).toBe(file.file_mimetype)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = file.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(file.id)
    expect(view.title).toBe(file.title)
    expect(view.description).toBe(file.description)
    expect(view.file_path).toBe(file.file_path)
    expect(view.file_mimetype).toBe(file.file_mimetype)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
