'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  bookingSchema,
  type BookingFormValues,
} from '@/features/booking/validation/bookingSchema';

import css from './BookingForm.module.css';

interface BookingFormProps {
  carId: string;
}

export default function BookingForm({ carId }: BookingFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: '',
      email: '',
      comment: '',
    },
  });
  const name = watch('name');
  const email = watch('email');
  const comment = watch('comment');

  const onSubmit = (data: BookingFormValues) => {
    console.log('Booking data:', { ...data, carId });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={css.header}>
        <h2 className={css.title}>Book your car now</h2>
        <p className={css.description}>
          Stay connected! We are always ready to help you.
        </p>
      </div>

      <div className={css.fields}>
        <div className={css.field}>
          <label
            className={`${name ? css.label : css.visuallyHidden} ${
              errors.name && name ? css.labelError : ''
            }`}
            htmlFor="booking-name"
          >
            Name*
          </label>

          <input
            className={`${css.input} ${errors.name ? css.invalid : ''}`}
            id="booking-name"
            type="text"
            placeholder="Name*"
            aria-invalid={Boolean(errors.name)}
            {...register('name')}
          />

          {errors.name && (
            <svg className={css.errorIcon} aria-hidden="true">
              <use href="/icons.svg#icon-error" />
            </svg>
          )}

          {errors.name && (
            <p className={css.errorMessage}>{errors.name.message}</p>
          )}
        </div>

        <div className={css.field}>
          <label
            className={`${email ? css.label : css.visuallyHidden} ${
              errors.email && email ? css.labelError : ''
            }`}
            htmlFor="booking-email"
          >
            Email*
          </label>

          <input
            className={`${css.input} ${errors.email ? css.invalid : ''}`}
            id="booking-email"
            type="email"
            placeholder="Email*"
            aria-invalid={Boolean(errors.email)}
            {...register('email')}
          />

          {errors.email && (
            <svg className={css.errorIcon} aria-hidden="true">
              <use href="/icons.svg#icon-error" />
            </svg>
          )}

          {errors.email && (
            <p className={css.errorMessage}>{errors.email.message}</p>
          )}
        </div>

        <div className={css.field}>
          <label
            className={`${comment ? css.label : css.visuallyHidden} ${
              errors.comment && comment ? css.labelError : ''
            }`}
            htmlFor="booking-comment"
          >
            Comment
          </label>

          <textarea
            className={`${css.textarea} ${errors.comment ? css.invalid : ''}`}
            id="booking-comment"
            placeholder="Comment"
            aria-invalid={Boolean(errors.comment)}
            {...register('comment')}
          />

          {errors.comment && (
            <svg
              className={`${css.errorIcon} ${css.textareaErrorIcon}`}
              aria-hidden="true"
            >
              <use href="/icons.svg#icon-error" />
            </svg>
          )}

          {errors.comment && (
            <p className={css.errorMessage}>{errors.comment.message}</p>
          )}
        </div>
      </div>

      <button className={css.submitButton} type="submit">
        Send
      </button>
    </form>
  );
}
