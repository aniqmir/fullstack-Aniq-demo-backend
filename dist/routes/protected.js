"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const authenticate_1 = require("../middleware/authenticate");
const requireRole_1 = require("../middleware/requireRole");
const router = (0, express_1.Router)();
router.get("/users", authenticate_1.authenticate, (0, requireRole_1.requireRole)(['ADMIN']), userController_1.getUsers);
router.get('/admin/metrics', authenticate_1.authenticate, (0, requireRole_1.requireRole)(['ADMIN']), (_req, res) => {
    res.json({ message: 'Admin metrics data' });
});
router.get('/reports', authenticate_1.authenticate, (0, requireRole_1.requireRole)(['ADMIN', 'MANAGER']), (_req, res) => {
    res.json({ message: 'Reports data' });
});
router.get('/profile', authenticate_1.authenticate, (_req, res) => {
    res.json({ message: 'User profile data' });
});
exports.default = router;
//# sourceMappingURL=protected.js.map