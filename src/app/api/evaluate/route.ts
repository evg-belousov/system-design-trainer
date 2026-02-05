import { NextResponse } from 'next/server';
import { evaluateAnswer } from '@/lib/openai';
import type { EvaluateRequest } from '@/lib/openai';

export async function POST(request: Request) {
  try {
    const body: EvaluateRequest = await request.json();

    if (!body.question || !body.userAnswer || !body.sampleAnswer) {
      return NextResponse.json(
        { source: 'fallback', score: null, feedback: 'Некорректный запрос: отсутствуют обязательные поля.' },
        { status: 200 }
      );
    }

    const result = await evaluateAnswer(body);
    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { source: 'fallback', score: null, feedback: 'Автоматическая оценка недоступна. Сравните свой ответ с эталонным.' },
      { status: 200 }
    );
  }
}
