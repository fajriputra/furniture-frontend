export const showSuccess = (message) => {
  return <div className="alert alert-success mb-3">{message}</div>;
};

export const showError = (message) => {
  return <div className="alert alert-danger mb-3">{message}</div>;
};
