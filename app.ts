import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import collectionRouter from './router/collectionRoutes'

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

/** middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors<Request>());
app.disable("x-powered-by");


/** API Routes */
app.use('/api', collectionRouter)

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
