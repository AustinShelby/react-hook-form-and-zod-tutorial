import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="max-w-5xl mx-auto w-full py-32 px-4">
        <div className="flex shadow-xl">
          <div className="w-1/2 bg-sky-900 px-8 py-12">
            <h1 className="text-white font-bold text-3xl">
              Welcome to Website!
            </h1>
            <p className="text-lg text-white/80 mt-4 leading-relaxed">
              Answer a few questions and your account will be created!
            </p>
          </div>
          <div className="w-1/2 bg-white p-8">
            <form className="">
              <label className="block">
                <span className="block">Name</span>
                <input
                  type="text"
                  className="block border text-lg px-6 py-3 mt-2 rounded-lg bg-gray-50 border-gray-200 focus:bg-white text-gray-700 focus:text-gray-900 focus:border-sky-400 outline-none w-full"
                />
              </label>
              <label className="mt-6 block">
                <span className="block">Name</span>
                <input
                  type="text"
                  className="block border text-lg px-6 py-3 mt-2 rounded-lg bg-gray-50 border-gray-200 focus:bg-white text-gray-700 focus:text-gray-900 focus:border-sky-400 outline-none w-full"
                />
              </label>
              <p className="mt-6 block">Payment Tier</p>
              <ul>
                <li className="border border-gray-200 rounded-lg text-lg px-6 py-4 mt-2 flex justify-between items-center">
                  <div>
                    <p>Silver Tier</p>
                    <p className="text-gray-500 text-sm">Get average points</p>
                  </div>
                  <div className="flex items-center">
                    <p className="font-medium mr-4 text-sm">$0.99</p>
                    <input
                      type="radio"
                      className="w-6 h-6 border ring-0 border-gray-200 outline-none"
                    />
                  </div>
                </li>
                <li className="border border-gray-200 rounded-lg text-lg px-6 py-4 mt-2 flex justify-between items-center">
                  <div>
                    <p>Gold Tier</p>
                    <p className="text-gray-500 text-sm">Get average points</p>
                  </div>
                  <div className="flex items-center">
                    <p className="font-medium mr-4 text-sm">$9.99</p>
                    <input
                      type="radio"
                      className="w-6 h-6 border ring-0 border-gray-200 outline-none"
                    />
                  </div>
                </li>
                <li className="border border-gray-200 rounded-lg text-lg px-6 py-4 mt-2 flex justify-between items-center">
                  <div>
                    <p>Platinum Tier</p>
                    <p className="text-gray-500 text-sm">Get average points</p>
                  </div>
                  <div className="flex items-center">
                    <p className="font-medium mr-4 text-sm">$49.99</p>
                    <input
                      type="radio"
                      className="w-6 h-6 border ring-0 border-gray-200 outline-none"
                    />
                  </div>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
