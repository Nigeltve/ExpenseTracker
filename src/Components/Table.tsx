import { Item } from "../SharedInterfaces/SharedInterfaces";

interface Props {
  items?: Item[];
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
            {items?.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>${item.amount}</td>
                <td>{item.catagory}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      onRemove?.(item.id);
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tbody>
            <td>Total:</td>
            <td rowSpan={3}>
              ${items.reduce((total, item) => total + item.amount, 0)}
            </td>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
