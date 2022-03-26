export const helloWorld = async (req, res, next) => {
  res.status(200).json({ text: "Hello world" });
};
