import type { Question, Block, Difficulty } from '@/data/types';

import { modelingQuestions } from '@/data/sa/modeling';
import { architectureQuestions } from '@/data/sa/architecture';
import { databasesQuestions } from '@/data/sa/databases';
import { securityQuestions } from '@/data/sa/security';
import { questions as requirementsQuestions } from '@/data/sa/requirements';
import { questions as bpmnQuestions } from '@/data/sa/bpmn';
import { questions as dataModelingQuestions } from '@/data/sa/data-modeling';

import { scalabilityQuestions } from '@/data/sd/scalability';
import { loadBalancingQuestions } from '@/data/sd/load-balancing';
import { cachingQuestions } from '@/data/sd/caching';
import { sdDatabasesQuestions } from '@/data/sd/databases';
import { messageQueuesQuestions } from '@/data/sd/message-queues';
import { cdnQuestions } from '@/data/sd/cdn';
import { apiDesignQuestions } from '@/data/sd/api-design';
import { microservicesQuestions } from '@/data/sd/microservices';
import { capTheoremQuestions } from '@/data/sd/cap-theorem';
import { resilienceQuestions } from '@/data/sd/resilience';
import { observabilityQuestions } from '@/data/sd/observability';
import { authQuestions } from '@/data/sd/auth';
import { eventDrivenQuestions } from '@/data/sd/event-driven';
import { replicationQuestions } from '@/data/sd/replication';
import { networkingQuestions } from '@/data/sd/networking';
import { rateLimitingQuestions } from '@/data/sd/rate-limiting';

const allQuestions: Question[] = [
  ...modelingQuestions,
  ...architectureQuestions,
  ...databasesQuestions,
  ...securityQuestions,
  ...requirementsQuestions,
  ...bpmnQuestions,
  ...dataModelingQuestions,
  ...scalabilityQuestions,
  ...loadBalancingQuestions,
  ...cachingQuestions,
  ...sdDatabasesQuestions,
  ...messageQueuesQuestions,
  ...cdnQuestions,
  ...apiDesignQuestions,
  ...microservicesQuestions,
  ...capTheoremQuestions,
  ...resilienceQuestions,
  ...observabilityQuestions,
  ...authQuestions,
  ...eventDrivenQuestions,
  ...replicationQuestions,
  ...networkingQuestions,
  ...rateLimitingQuestions,
];

export function getAllQuestions(): Question[] {
  return allQuestions;
}

export function getQuestionsByBlock(block: Block): Question[] {
  return allQuestions.filter(q => q.block === block);
}

export function getQuestionsByTopic(block: Block, topic: string): Question[] {
  return allQuestions.filter(q => q.block === block && q.topic === topic);
}

export function getQuestionsByDifficulty(questions: Question[], difficulty: Difficulty): Question[] {
  return questions.filter(q => q.difficulty === difficulty);
}

export interface TopicInfo {
  id: string;
  label: string;
}

export function getTopics(block: Block): TopicInfo[] {
  const seen = new Map<string, string>();
  for (const q of allQuestions) {
    if (q.block === block && !seen.has(q.topic)) {
      seen.set(q.topic, q.topicLabel);
    }
  }
  return Array.from(seen.entries()).map(([id, label]) => ({ id, label }));
}
