const obj = {
  name: "Trung Hieu",
  age: 21,
  address:
    "No 199, Hamlet 11, Yên Lộc Commune, Kim Sơn District, Ninh Bình Province, Viet Nam Country",
};

const getInformation = (obj) => {
  console.log(obj);
};

getInformation(obj);
console.log(process.argv[2]);