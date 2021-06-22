export const increment = () => {
  return (dispatch, state) => {
    // console.log("Actionsss", state);
    dispatch({
      type: "INCREMENT",
    });
  };
};

export const decrement = () => {
  return (dispatch, state) => {
    dispatch({
      type: "DECREMENT",
    });
  };
};
