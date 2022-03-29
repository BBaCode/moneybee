const financeInfoModel = require("../models/financeInfoModel.js");

const getAll = (req, res) => {
  const financeInfoData = financeInfoModel.getAll();

  const strippedData = financeInfoData.map((financeInfo) => {
    return {
      id: financeInfo.id,
      title: financeInfo.title,
      information: financeInfo.information,
    };
  });

  res.json(strippedData);
};

const getOne = (req, res) => {
  const { id } = req.params;
  const foundItem = financeInfoModel.getById(id);

  res.json(foundItem);
};

module.exports = {
  getAll,
  getOne,
};
