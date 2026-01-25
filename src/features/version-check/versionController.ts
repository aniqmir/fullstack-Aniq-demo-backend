import { Request, Response } from "express";
import { isVersionSupported } from "../../utils/versionUtils";

export const checkVersion = (req: Request, res: Response) => {
  const clientVersion = req.headers['x-app-version'] as string;

  if (!clientVersion) {
    return res.status(400).json({ error: "x-app-version header missing" });
  }

  const minVersion = process.env.MIN_SUPPORTED_VERSION || "1.0.0";
  const supported = isVersionSupported(clientVersion, minVersion);

  return res.json({
    supported,
    minVersion,
    message: supported ? "Your app is up to date" : "Please update your app"
  });
};
