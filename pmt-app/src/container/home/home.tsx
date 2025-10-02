import { useState } from "react";

const Home = () => {
  const [addInput, setAddInput] = useState<string[]>([]); // empty by default

  const addInputField = () => {
    setAddInput([...addInput, ""]); // add empty input
  };

  const removeInputField = (index: number) => {
    setAddInput(addInput.filter((_, i) => i !== index));
  };

  return (
    <div>
      <button
        type="button"
        className="bg-blue-600 text-white rounded-md px-3 py-2"
        onClick={addInputField}
      >
        Add Input
      </button>

      {addInput.map((item, index) => (
        <div key={index} className="flex gap-2 mt-2">
          <input
            type="text"
            value={item}
            onChange={(e) => {
              const copy = [...addInput];
              copy[index] = e.target.value;
              setAddInput(copy);
            }}
            className="w-full border border-blue-600 rounded-md px-3 py-2 text-gray-700 shadow-sm focus:outline-none"
          />
          <button
            type="button"
            className="bg-red-600 text-white rounded-md px-3 py-2"
            onClick={() => removeInputField(index)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
