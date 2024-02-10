import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name is not long enough" }),
  score: z
    .number({ invalid_type_error: "You have put an incorrect value" })
    .positive({ message: "Please Put in a valid Score" }),
  spec: z.enum([""], { invalid_type_error: "You have put an incorrect value" }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onSubmit?: (data: FieldValues) => void;
}

const Form = ({ onSubmit }: Props) => {
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
          <label htmlFor="Name" className="form-label">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="form-control"
            {...register("name")}
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="score" className="form-label">
            Score
          </label>
          <input
            id="score"
            type="number"
            className="form-control"
            {...register("score", { valueAsNumber: true })}
          />
          {errors.score && (
            <p className="text-danger">{errors.score.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="spec" className="form-label">
            Spec
          </label>
          <select
            aria-label="Default select example"
            className="form-select"
            id="spec"
            {...register("spec")}
          >
            <option value="none">-- None--</option>
            <optgroup label="Death Knight">
              <option value="fury">Blood</option>
              <option value="frost">Frost</option>
              <option value="unholy">Unholy</option>
            </optgroup>
            <optgroup label="Demon Hunter">
              <option value="havoc">Havoc</option>
              <option value="vengence">Vengence</option>
            </optgroup>
            <optgroup label="Druid">
              <option value="balance">Balance</option>
              <option value="feral">Feral</option>
              <option value="guardian">Guardian</option>
              <option value="restoDruid">Restoration</option>
            </optgroup>
            <optgroup label="Evoker">
              <option value="augmentation">Augmentation</option>
              <option value="devistation">Devistation</option>
              <option value="preservation">Preservation</option>
            </optgroup>
            <optgroup label="Hunter">
              <option value="beastMaster">Beast Master</option>
              <option value="marksman">Marksman</option>
              <option value="survival">survival</option>
            </optgroup>
            <optgroup label="Mage">
              <option value="arcane">Arcane</option>
              <option value="fire">Fire</option>
              <option value="frost">Frost</option>
            </optgroup>
            <optgroup label="Monk">
              <option value="brewMaster">BrewMaster</option>
              <option value="windwalker">Windwalker</option>
              <option value="mistweaver">Mistweaver</option>
            </optgroup>
            <optgroup label="Paladin">
              <option value="holyPaladin">Holy</option>
              <option value="protPaladin">Protection</option>
              <option value="retribution">Retribution</option>
            </optgroup>
            <optgroup label="Priest">
              <option value="discipline">Discipline</option>
              <option value="holyPriest">Holy</option>
              <option value="shadow">Shadow</option>
            </optgroup>
            <optgroup label="Rogue">
              <option value="assassination">Assassination</option>
              <option value="outlaw">Outlaw</option>
              <option value="subtlety">Subtlety</option>
            </optgroup>
            <optgroup label="Shaman">
              <option value="elemental">Elemental</option>
              <option value="enhancement">Enhancement</option>
              <option value="restoShaman">Restoration</option>
            </optgroup>
            <optgroup label="Warlock">
              <option value="affliction">Affliction</option>
              <option value="demonology">Demonology</option>
              <option value="destruction">Destruction</option>
            </optgroup>
            <optgroup label="Warrior">
              <option value="arms">Arms</option>
              <option value="fury">Fury</option>
              <option value="protWarrior">Protection</option>
            </optgroup>
          </select>
          {errors.spec && <p className="text-danger">{errors.spec.message}</p>}
        </div>
        <button disabled={!isValid} className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
