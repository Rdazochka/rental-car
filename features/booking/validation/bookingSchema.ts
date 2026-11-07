import { z } from 'zod';

export const bookingSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Please enter your name.')
    .regex(
      /^[\p{L}\p{M}]+(?:[ '\u2019-][\p{L}\p{M}]+)*$/u,
      'Please enter your name.',
    ),

  email: z
    .string()
    .trim()
    .min(1, 'Please enter your email.')
    .email('Please enter a valid email address.'),

  comment: z.string().trim().min(1, 'Comment is required.'),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;
