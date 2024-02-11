import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  item: z.string().min(3, { message: "Name is not long enough" }),
  amount: z
    .number({ invalid_type_error: "You have put an incorrect value" })
    .positive({ message: "Please Put in a valid Score" }),
  catagory: z.enum(["Groceries", "Utility", "Entertainment"], {
    invalid_type_error: "You have put an incorrect value",
  }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onSubmit?: (data: FieldValues) => void;
}

const AddItemForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmitData = (data: FieldValues) => {
    onSubmit?.(data);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitData)}>
        <div className="mb-3">
          <label htmlFor="item" className="form-label">
            Expense Description
          </label>
          <input
            id="item"
            type="text"
            className="form-control"
            {...register("item")}
          />
          {errors.item && <p className="text-danger">{errors.item.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            id="amount"
            type="number"
            className="form-control"
            {...register("amount", { valueAsNumber: true })}
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="catagory" className="form-label">
            Category
          </label>
          <select
            aria-label="Default select example"
            className="form-select"
            id="catagory"
            {...register("catagory")}
          >
            <option value=""></option>
            <option value="Groceries">Groceries</option>
            <option value="Utility">Utility</option>
            <option value="Entertainment">Entertainment</option>
          </select>
          {errors.catagory && (
            <p className="text-danger">{errors.catagory.message}</p>
          )}
        </div>
        <button disabled={!isValid} className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddItemForm;
