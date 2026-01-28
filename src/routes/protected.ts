import { Router } from 'express';
import { authenticate } from '../middleware/authenticate';
import { requireRole } from '../middleware/requireRole';

const router = Router();

router.get(
  '/admin/metrics',
  authenticate,
  requireRole(['ADMIN']),
  (_req, res) => {
    res.json({ message: 'Admin metrics data' });
  }
);

router.get(
  '/reports',
  authenticate,
  requireRole(['ADMIN', 'MANAGER']),
  (_req, res) => {
    res.json({ message: 'Reports data' });
  }
);

router.get(
  '/profile',
  authenticate,
  (_req, res) => {
    res.json({ message: 'User profile data' });
  }
);

export default router;
