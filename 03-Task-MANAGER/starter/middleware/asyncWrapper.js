export const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);   // sends the error to the global error handler
    }
  };
};





//or
// const asyncWrapper = (fn) => (req, res, next) =>
//   Promise.resolve(fn(req, res, next)).catch(next);

// export default asyncWrapper;