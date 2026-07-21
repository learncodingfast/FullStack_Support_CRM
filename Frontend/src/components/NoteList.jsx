function NoteList({ notes }) {
  if (notes.length === 0) {
    return (
      <p className="text-gray-500">
        No notes available.
      </p>
    );
  }

  return (
    <div className="d-flex flex-column gap-3">
  {notes.map((note) => (
    <div
      key={note.id}
      className="border rounded p-3 shadow-sm bg-white"
    >
      <p className="mb-2">
        {note.note_text}
      </p>

      <p className="small text-secondary mb-0 mt-2">
        {new Date(note.created_at).toLocaleString()}
      </p>
    </div>
  ))}
</div>
  );
}

export default NoteList;