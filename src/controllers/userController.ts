import { Request, Response } from "express";
import { users } from "../data/users"; // mock / DB later

export const getUsers = (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const role = req.query.role as string | undefined;
    const search = req.query.search as string | undefined;

    let filteredUsers = [...users];

    // 🔍 Filter by role
    if (role) {
        filteredUsers = filteredUsers.filter(
            (user) => user.role === role
        );
    }

    // 🔎 Search (name or email)
    if (search) {
        const keyword = search.toLowerCase();
        filteredUsers = filteredUsers.filter(
            (user) =>
                user.name.toLowerCase().includes(keyword) ||
                user.email.toLowerCase().includes(keyword)
        );
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
