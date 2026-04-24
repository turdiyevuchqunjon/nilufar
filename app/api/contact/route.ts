import { NextRequest, NextResponse } from 'next/server';

const requiredFields = ['firstName', 'lastName', 'phone', 'address'] as const;

type Payload = Record<(typeof requiredFields)[number], string>;

function isValidPayload(payload: Record<string, unknown>): payload is Payload {
  return requiredFields.every((field) => typeof payload[field] === 'string' && payload[field].trim().length >= 3);
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    if (!isValidPayload(body)) {
      return NextResponse.json(
        { message: 'Пожалуйста, заполните имя, фамилию, телефон и адрес.' },
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return NextResponse.json(
        {
          message:
            'Telegram не настроен. Укажите TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID в .env.local.'
        },
        { status: 500 }
      );
    }

    const message = [
      '🩺 <b>Новая заявка с сайта SAOMED</b>',
      '',
      `<b>Имя:</b> ${body.firstName.trim()}`,
      `<b>Фамилия:</b> ${body.lastName.trim()}`,
      `<b>Телефон:</b> ${body.phone.trim()}`,
      `<b>Адрес:</b> ${body.address.trim()}`
    ].join('\n');

    const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML'
      })
    });

    if (!telegramResponse.ok) {
      const errorText = await telegramResponse.text();
      return NextResponse.json(
        { message: `Ошибка Telegram API: ${errorText}` },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { message: 'Внутренняя ошибка сервера при отправке заявки.' },
      { status: 500 }
    );
  }
}
