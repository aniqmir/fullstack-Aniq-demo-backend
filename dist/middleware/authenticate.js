"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = authenticate;
const jwt_1 = require("../utils/jwt");
function authenticate(req, res, next) {
    const header = req.headers.authorization;
    if (!header || !header.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const token = header.split(' ')[1] || '';
    try {
        const user = (0, jwt_1.verifyToken)(token);
        req.user = user;
        next();
    }
    catch {
        return res.status(401).json({ message: 'Invalid token' });
    }
}
//# sourceMappingURL=authenticate.js.map