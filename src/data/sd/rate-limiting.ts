import type { Question } from '../types';

export const rateLimitingQuestions: Question[] = [
  {
    id: 'sd-rate-limiting-001',
    block: 'sd',
    topic: 'rate-limiting',
    topicLabel: 'Rate Limiting и защита API',
    difficulty: 'junior',
    type: 'quiz',
    question: 'Что такое rate limiting и зачем оно нужно?',
    options: [
      'Ограничение размера HTTP-запросов для экономии трафика',
      'Ограничение количества запросов, которые клиент может отправить за определённый период, для защиты сервиса от перегрузки и злоупотреблений',
      'Ограничение скорости передачи данных между серверами',
      'Механизм приоритизации запросов от VIP-клиентов',
    ],
    correctIndex: 1,
    explanation:
      'Rate limiting — механизм контроля частоты запросов к API или сервису. Цели: 1) Защита от перегрузки — предотвращение отказа сервиса при пиковых нагрузках. 2) Защита от злоупотреблений — предотвращение DDoS-атак, brute-force, scraping. 3) Справедливое распределение ресурсов — один клиент не должен потреблять все ресурсы. 4) Контроль стоимости — ограничение использования дорогих downstream-сервисов. Rate limiting возвращает HTTP 429 (Too Many Requests) при превышении лимита.',
  },
  {
    id: 'sd-rate-limiting-002',
    block: 'sd',
    topic: 'rate-limiting',
    topicLabel: 'Rate Limiting и защита API',
    difficulty: 'junior',
    type: 'quiz',
    question: 'Как работает алгоритм Token Bucket?',
    options: [
      'Корзина заполняется токенами с фиксированной скоростью; каждый запрос забирает токен; если корзина пуста — запрос отклоняется; корзина имеет максимальную ёмкость',
      'Каждый запрос создаёт новый токен, и при достижении лимита все токены удаляются',
      'Токены распределяются между пользователями поровну в начале каждого часа',
      'Запросы помещаются в очередь и обрабатываются строго в порядке поступления',
    ],
    correctIndex: 0,
    explanation:
      'Token Bucket — один из самых популярных алгоритмов rate limiting. Принцип: 1) Корзина имеет максимальную ёмкость (burst size). 2) Токены добавляются с фиксированной скоростью (rate). 3) Каждый запрос забирает один токен. 4) Если токенов нет — запрос отклоняется или ставится в очередь. Преимущество: позволяет «всплески» (bursts) — если корзина полная, клиент может отправить несколько запросов подряд. Параметры: rate (токены/сек) и burst (макс. ёмкость). Используется в AWS API Gateway, Nginx, Stripe API.',
  },
  {
    id: 'sd-rate-limiting-003',
    block: 'sd',
    topic: 'rate-limiting',
    topicLabel: 'Rate Limiting и защита API',
    difficulty: 'junior',
    type: 'quiz',
    question: 'Какой HTTP-код возвращается при превышении лимита запросов?',
    options: [
      '403 Forbidden',
      '429 Too Many Requests',
      '503 Service Unavailable',
      '408 Request Timeout',
    ],
    correctIndex: 1,
    explanation:
      'HTTP 429 Too Many Requests — стандартный код ответа (RFC 6585), указывающий, что клиент отправил слишком много запросов за определённый период. Ответ обычно включает заголовок Retry-After (через сколько секунд можно повторить) и заголовки X-RateLimit-Limit (лимит), X-RateLimit-Remaining (оставшиеся запросы), X-RateLimit-Reset (время сброса). Важно отличать от 503 Service Unavailable (сервер перегружен в целом) и 403 Forbidden (доступ запрещён по другим причинам).',
  },
  {
    id: 'sd-rate-limiting-004',
    block: 'sd',
    topic: 'rate-limiting',
    topicLabel: 'Rate Limiting и защита API',
    difficulty: 'junior',
    type: 'quiz',
    question:
      'Какой компонент инфраструктуры обычно отвечает за rate limiting в микросервисной архитектуре?',
    options: [
      'Каждый микросервис реализует свой rate limiter',
      'API Gateway — единая точка входа, где централизованно применяются политики rate limiting',
      'База данных ограничивает количество запросов к себе',
      'CDN выполняет rate limiting для всех типов запросов',
    ],
    correctIndex: 1,
    explanation:
      'API Gateway — стандартное место для централизованного rate limiting. Он является единой точкой входа для всех внешних запросов и может применять различные политики: глобальные лимиты, лимиты по пользователю, по API-ключу, по IP, по endpoint. Примеры: Kong, AWS API Gateway, Apigee, Envoy. Однако rate limiting может применяться и на других уровнях: load balancer (L4), CDN (для статики), сервис (для специфичной логики), middleware.',
  },
  {
    id: 'sd-rate-limiting-005',
    block: 'sd',
    topic: 'rate-limiting',
    topicLabel: 'Rate Limiting и защита API',
    difficulty: 'junior',
    type: 'open',
    question:
      'Объясните разницу между rate limiting на основе IP-адреса и на основе пользователя (API-ключа). Какие у каждого подхода плюсы и минусы?',
    sampleAnswer:
      'IP-based rate limiting: лимит привязан к IP-адресу клиента. Плюсы: работает без аутентификации, простая реализация, защищает от анонимных атак. Минусы: пользователи за одним NAT/прокси (корпоративные сети, VPN) делят один IP — легитимные запросы блокируются; злоумышленник может использовать множество IP (ботнет, ротация прокси). User-based (API key) rate limiting: лимит привязан к аутентифицированному пользователю или API-ключу. Плюсы: точный контроль, разные лимиты для разных тарифных планов, не зависит от IP. Минусы: не работает для неаутентифицированных запросов (login, register), злоумышленник может создать много аккаунтов. Рекомендация: использовать оба — IP-based для грубой защиты + user-based для точного контроля.',
    explanation:
      'На практике применяется многоуровневый rate limiting: глобальный лимит (общая пропускная способность), IP-based (анти-DDoS), user-based (тарифные планы), endpoint-based (дорогие операции лимитируются строже). GitHub API: 60 req/hour для неаутентифицированных, 5000 req/hour для аутентифицированных.',
  },
  {
    id: 'sd-rate-limiting-006',
    block: 'sd',
    topic: 'rate-limiting',
    topicLabel: 'Rate Limiting и защита API',
    difficulty: 'junior',
    type: 'open',
    question:
      'Что такое throttling (троттлинг)? Чем он отличается от rate limiting?',
    sampleAnswer:
      'Rate limiting — жёсткое ограничение: при превышении лимита запрос отклоняется (HTTP 429). Throttling — более мягкий подход: замедление обработки запросов вместо полного отклонения. Стратегии throttling: 1) Задержка (delay) — запрос ставится в очередь и обрабатывается позже. 2) Деградация (degradation) — при высокой нагрузке отключаются некоторые функции (рекомендации, персонализация), сохраняя core functionality. 3) Приоритизация — критические запросы обрабатываются первыми, некритические — откладываются. На практике термины часто используются взаимозаменяемо, но throttling подразумевает более гибкое управление нагрузкой, а rate limiting — строгое ограничение.',
    explanation:
      'Throttling — важная стратегия graceful degradation. Amazon использует throttling для защиты downstream-сервисов: при перегрузке сервиса рекомендаций главная страница показывает статичный контент вместо персонализированного. Пользователь получает ответ, но с ограниченной функциональностью.',
  },
  {
    id: 'sd-rate-limiting-007',
    block: 'sd',
    topic: 'rate-limiting',
    topicLabel: 'Rate Limiting и защита API',
    difficulty: 'middle',
    type: 'quiz',
    question:
      'Чем алгоритм Leaky Bucket отличается от Token Bucket?',
    options: [
      'Leaky Bucket обрабатывает запросы с фиксированной скоростью (как вода из дырявого ведра), сглаживая всплески; Token Bucket позволяет burst-ы до ёмкости корзины',
      'Leaky Bucket работает только с UDP-трафиком, Token Bucket — с TCP',
      'Leaky Bucket быстрее Token Bucket на порядок',
      'Они идентичны по принципу работы, различаются только названием',
    ],
    correctIndex: 0,
    explanation:
      'Leaky Bucket: запросы помещаются в «ведро» (очередь) фиксированного размера. Из ведра запросы «вытекают» (обрабатываются) с постоянной скоростью. Если ведро полное — новые запросы отбрасываются. Результат: ровный выходной поток, burst-ы сглаживаются. Token Bucket: токены добавляются с фиксированной скоростью. Запрос потребляет токен. Если корзина полная — клиент может отправить burst. Результат: средняя скорость ограничена, но краткосрочные всплески допускаются. Leaky Bucket — строгий (ровная скорость), Token Bucket — гибкий (burst + средний rate).',
  },
  {
    id: 'sd-rate-limiting-008',
    block: 'sd',
    topic: 'rate-limiting',
    topicLabel: 'Rate Limiting и защита API',
    difficulty: 'middle',
    type: 'quiz',
    question:
      'Какую проблему алгоритма Fixed Window решает Sliding Window?',
    options: [
      'Fixed Window потребляет слишком много памяти',
      'Fixed Window имеет проблему «boundary burst»: на стыке двух окон клиент может отправить двойной лимит запросов; Sliding Window устраняет это, учитывая запросы в скользящем временном интервале',
      'Fixed Window не поддерживает IP-based rate limiting',
      'Fixed Window не работает в распределённых системах',
    ],
    correctIndex: 1,
    explanation:
      'Fixed Window: время делится на окна фиксированного размера (например, 1 минута). Счётчик запросов сбрасывается в начале каждого окна. Проблема: если лимит 100 req/min, клиент может отправить 100 запросов в конце одного окна и 100 в начале следующего — 200 запросов за 2 секунды. Sliding Window Log: хранит timestamp каждого запроса, считает запросы за скользящий интервал. Точный, но требует больше памяти. Sliding Window Counter: комбинация — взвешенное среднее между текущим и предыдущим окном на основе позиции внутри окна. Эффективный компромисс: O(1) по памяти, хорошая точность.',
  },
  {
    id: 'sd-rate-limiting-009',
    block: 'sd',
    topic: 'rate-limiting',
    topicLabel: 'Rate Limiting и защита API',
    difficulty: 'middle',
    type: 'quiz',
    question:
      'Какая главная сложность при реализации распределённого rate limiting?',
    options: [
      'Выбор алгоритма rate limiting',
      'Синхронизация счётчиков запросов между несколькими экземплярами сервиса: race conditions, задержка синхронизации, точность подсчёта',
      'Генерация уникальных API-ключей для каждого клиента',
      'Шифрование счётчиков для безопасности',
    ],
    correctIndex: 1,
    explanation:
      'В распределённой системе запросы одного клиента попадают на разные экземпляры сервиса (через load balancer). Каждый экземпляр должен знать общее количество запросов клиента. Подходы: 1) Централизованное хранилище (Redis) — все экземпляры читают/пишут счётчик в Redis. Проблемы: race condition (MULTI/EXEC или Lua-скрипт для атомарности), latency Redis, единая точка отказа. 2) Sticky sessions — запросы одного клиента всегда на одном экземпляре. Проблема: неравномерная нагрузка. 3) Локальный rate limiting с уменьшенным лимитом (global_limit / num_instances). Проблема: неточно при неравномерном распределении.',
  },
  {
    id: 'sd-rate-limiting-010',
    block: 'sd',
    topic: 'rate-limiting',
    topicLabel: 'Rate Limiting и защита API',
    difficulty: 'middle',
    type: 'quiz',
    question: 'Что такое WAF (Web Application Firewall)?',
    options: [
      'Инструмент для мониторинга производительности веб-приложений',
      'Защитный фильтр на уровне приложения (L7), анализирующий HTTP-трафик и блокирующий вредоносные запросы: SQL injection, XSS, CSRF и другие атаки OWASP Top 10',
      'Аппаратный файрволл для защиты дата-центра',
      'Средство шифрования трафика между клиентом и сервером',
    ],
    correctIndex: 1,
    explanation:
      'WAF (Web Application Firewall) работает на уровне приложения (L7) и анализирует содержимое HTTP-запросов. Функции: блокировка SQL injection, XSS, CSRF, path traversal, bot detection, rate limiting, geo-blocking, IP blacklisting. WAF может работать в режимах: detect (логирование) и prevent (блокировка). Примеры: AWS WAF, Cloudflare WAF, ModSecurity (open source). WAF дополняет rate limiting: rate limiter ограничивает количество запросов, WAF анализирует содержимое запросов.',
  },
  {
    id: 'sd-rate-limiting-011',
    block: 'sd',
    topic: 'rate-limiting',
    topicLabel: 'Rate Limiting и защита API',
    difficulty: 'middle',
    type: 'quiz',
    question: 'Что такое backpressure и как он связан с rate limiting?',
    options: [
      'Механизм сжатия данных для уменьшения нагрузки на сеть',
      'Механизм, при котором перегруженный потребитель сигнализирует продюсеру о необходимости снизить скорость отправки, предотвращая каскадные сбои',
      'Метод приоритизации запросов по важности',
      'Стратегия кэширования ответов при высокой нагрузке',
    ],
    correctIndex: 1,
    explanation:
      'Backpressure — механизм обратной связи в системах «продюсер-потребитель». Когда потребитель не успевает обрабатывать данные, он сообщает об этом продюсеру, который замедляет отправку. Стратегии: 1) Drop — отбросить лишние данные. 2) Buffer — буферизовать (ограниченно). 3) Signal — сообщить продюсеру (TCP flow control, Reactive Streams). Rate limiting — частный случай backpressure на уровне API: «ты отправляешь слишком быстро — подожди» (HTTP 429 + Retry-After). В Kafka backpressure реализуется через consumer lag: если consumer отстаёт, данные накапливаются в партиции.',
  },
  {
    id: 'sd-rate-limiting-012',
    block: 'sd',
    topic: 'rate-limiting',
    topicLabel: 'Rate Limiting и защита API',
    difficulty: 'middle',
    type: 'open',
    question:
      'Как реализовать распределённый rate limiter на базе Redis? Опишите алгоритм и обеспечение атомарности.',
    sampleAnswer:
      'Реализация Token Bucket в Redis: Ключ: rate_limit:{client_id}. Хранит: количество оставшихся токенов и timestamp последнего пополнения. Алгоритм (Lua-скрипт для атомарности): 1) Получить текущие токены и last_refill_time. 2) Рассчитать, сколько токенов добавить: elapsed_time * rate. 3) Обновить количество токенов (не более max_tokens). 4) Если tokens >= 1: уменьшить на 1, вернуть «разрешено». 5) Иначе: вернуть «отклонено» + время до следующего токена. Lua-скрипт выполняется атомарно в Redis (single-threaded). Альтернатива: Sliding Window Counter — два ключа (текущее и предыдущее окно) с INCR и EXPIRE. Sliding Window Log — sorted set с timestamp запросов и ZRANGEBYSCORE. Важно: установить TTL на ключи для автоочистки, мониторить latency Redis, иметь fallback при недоступности Redis (fail-open или fail-closed).',
    explanation:
      'Redis — стандартный выбор для распределённого rate limiting благодаря скорости (sub-millisecond), атомарности (Lua-скрипты, MULTI/EXEC) и поддержке TTL. Stripe, GitHub, Cloudflare используют Redis-based rate limiting. Библиотеки: rate-limiter-flexible (Node.js), python-ratelimiter, bucket4j (Java).',
  },
  {
    id: 'sd-rate-limiting-013',
    block: 'sd',
    topic: 'rate-limiting',
    topicLabel: 'Rate Limiting и защита API',
    difficulty: 'middle',
    type: 'open',
    question:
      'Опишите многоуровневую стратегию защиты API. На каких уровнях применяется rate limiting и какие дополнительные механизмы защиты используются?',
    sampleAnswer:
      'Уровни защиты: 1) Edge/CDN (Cloudflare, AWS CloudFront): DDoS protection (L3/L4), geo-blocking, IP reputation, WAF (L7 фильтрация), базовый rate limiting. 2) Load Balancer: connection rate limiting, SSL termination, health checks. 3) API Gateway: rate limiting по API-ключу/пользователю/endpoint, аутентификация (JWT, OAuth), request validation, throttling. 4) Application: бизнес-логика rate limiting (например, 3 попытки входа), input validation, authorization. 5) Database: connection pooling, query timeout, read replicas. Дополнительные механизмы: CAPTCHA при подозрительной активности, IP blacklisting (автоматический и ручной), request signing (HMAC), abuse detection (ML-based аномалии), circuit breaker для защиты downstream. Каждый уровень обеспечивает defense-in-depth.',
    explanation:
      'Defense-in-depth — ключевой принцип безопасности. Ни один уровень не является достаточным сам по себе. DDoS на уровне CDN + rate limiting на API Gateway + business logic rate limiting + WAF = комплексная защита. Важно: rate limiting должен быть graceful — клиент должен получить понятный ответ с Retry-After.',
  },
  {
    id: 'sd-rate-limiting-014',
    block: 'sd',
    topic: 'rate-limiting',
    topicLabel: 'Rate Limiting и защита API',
    difficulty: 'senior',
    type: 'quiz',
    question:
      'Какой алгоритм rate limiting лучше всего подходит для сценария, где нужно гарантировать ровный поток запросов без burst-ов?',
    options: [
      'Token Bucket — позволяет burst-ы до ёмкости корзины',
      'Leaky Bucket — обрабатывает запросы с фиксированной скоростью, полностью сглаживая всплески',
      'Fixed Window Counter — самый простой, но с проблемой boundary burst',
      'Sliding Window Log — точный, но потребляет много памяти',
    ],
    correctIndex: 1,
    explanation:
      'Leaky Bucket гарантирует ровный выходной поток: запросы ставятся в очередь и обрабатываются с постоянной скоростью, как вода из дырявого ведра. Это идеально для сценариев, где downstream-система чувствительна к burst-ам: оплата через платёжный шлюз (фиксированный TPS), вызовы к стороннему API с жёстким лимитом, запись в БД с ограниченной пропускной способностью. Token Bucket, напротив, специально допускает burst-ы и подходит для API, где краткосрочные всплески допустимы.',
  },
  {
    id: 'sd-rate-limiting-015',
    block: 'sd',
    topic: 'rate-limiting',
    topicLabel: 'Rate Limiting и защита API',
    difficulty: 'senior',
    type: 'quiz',
    question:
      'Что такое adaptive rate limiting и чем он отличается от статического?',
    options: [
      'Adaptive rate limiting шифрует запросы адаптивно к нагрузке',
      'Adaptive rate limiting динамически изменяет лимиты на основе текущей нагрузки, здоровья системы и метрик (CPU, latency, error rate), вместо использования фиксированных пороговых значений',
      'Adaptive rate limiting применяется только к мобильным клиентам',
      'Adaptive rate limiting использует машинное обучение для предсказания атак',
    ],
    correctIndex: 1,
    explanation:
      'Adaptive (динамический) rate limiting автоматически корректирует лимиты на основе текущего состояния системы. Если error rate растёт или latency увеличивается — лимиты снижаются. Если система здорова — лимиты повышаются. Реализации: Netflix Concurrency Limits (на основе TCP congestion control алгоритмов — Vegas, Gradient), Envoy adaptive concurrency filter, AWS Auto Scaling. Это лучше статического rate limiting, потому что лимиты адаптируются к реальной ёмкости системы, которая меняется в зависимости от нагрузки, деплоев, инцидентов.',
  },
  {
    id: 'sd-rate-limiting-016',
    block: 'sd',
    topic: 'rate-limiting',
    topicLabel: 'Rate Limiting и защита API',
    difficulty: 'senior',
    type: 'quiz',
    question:
      'Как защититься от DDoS-атаки на уровне приложения (L7 DDoS)?',
    options: [
      'Достаточно увеличить bandwidth сервера',
      'Комбинация: CDN с DDoS mitigation (Cloudflare, AWS Shield), WAF с ML-based bot detection, rate limiting, CAPTCHA для подозрительных запросов, геоблокировка, анализ поведенческих паттернов',
      'Полное отключение API на время атаки',
      'Перевод всех endpoint-ов на HTTPS решает проблему DDoS',
    ],
    correctIndex: 1,
    explanation:
      'L7 DDoS (application-layer) — наиболее сложный тип атаки, имитирующий легитимный трафик. Стратегии защиты: 1) CDN/Edge: Cloudflare, AWS Shield Advanced — анализ трафика, фильтрация на edge. 2) WAF: правила для OWASP Top 10, custom rules, ML-based anomaly detection. 3) Rate limiting: многоуровневый (по IP, по user, по endpoint). 4) Bot detection: fingerprinting (JA3, device), CAPTCHA (reCAPTCHA v3 — невидимая), JavaScript challenge. 5) Анализ поведения: аномальные паттерны (слишком быстрая навигация, отсутствие cookies/JS). 6) Auto-scaling: масштабирование для поглощения атаки (дорого, но может быть эффективно).',
  },
  {
    id: 'sd-rate-limiting-017',
    block: 'sd',
    topic: 'rate-limiting',
    topicLabel: 'Rate Limiting и защита API',
    difficulty: 'senior',
    type: 'open',
    question:
      'Спроектируйте систему rate limiting для API, обслуживающего 10 миллионов пользователей. Опишите архитектуру, выбор алгоритма, хранилище и обработку граничных случаев.',
    sampleAnswer:
      'Архитектура: API Gateway (Kong/Envoy) с Redis-кластером как хранилищем счётчиков. Алгоритм: Sliding Window Counter — баланс точности и эффективности. Два Redis-ключа на клиента: текущее и предыдущее окно, взвешенное среднее. Хранилище: Redis Cluster (3+ master, 3+ replica) для горизонтального масштабирования. Sharding по client_id. Estimated memory: 10M пользователей × 100 байт = ~1GB. Лимиты: глобальный (10K RPS), по тарифу (free: 100/min, pro: 1000/min, enterprise: 10000/min), по endpoint (search: 10/min, write: 100/min). Граничные случаи: 1) Redis недоступен — fail-open (пропускать запросы) с локальным in-memory rate limiting. 2) Race condition — Lua-скрипт для атомарности. 3) Clock skew — использовать timestamp Redis, не клиента. 4) Многоуровневый fallback: edge (Cloudflare) → API Gateway (Redis-based) → application (in-memory). Ответ клиенту: HTTP 429 + Retry-After + X-RateLimit-* headers.',
    explanation:
      'При проектировании rate limiting для масштаба важно учитывать: latency Redis-вызовов (pipeline/batch), memory footprint, поведение при partial failures, мониторинг (dashboard с rate limit hits, blocked requests, Redis latency), alerting. Stripe и GitHub публикуют подробную документацию по своим rate limiting стратегиям.',
  },
  {
    id: 'sd-rate-limiting-018',
    block: 'sd',
    topic: 'rate-limiting',
    topicLabel: 'Rate Limiting и защита API',
    difficulty: 'senior',
    type: 'open',
    question:
      'Что такое circuit breaker pattern и как он дополняет rate limiting для обеспечения устойчивости системы?',
    sampleAnswer:
      'Circuit Breaker — паттерн, предотвращающий каскадные сбои при отказе downstream-сервиса. Три состояния: 1) Closed (нормальное) — запросы проходят; при накоплении ошибок (threshold, например 50% за 10 сек) переход в Open. 2) Open — все запросы немедленно отклоняются (fail-fast) без обращения к downstream. Через timeout переход в Half-Open. 3) Half-Open — пропускается ограниченное число пробных запросов; если успешны — Closed; если ошибки — обратно в Open. Дополняет rate limiting: rate limiting защищает сервис от перегрузки входящим трафиком, circuit breaker — от каскадного сбоя при отказе downstream. Пример: если payment service не отвечает, circuit breaker в order service быстро отклоняет запросы к нему, а не ждёт timeout. Инструменты: Resilience4j (Java), Polly (.NET), Hystrix (deprecated), Envoy circuit breaker.',
    explanation:
      'Rate limiting и circuit breaker — два ключевых паттерна устойчивости. Rate limiting — входящая защита (inbound), circuit breaker — исходящая защита (outbound). Вместе с retry (с exponential backoff), timeout и bulkhead (изоляция ресурсов) они формируют полный набор паттернов resilience.',
  },
  {
    id: 'sd-rate-limiting-019',
    block: 'sd',
    topic: 'rate-limiting',
    topicLabel: 'Rate Limiting и защита API',
    difficulty: 'senior',
    type: 'open',
    question:
      'Сравните подходы fail-open и fail-closed при недоступности rate limiter (например, при падении Redis). Когда какой подход предпочтительнее?',
    sampleAnswer:
      'Fail-open: при недоступности rate limiter запросы пропускаются без ограничений. Плюсы: сервис остаётся доступным, пользователи не теряют функциональность. Минусы: система уязвима к перегрузке и злоупотреблениям. Подходит для: критически важных API, где доступность важнее защиты (checkout, платежи). Fail-closed: при недоступности rate limiter все запросы отклоняются. Плюсы: максимальная защита от перегрузки. Минусы: полная недоступность сервиса из-за сбоя вспомогательного компонента — rate limiter становится single point of failure. Подходит для: систем с жёсткими требованиями безопасности, где перегрузка опаснее недоступности. Гибридный подход: fail-open с локальным in-memory fallback rate limiter (менее точный, но лучше, чем ничего). Локальный лимит = global_limit / num_instances. Дополнительно: мониторинг и алертинг при переключении на fallback.',
    explanation:
      'Решение fail-open vs fail-closed — принципиальное архитектурное решение. Большинство production-систем используют fail-open с fallback, потому что каскадный сбой из-за rate limiter недопустим. Netflix, Amazon отдают приоритет доступности (availability) перед точностью ограничений.',
  },
  {
    id: 'sd-rate-limiting-020',
    block: 'sd',
    topic: 'rate-limiting',
    topicLabel: 'Rate Limiting и защита API',
    difficulty: 'middle',
    type: 'quiz',
    question:
      'Какие HTTP-заголовки обычно используются для информирования клиента о лимитах rate limiting?',
    options: [
      'Content-Type, Content-Length, Cache-Control',
      'X-RateLimit-Limit (максимум запросов), X-RateLimit-Remaining (осталось), X-RateLimit-Reset (время сброса), Retry-After (при 429)',
      'Authorization, X-API-Key, X-Request-ID',
      'Accept-Encoding, Transfer-Encoding, Vary',
    ],
    correctIndex: 1,
    explanation:
      'Стандартные заголовки rate limiting: X-RateLimit-Limit — максимальное количество запросов за период. X-RateLimit-Remaining — сколько запросов осталось в текущем окне. X-RateLimit-Reset — timestamp (Unix epoch) или количество секунд до сброса лимита. Retry-After — включается в ответ 429 (Too Many Requests), указывает, через сколько секунд можно повторить запрос. IETF разрабатывает стандарт RateLimit header fields (draft-ietf-httpapi-ratelimit-headers) для унификации. Эти заголовки критически важны для клиентов: они позволяют реализовать graceful rate limit handling вместо бессмысленных retry.',
  },
];
