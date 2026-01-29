"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jwt_1 = require("../utils/jwt");
const router = (0, express_1.Router)();
router.post('/login', (req, res) => {
    const { role } = req.body;
    if (!role) {
        return res.status(400).json({ message: 'Role is required' });
    }
    const token = (0, jwt_1.signToken)({
        id: 'demo-user',
        role,
    });
    res.json({ token });
});
exports.default = router;
//# sourceMappingURL=auth.js.map