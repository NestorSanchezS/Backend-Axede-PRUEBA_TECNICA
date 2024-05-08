const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => Log.info("Database is connected"))
  .catch((err) => Log.error(err));
