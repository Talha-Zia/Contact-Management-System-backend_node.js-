const { constants } = require("../constants");
const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      break;
    case constants.NOT_FOUND:
      res.json({
        title: "Not Found ",
        message: error.message,
        stackTrace: error.stack,
      });
      case constants.UNAUTHORIZED:
        res.json({
          title: "Unauthorized ",
          message: error.message,
          stackTrace: error.stack,
        });
        case constants.FORBIDDEN:
            res.json({
              title: "Forbidden ",
              message: error.message,
              stackTrace: error.stack,
            });
            case constants.SERVER_ERRORR:
              res.json({
                title: "server error",
                message: error.message,
                stackTrace: error.stack,
              });

    default:
      console.log("NO ERROR ALL GOOD!");
      break;
  }
  res.json({
    title: "Validation Failed ",
    message: error.message,
    stackTrace: error.stack,
  });
};
module.exports = errorHandler;
