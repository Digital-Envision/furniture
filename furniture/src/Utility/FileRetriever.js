import TreeObj from './Tree.json';

const GetAllBackgrounds = async (setBackgrounds, setCurrentBackground) => {
  const backgroundData = TreeObj['children'][0]['children']
    .map((c) => {
      if (c['children']) return c['children'][0]['relativePath'];

      return null;
    })
    .filter((c) => c != null);

  setBackgrounds(backgroundData);
  SetBackground(backgroundData[0], setCurrentBackground);
};

const GetAllChairs = async (setAllChair) => {
  const chairData = TreeObj['children'][1]['children']
    .map((c) => {
      if (c['children']) {
        return {
          name: c['name'],
          Base: c['children'][0]['relativePath'],
          Center: c['children'][1]['relativePath'],
          Left: c['children'][2]['relativePath'],
          Right: c['children'][3]['relativePath'],
        };
      }

      return null;
    })
    .filter((c) => c != null);

  setAllChair(chairData);

  return chairData[0];
};

const GetAllCoffee = async (setAllCoffee) => {
  const coffeeData = TreeObj['children'][2]['children']
    .map((c) => {
      if (c['children']) {
        return c['children'][0]['relativePath'];
      }

      return null;
    })
    .filter((c) => c != null);

  setAllCoffee(coffeeData);
};

const GetAllDining = async (setAllDining) => {
  const diningData = TreeObj['children'][3]['children']
    .map((c) => {
      if (c['children']) {
        return c['children'][0]['relativePath'];
      }

      return null;
    })
    .filter((c) => c != null);

  setAllDining(diningData);

  return diningData[0];
};

const SetBackground = (models, setCurrentBackground) => {
  setCurrentBackground(models);
};

export {
  GetAllBackgrounds,
  GetAllChairs,
  GetAllCoffee,
  GetAllDining,
  SetBackground,
};
