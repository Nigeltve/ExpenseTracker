import { useState } from "react";

interface Props {
  onSubmit?: () => void;
}

const Form = ({ onSubmit }: Props) => {
  const [spec, setSpec] = useState("none");

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">
            Name
          </label>
          <input id="name" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="score" className="form-label">
            Score
          </label>
          <input id="score" type="number" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="spec" className="form-label">
            Spec
          </label>
          <select
            aria-label="Default select example"
            className="form-select"
            id="spec"
            onChange={(event) => setSpec(event.target.value)}
            value={spec}
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
              <option value="restoration">Restoration</option>
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
              <option value="brewMaster">brewMaster</option>
              <option value="windwalker">Windwalker</option>
              <option value="mistweaver">Mistweaver</option>
            </optgroup>
            <optgroup label="Paladin">
              <option value="Holy">Holy</option>
              <option value="Protection">Protection</option>
              <option value="Retribution">Retribution</option>
            </optgroup>
            <optgroup label="Priest">
              <option value="Discipline">Discipline</option>
              <option value="Holy">Holy</option>
              <option value="Shadow">Shadow</option>
            </optgroup>
            <optgroup label="Rogue">
              <option value="Assassination">Assassination</option>
              <option value="Outlaw">Outlaw</option>
              <option value="Subtlety">Subtlety</option>
            </optgroup>
            <optgroup label="Shaman">
              <option value="Elemental">Elemental</option>
              <option value="Enhancement">Enhancement</option>
              <option value="Restoration">Restoration</option>
            </optgroup>
            <optgroup label="Warlock">
              <option value="Affliction">Affliction</option>
              <option value="Demonology">Demonology</option>
              <option value="Destruction">Destruction</option>
            </optgroup>
            <optgroup label="Warrior">
              <option value="Arms">Arms</option>
              <option value="Fury">Fury</option>
              <option value="Protection">Protection</option>
            </optgroup>
          </select>
        </div>
        <button className="btn btn-primary" type="submit" onSubmit={onSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
