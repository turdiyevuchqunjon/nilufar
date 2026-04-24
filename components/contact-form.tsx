'use client';

import { FormEvent, useMemo, useState } from 'react';
import { Loader2, Send } from 'lucide-react';

type FormState = {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
};

const initialState: FormState = {
  firstName: '',
  lastName: '',
  phone: '',
  address: ''
};

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const canSubmit = useMemo(() => {
    return Object.values(values).every((value) => value.trim().length >= 3);
  }, [values]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || 'Не удалось отправить заявку.');
      }

      setStatus('success');
      setMessage('Заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.');
      setValues(initialState);
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Произошла ошибка при отправке.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-card rounded-[32px] border border-brand/10 p-6 shadow-glow sm:p-8"
    >
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-dark">Запись</p>
        <h3 className="mt-3 text-2xl font-extrabold text-slate-900">Оставьте заявку</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Заполненные данные будут отправлены в Telegram бота администратора.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-700">
          <span>Имя</span>
          <input
            required
            minLength={3}
            value={values.firstName}
            onChange={(event) => setValues((prev) => ({ ...prev, firstName: event.target.value }))}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10"
            placeholder="Введите имя"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-slate-700">
          <span>Фамилия</span>
          <input
            required
            minLength={3}
            value={values.lastName}
            onChange={(event) => setValues((prev) => ({ ...prev, lastName: event.target.value }))}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10"
            placeholder="Введите фамилию"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-slate-700">
          <span>Телефон</span>
          <input
            required
            value={values.phone}
            onChange={(event) => setValues((prev) => ({ ...prev, phone: event.target.value }))}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10"
            placeholder="+998 90 123 45 67"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-slate-700">
          <span>Адрес</span>
          <input
            required
            minLength={3}
            value={values.address}
            onChange={(event) => setValues((prev) => ({ ...prev, address: event.target.value }))}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10"
            placeholder="Укажите адрес"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={!canSubmit || status === 'loading'}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        Отправить заявку
      </button>

      {message ? (
        <p
          className={`mt-4 rounded-2xl px-4 py-3 text-sm ${
            status === 'success'
              ? 'bg-emerald-50 text-emerald-700'
              : 'bg-rose-50 text-rose-700'
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
