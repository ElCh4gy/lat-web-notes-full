import rateLimit from 'express-rate-limit';

// 10 intentos de inicio de sesión cada 15 minutos por dirección IP
export const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  message: {
    success: false,
    data: null,
    error: {
      message:
        'Demasiados intentos de inicio de sesión. Inténtalo de nuevo más tarde.',
    },
  },
});

// 20 registros por hora por dirección IP
export const registerLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 20,
  message: {
    success: false,
    data: null,
    error: {
      message:
        'Demasiados registros desde esta dirección. Inténtalo de nuevo más tarde.',
    },
  },
});
