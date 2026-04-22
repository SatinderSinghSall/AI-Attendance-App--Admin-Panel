export const success = (res, data, message = "Success") => {
  res.status(200).json({
    success: true,
    message,
    data,
  });
};

export const error = (res, err, message = "Error") => {
  res.status(500).json({
    success: false,
    message,
    error: err.message || err,
  });
};
