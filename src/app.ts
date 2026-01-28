import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from './routes/auth';
import protectedRoutes from './routes/protected';
import versionRoutes from "./features/version-check/versionRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


app.use('/api', protectedRoutes);
app.use('/api/auth', authRoutes);
app.use("/api/version", versionRoutes);

export default app;
