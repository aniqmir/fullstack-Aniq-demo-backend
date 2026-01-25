"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const versionController_1 = require("./versionController");
const router = (0, express_1.Router)();
router.get("/check", versionController_1.checkVersion);
exports.default = router;
//# sourceMappingURL=versionRoutes.js.map