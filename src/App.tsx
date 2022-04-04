import { useState } from "react";
import { Form } from "./Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="max-w-xl mx-auto w-full py-32 px-4">
        <div className="bg-white p-8 py-12 rounded-lg shadow-xl">
          <h1 className="text-gray-900 font-bold text-3xl">
            Create New Account
          </h1>
          <p className="text-gray-600 mt-4 mb-8 leading-relaxed">
            Become a member in just three easy steps. You can always edit your
            data later.
          </p>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
