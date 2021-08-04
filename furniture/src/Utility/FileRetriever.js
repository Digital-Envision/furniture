const GetAllBackgrounds = async (setBackgrounds, setCurrentBackground) => {
  const backgroundsAPI = await fetch('/api/Backgrounds');
  const backgroundsPayload = await backgroundsAPI.json();

  setBackgrounds(backgroundsPayload.data);

  SetBackground(backgroundsPayload.data[1], setCurrentBackground);
};

const GetAllChairs = async (setAllChair) => {
  const chairAPI = await fetch('/api/Chairs');
  const chairPayload = await chairAPI.json();

  setAllChair(chairPayload.data);

  return chairPayload.data[0];
};

const GetAllCoffee = async (setAllCoffee) => {
  const coffeeAPI = await fetch('/api/CoffeeTables');
  const coffeePayload = await coffeeAPI.json();

  setAllCoffee(coffeePayload.data);
};

const GetAllDining = async (setAllDining) => {
  const diningAPI = await fetch('/api/DiningTables');
  const diningPayload = await diningAPI.json();

  setAllDining(diningPayload.data);

  return diningPayload.data[0];
};

const SetBackground = async (models, setCurrentBackground) => {
  const newBackgroundAPI = await fetch(`/api/Backgrounds/${models}`);
  const newBackgroundPayload = await newBackgroundAPI.json();
  const newBackgroundData = newBackgroundPayload.data;

  setCurrentBackground(newBackgroundData['Base']);
};

export {
  GetAllBackgrounds,
  GetAllChairs,
  GetAllCoffee,
  GetAllDining,
  SetBackground,
};
