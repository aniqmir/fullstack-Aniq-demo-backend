import { Request, Response, NextFunction } from 'express';
import { AuthUser } from '../types/auth';
declare global {
    namespace Express {
        interface Request {
            user?: AuthUser;
        }
    }
}
export declare function authenticate(req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=authenticate.d.ts.map