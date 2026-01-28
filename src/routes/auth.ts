import { Router } from 'express';
import { signToken } from '../utils/jwt';
import { Role } from '../types/auth';

const router = Router();

router.post('/login', (req, res) => {
  const { role } = req.body as { role: Role };

  if (!role) {
    return res.status(400).json({ message: 'Role is required' });
  }

  const token = signToken({
    id: 'demo-user',
    role,
  });

  res.json({ token });
});

export default router;
