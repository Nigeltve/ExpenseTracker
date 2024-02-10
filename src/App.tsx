import { useState } from "react";
import { Person } from "./SharedInterfaces/SharedInterfaces";
import Form from "./Components/Form";
import Table from "./Components/Table/";
import { FieldValues } from "react-hook-form";

function App() {
  const [person, setPerson] = useState<Person[]>([]);

  return (
    <div>
      <Form
        onSubmit={(data: FieldValues) => {
          setPerson([
            ...person,
            {
              id: person.length + 1,
              name: data.name,
              score: data.score,
              spec: data.spec,
            },
          ]);
        }}
      />
      <Table
        items={person}
        onRemove={(id: number) => {
          setPerson(person.filter((p) => p.id !== id));
        }}
      />
    </div>
  );
}

export default App;

//{ name: "Nigel", score: 3313, spec: "MistWeaver" },
