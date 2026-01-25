"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkVersion = void 0;
const versionUtils_1 = require("../../utils/versionUtils");
const checkVersion = (req, res) => {
    const clientVersion = req.headers['x-app-version'];
    if (!clientVersion) {
        return res.status(400).json({ error: "x-app-version header missing" });
    }
    const minVersion = process.env.MIN_SUPPORTED_VERSION || "1.0.0";
    const supported = (0, versionUtils_1.isVersionSupported)(clientVersion, minVersion);
    return res.json({
        supported,
        minVersion,
        message: supported ? "Your app is up to date" : "Please update your app"
    });
};
exports.checkVersion = checkVersion;
//# sourceMappingURL=versionController.js.map