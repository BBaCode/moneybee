const filePath = "./data/finance-information.json";
const fs = require("fs");

function readFinanceInfo() {
  const infoFile = fs.readFileSync(filePath);
  const infoData = JSON.parse(infoFile);
  return infoData;
}

const getAll = () => {
  return readFinanceInfo();
};

const getById = (id) => {
  const infoData = readFinanceInfo();
  return infoData.find((info) => id === info.id);
};

function writeFinanceInfo(data) {
  fs.writeFileSync(filePath, JSON.stringify(data));
}

module.exports = {
  getAll,
  getById,
  writeFinanceInfo,
};
