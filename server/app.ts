import { json, urlencoded } from "body-parser";
import * as compression from "compression";
import * as express from "express";
import * as path from "path";
var cors = require('cors');

import { feedRouter } from "./routes/feed";
import { loginRouter } from "./routes/login";
import { publicRouter } from "./routes/public";
import { dbRouter } from "./routes/cdb";
const app: express.Application = express();

app.disable("x-powered-by");

app.use(json());
app.use(compression());
app.use(cors());
app.use(urlencoded({ extended: true }));

// api routes
app.use("/api/secure", protectedRouter);
app.use("/api/login", loginRouter);
app.use("/api/public", publicRouter);
app.use("/api/cdb", dbRouter);

if (app.get("env") === "production") {

  // in production mode run application from dist folder
  app.use(express.static(path.join(__dirname, "/../client")));
}

// catch 404 and forward to error handler
app.use((req: express.Request, res: express.Response, next) => {
  const err = new Error("Not Found");
  next(err);
});

// production error handler
// no stacktrace leaked to user
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {

  res.status(err.status || 500);
  res.json({
    error: {},
    message: err.message,
  });
});

export { app };
