import { reactive, computed } from "vue"

export interface NoteModel {
  title: string
}

interface NotesState {
  notes: NoteModel[]
}

const state = reactive<NotesState>({
  notes: [{ title: "title 1" }, { title: "title 2" }],
})

export function useNotes() {
  return {
    notes: computed(() => state.notes),
    addNewNote: () => state.notes.push({ title: "Narf" }),
  }
}
