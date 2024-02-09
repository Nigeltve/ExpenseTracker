import { Person } from "../../SharedInterfaces/SharedInterfaces";

interface Props {
  items?: Person[];
  onRemove?: (array: number) => void;
}

const Table = ({ items, onRemove }: Props) => {
  return (
    <div className="mt-3">
      {items === undefined || items.length <= 0 ? (
        <p>There is no Data to be returned</p>
      ) : (
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Score</th>
              <th scope="col">Spec</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {items?.map((person, index) => (
              <tr key={index}>
                <td>{person.name}</td>
                <td>{person.score}</td>
                <td>{person.spec}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      onRemove?.(person.id);
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
