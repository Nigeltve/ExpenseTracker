interface Props {
  onChangeFilter?: (event: string) => void;
}

const CatagoryFilter = ({ onChangeFilter }: Props) => {
  return (
    <>
      <div className="mt-5">
        <label htmlFor="catagory" className="form-label">
          Filter Catagory
        </label>
        <select
          aria-label="Default select example"
          className="form-select"
          id="catagory"
          onChange={(event) => onChangeFilter?.(event.target.value)}
        >
          <option value="All">All</option>
          <option value="Groceries">Groceries</option>
          <option value="Utility">Utility</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>
    </>
  );
};

export default CatagoryFilter;
