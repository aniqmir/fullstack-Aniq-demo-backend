import { Request, Response, NextFunction } from 'express';
import { Role } from '../types/auth';
export declare function requireRole(roles: Role[]): (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=requireRole.d.ts.map