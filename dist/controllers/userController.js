"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const users_1 = require("../data/users"); // mock / DB later
const getUsers = (req, res) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const role = req.query.role;
    const search = req.query.search;
    let filteredUsers = [...users_1.users];
    // 🔍 Filter by role
    if (role) {
        filteredUsers = filteredUsers.filter((user) => user.role === role);
    }
    // 🔎 Search (name or email)
    if (search) {
        const keyword = search.toLowerCase();
        filteredUsers = filteredUsers.filter((user) => user.name.toLowerCase().includes(keyword) ||
            user.email.toLowerCase().includes(keyword));
    }
    const total = filteredUsers.length;
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedUsers = filteredUsers.slice(start, end);
    res.json({
        data: paginatedUsers,
        meta: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        },
    });
};
exports.getUsers = getUsers;
//# sourceMappingURL=userController.js.map