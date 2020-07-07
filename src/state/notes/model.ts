export interface TagModel {
  id: string
}
export interface NoteModel {
  id: string
  title: string
  text: string
  tags: TagModel[]
}

export interface NotesState {
  notes: NoteModel[]
}
