respon = {};

respon.responseErr = (res, code, message, error) => {
  return res.status(code).json({
    code: code,
    message: message || "error",
    errors: error,
  });
};

respon.response = (res, code, data , message) => {
  return res.status(code).json({
    code : code,
    message : message || "",
    data : data
  });
};

module.exports = respon;
