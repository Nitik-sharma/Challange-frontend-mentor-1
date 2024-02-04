import React from "react";

function Middle() {
  const Prep = [
    { sub: "Total", sup: " Approximately 10 minutes Preparation" },
    { sub: "Preparation", sup: " 5 minutes " },
    { sub: "Cooking", sup: " 5 minutes " },
  ];
  const Ingerdients = [
    "2-3 large eggs Salt",
    "to taste Pepper",
    "1 tablespoon of butter or oil ",
    "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
  ];
  const Instruction = [
    {
      subline: "Beat the eggs",
      supline:
        " In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
    },
    {
      subline: "Heat the pan",
      supline:
        " Place a non-stick frying pan over medium heat and add butter or oil. ",
    },
    {
      subline: "Cook the omelette",
      supline:
        " Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface. ",
    },
    {
      subline: "Add fillings (optional)",
      supline:
        "  When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette. ",
    },
    {
      subline: " Fold and serve:",
      supline:
        " As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate. ",
    },
    {
      subline: "Enjoy:",
      supline: "  Serve hot, with additional salt and pepper if needed. ",
    },
  ];
  const Nutrition = [
    {
      head: "Calories",
      subHead: "277Kcal",
    },
    {
      head: "carbs",
      subHead: "0g",
    },
    {
      head: "Protien",
      subHead: "20g",
    },
    {
      head: "Fat",
      subHead: "22g",
    },
  ];
  return (
    <div>
      <div className=" flex flex-col items-center justify-center  p-3">
        <div className=" p-3 bg-rose-300 w-[90%] ">
          <h1 className=" p-3 text-xl font-bold text-pink-500">
            Preparation time{" "}
          </h1>
          <ol className=" list-disc p-4">
            {Prep.map((item, i) => (
              <li className=" mt-2" key={i}>
                <span className=" text-gray-600 font-bold">{item.sub}</span>:
                <span className=" font-semibold ">{item.sup}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className=" p-7 m-4 border-b-2">
        <h1 className=" text-3xl font-bold text-orange-700 mb-4">
          {" "}
          Ingredients
        </h1>
        <ul className=" list-disc">
          {Ingerdients.map((items, i) => (
            <li key={i}>
              <span className=" text-xl font-semibold text-gray-400 mt-2 ">
                {items}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Instrection */}
      <div className=" p-7 m-4 border-b-2">
        <h1 className=" text-3xl font-bold text-orange-700 mb-4">
          {" "}
          Instruction
        </h1>
        <ul className=" list-disc">
          {Instruction.map((items, i) => (
            <li key={i}>
              <span className=" text-gray-600 font-bold">{items.subline}</span>:
              <span className=" font-semibold ">{items.supline}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Nutrition */}
      <div className=" p-7 m-4 border-b-2">
        <h1 className=" text-3xl font-bold text-orange-700 mb-4">Nutrition</h1>
        <h4 className=" text-md font-medium m-2 text-gray-500">
          The table below shows nutritional values per serving without the
          additional fillings.
        </h4>
        <table
          border={0}
          cellPadding={0}
          cellSpacing={0}
          className=" border-collapse w-[80%] m-3 text-xl"
        >
          <tbody>
            {Nutrition.map((item, i) => (
              <tr
                className=" border-b-2 leading-10 mb-8 text-gray-600   "
                key={i}
              >
                <td className=" w-[70%] h-16 text-xl font-bold">{item.head}</td>
                <td className=" w-[70%] h-16 text-xl font-bold">
                  {item.subHead}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Middle;
