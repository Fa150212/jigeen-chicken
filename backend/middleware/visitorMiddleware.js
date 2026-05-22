const Visitor = require(
  "../models/Visitor"
);

const saveVisitor =
  async (req, res, next) => {

    try {

      const ip =
        req.headers[
          "x-forwarded-for"
        ] || req.socket.remoteAddress;

      const exists =
        await Visitor.findOne({
          ip,
        });

      if (!exists) {

        await Visitor.create({
          ip,
        });
      }

      next();

    } catch (error) {

      next();

    }
  };

module.exports = saveVisitor;