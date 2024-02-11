import { useState } from "react";
import { Item } from "./SharedInterfaces/SharedInterfaces";
import { FieldValues } from "react-hook-form";
import AddItemForm from "./Components/AddItemForm";
import Table from "./Components/Table";
import CatagoryFilter from "./Components/FilterForm";

function App() {
  const [filterCatagory, setFilterCatagory] = useState<string>("");
  const [allExpenses, setAllExpenses] = useState<Item[]>([]);

  console.log("allexpenses...", allExpenses);
  console.log("Filter Category...", filterCatagory);

  const filteredExpensies = filterCatagory
    ? allExpenses.filter((e) => e.catagory === filterCatagory)
    : allExpenses;

  return (
    <div>
      <AddItemForm
        onSubmit={(data: FieldValues) => {
          setAllExpenses([
            ...allExpenses,
            {
              id: allExpenses.length + 1,
              name: data.item,
              amount: data.amount,
              catagory: data.catagory,
            },
          ]);
        }}
      />
      <CatagoryFilter
        onChangeFilter={(catagory) => {
          setFilterCatagory(catagory);
        }}
      />
      <Table
        items={filteredExpensies.sort((a, b) => {
          if (a.catagory < b.catagory) {
            return -1;
          }
          if (a.catagory > b.catagory) {
            return 1;
          }
          return 0;
        })}
        onRemove={(id: number) => {
          setAllExpenses(allExpenses.filter((p) => p.id !== id));
        }}
      />
    </div>
  );
}

export default App;
