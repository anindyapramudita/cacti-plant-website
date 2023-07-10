const generateRandomNumber = (maxNumber: number) => {
  return Math.ceil(Math.random() * maxNumber);
};

const randomId = (currentId: number, totalData: number) => {
  let number = generateRandomNumber(totalData);
  while (number === currentId) {
    number = generateRandomNumber(totalData);
  }
  return number;
};

export default randomId;
