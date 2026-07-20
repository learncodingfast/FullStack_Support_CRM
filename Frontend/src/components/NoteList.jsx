function NoteList({ notes }) {
  if (notes.length === 0) {
    return (
      <p className="text-gray-500">
        No notes available.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <div
          key={note.id}
          className="border rounded p-3"
        >
          <p>{note.note_text}</p>

          <p className="text-sm text-gray-500 mt-2">
            {new Date(note.created_at).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}

export default NoteList;