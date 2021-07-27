// Exemplo de uma operação computacional pesada esse método pode travar a UI

export const likesCounter = (likesCounter) => {
  for (let index = 0; index < 1000000000; index++) {}
  return likesCounter + 1;
};
