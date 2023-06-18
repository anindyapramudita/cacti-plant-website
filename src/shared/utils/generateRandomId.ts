const generateRandomNumber = () => {
  return Math.ceil(Math.random() * 3);
};

const randomId = (currentId: number) => {
  let number = generateRandomNumber();
  while (number === currentId) {
    number = generateRandomNumber();
  }
  return number;
};

export default randomId;
