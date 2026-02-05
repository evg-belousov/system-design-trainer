import { describe, it, expect } from 'vitest';
import type { Question, QuizQuestion, OpenQuestion, Difficulty, Block } from '@/data/types';

describe('Question types', () => {
  it('should allow creating a valid QuizQuestion', () => {
    const q: QuizQuestion = {
      id: 'sa-modeling-001',
      block: 'sa',
      topic: 'modeling',
      topicLabel: 'Нотации моделирования',
      difficulty: 'middle',
      type: 'quiz',
      question: 'Какие типы связей выделяют в ER-моделях?',
      options: [
        'Один-к-одному, один-ко-многим, многие-ко-многим',
        'Только один-к-одному',
        'Наследование и композиция',
        'Агрегация и ассоциация',
      ],
      correctIndex: 0,
      explanation: 'В ER-моделях выделяют три типа связей: один-к-одному (1:1), один-ко-многим (1:N), многие-ко-многим (M:N).',
    };

    expect(q.type).toBe('quiz');
    expect(q.block).toBe('sa');
    expect(q.options).toHaveLength(4);
    expect(q.correctIndex).toBe(0);
  });

  it('should allow creating a valid OpenQuestion', () => {
    const q: OpenQuestion = {
      id: 'sd-scalability-001',
      block: 'sd',
      topic: 'scalability',
      topicLabel: 'Масштабируемость',
      difficulty: 'senior',
      type: 'open',
      question: 'Объясните разницу между горизонтальным и вертикальным масштабированием.',
      sampleAnswer: 'Горизонтальное масштабирование — добавление новых серверов. Вертикальное — увеличение мощности существующего сервера.',
      explanation: 'Горизонтальное масштабирование (scale out) добавляет узлы, вертикальное (scale up) увеличивает ресурсы одного узла.',
    };

    expect(q.type).toBe('open');
    expect(q.sampleAnswer).toBeDefined();
  });

  it('should use Question union type for both quiz and open', () => {
    const questions: Question[] = [
      {
        id: 'sa-db-001',
        block: 'sa',
        topic: 'databases',
        topicLabel: 'Базы данных',
        difficulty: 'junior',
        type: 'quiz',
        question: 'Что такое первичный ключ?',
        options: ['Уникальный идентификатор записи', 'Индекс таблицы', 'Внешний ключ', 'Тип данных'],
        correctIndex: 0,
        explanation: 'Первичный ключ — уникальный идентификатор каждой записи в таблице.',
      },
      {
        id: 'sd-caching-001',
        block: 'sd',
        topic: 'caching',
        topicLabel: 'Кэширование',
        difficulty: 'middle',
        type: 'open',
        question: 'Опишите стратегии инвалидации кэша.',
        sampleAnswer: 'TTL, write-through, write-behind, cache-aside.',
        explanation: 'Основные стратегии: TTL (время жизни), write-through (запись в кэш и БД одновременно), write-behind (отложенная запись), cache-aside (ленивая загрузка).',
      },
    ];

    expect(questions).toHaveLength(2);
    expect(questions[0].type).toBe('quiz');
    expect(questions[1].type).toBe('open');
  });

  it('should restrict Difficulty to valid values', () => {
    const difficulties: Difficulty[] = ['junior', 'middle', 'senior'];
    expect(difficulties).toHaveLength(3);
  });

  it('should restrict Block to valid values', () => {
    const blocks: Block[] = ['sa', 'sd'];
    expect(blocks).toHaveLength(2);
  });
});
