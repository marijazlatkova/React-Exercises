//! imenuvame tip na akcii so golemi bukvi i razdeleni so dolna crta

//* action creator
export const sayHello = () => {
  return {
    type: "SAY_HELLO",
    payload: "Hi and welcome to my First Redux App", //? -> action
  };
};

export const sayGoodbye = () => {
  return {
    type: "SAY_GOODBYE",
    payload: "After this exercises we are going to sleep, good night!",
  };
};
