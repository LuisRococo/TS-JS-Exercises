function printData<Type>(data: Type) {
  console.log(data);
  return data;
}

const number = printData<number>(10);
const text = printData<string>("Luis");
