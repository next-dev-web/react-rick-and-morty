export default function Navigation({ page, setPage }) {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <p>Page: {page}</p>
      <button className="btn btn-primary" onClick={() => setPage(page + 1)}>
        Page: {page + 1}
      </button>
    </div>
  );
}
