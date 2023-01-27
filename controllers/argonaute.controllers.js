const models = require("../models");

exports.getArgonautes = async (req, res) => {
  try {
    const argonautes = await models.Argonaute.findAll();
    return res.status(201).json({ argonautes });
  } catch (e) {
    console.log(e);
  }
};

exports.AddArgonaute = async (req, res) => {
  try {
    const argonauteName = req.body.name;

    const argonauteExist = await models.Argonaute.findOne({ where: { name: argonauteName } });

    if (!argonauteExist) {
      const argonaute = await models.Argonaute.create({
        name: argonauteName,
      });

      return res.status(201).json({ argonaute });
    } else {
      return res.status(301).json({ message: "Argonaute déjà existant" });
    }
  } catch (e) {
    console.log(e);
  }
};

exports.DeleteArgonaute = async (req, res) => {
  try {
    const argonauteId = req.params.argonauteId;

    const argonaute = await models.Argonaute.findOne({ where: { id: argonauteId } });

    await argonaute.destroy();

    return res.status(201).json({ message: "Argonaute supprimé" });
  } catch (e) {
    console.log(e);
  }
};
