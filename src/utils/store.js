export const getStore = () => {
  const string = localStorage.getItem("math");
  const state = string ? JSON.parse(string) : {};

  return state;
};

export const updateStore = ({ data, levelId }) => {
  const prevState = getStore() || {};

  const newState = {
    ...prevState,
    [levelId]: [...(prevState[levelId] || []), {...data, id: (prevState?.[levelId]?.length || 0) + 1}],
  };

  JSON.stringify(newState);
  localStorage.setItem("math", JSON.stringify(newState));
};
