import type { Question } from '../types';

export const networkingQuestions: Question[] = [
  {
    id: 'sd-networking-001',
    block: 'sd',
    topic: 'networking',
    topicLabel: 'Сети и протоколы',
    difficulty: 'junior',
    type: 'quiz',
    question: 'Что происходит при DNS-резолвинге доменного имени?',
    options: [
      'Браузер отправляет запрос напрямую на веб-сервер по имени домена',
      'Иерархическая система DNS-серверов преобразует доменное имя в IP-адрес: локальный кэш → рекурсивный резолвер → root → TLD → authoritative DNS',
      'Доменное имя шифруется и используется как ключ маршрутизации в сети',
      'DNS-сервер загружает HTML-страницу и кэширует её для последующих запросов',
    ],
    correctIndex: 1,
    explanation:
      'DNS (Domain Name System) — иерархическая система, преобразующая доменные имена в IP-адреса. Процесс: 1) Браузер проверяет локальный кэш. 2) Запрос к рекурсивному DNS-резолверу (обычно провайдера). 3) Резолвер обращается к root DNS серверам (.), те направляют к TLD серверам (.com, .ru). 4) TLD серверы направляют к authoritative DNS серверу домена. 5) Authoritative сервер возвращает IP-адрес. Каждый уровень кэширует результат с учётом TTL.',
  },
  {
    id: 'sd-networking-002',
    block: 'sd',
    topic: 'networking',
    topicLabel: 'Сети и протоколы',
    difficulty: 'junior',
    type: 'quiz',
    question: 'В чём основное различие между TCP и UDP?',
    options: [
      'TCP работает только в локальной сети, UDP — в глобальной',
      'TCP обеспечивает надёжную, упорядоченную доставку данных с установлением соединения, UDP — ненадёжную доставку без установления соединения, но с меньшей задержкой',
      'TCP быстрее UDP во всех сценариях использования',
      'UDP поддерживает шифрование по умолчанию, TCP — нет',
    ],
    correctIndex: 1,
    explanation:
      'TCP (Transmission Control Protocol): устанавливает соединение (3-way handshake), гарантирует доставку (retransmission), порядок пакетов (sequencing), контроль потока (flow control). Используется: HTTP, FTP, email. UDP (User Datagram Protocol): без установления соединения, не гарантирует доставку и порядок, минимальные накладные расходы. Используется: DNS, видео-стриминг, онлайн-игры, VoIP. UDP быстрее за счёт отсутствия overhead на установку соединения и подтверждения.',
  },
  {
    id: 'sd-networking-003',
    block: 'sd',
    topic: 'networking',
    topicLabel: 'Сети и протоколы',
    difficulty: 'junior',
    type: 'quiz',
    question: 'Что такое WebSocket и для чего он используется?',
    options: [
      'Протокол для передачи файлов между серверами',
      'Протокол полнодуплексной двунаправленной связи поверх TCP, позволяющий серверу и клиенту обмениваться данными в реальном времени',
      'Расширение HTTP для увеличения размера загружаемых файлов',
      'Механизм кэширования статических ресурсов в браузере',
    ],
    correctIndex: 1,
    explanation:
      'WebSocket — протокол, обеспечивающий постоянное двунаправленное соединение между клиентом и сервером. Инициируется HTTP Upgrade request, после чего соединение переходит на WebSocket-протокол. Преимущества: реальное время (низкая задержка), push от сервера (не нужен polling), меньший overhead (нет HTTP-заголовков в каждом сообщении). Используется: чаты, уведомления, live-данные (биржевые котировки), совместное редактирование, онлайн-игры.',
  },
  {
    id: 'sd-networking-004',
    block: 'sd',
    topic: 'networking',
    topicLabel: 'Сети и протоколы',
    difficulty: 'junior',
    type: 'quiz',
    question: 'Что такое reverse proxy?',
    options: [
      'Прокси, через который клиент анонимно подключается к серверам в интернете',
      'Сервер-посредник, стоящий перед backend-серверами, который принимает запросы от клиентов, перенаправляет их на backend и возвращает ответы',
      'Механизм инвертирования порядка пакетов для ускорения передачи',
      'Протокол, позволяющий серверу инициировать соединение с клиентом',
    ],
    correctIndex: 1,
    explanation:
      'Reverse proxy — сервер, стоящий между клиентами и backend-серверами. Клиент обращается к reverse proxy, который перенаправляет запрос на один из backend-серверов. Функции: балансировка нагрузки, SSL termination, кэширование, сжатие, защита от DDoS, сокрытие архитектуры backend. Примеры: Nginx, HAProxy, Envoy, Traefik. В отличие от forward proxy (который стоит на стороне клиента), reverse proxy стоит на стороне сервера.',
  },
  {
    id: 'sd-networking-005',
    block: 'sd',
    topic: 'networking',
    topicLabel: 'Сети и протоколы',
    difficulty: 'junior',
    type: 'quiz',
    question:
      'Что такое SSL/TLS termination и зачем оно нужно?',
    options: [
      'Процесс создания SSL-сертификатов для каждого backend-сервера',
      'Расшифровка входящего HTTPS-трафика на reverse proxy или load balancer, чтобы backend-серверы работали с нешифрованным HTTP-трафиком',
      'Принудительное завершение всех SSL-соединений через определённый интервал времени',
      'Шифрование данных в базе данных с помощью TLS',
    ],
    correctIndex: 1,
    explanation:
      'SSL/TLS termination — процесс, при котором reverse proxy или load balancer расшифровывает входящий HTTPS-трафик и передаёт его backend-серверам по обычному HTTP. Преимущества: снижение нагрузки на backend (шифрование/расшифровка — CPU-интенсивная операция), централизованное управление сертификатами, упрощение конфигурации backend. Внутренний трафик может быть дополнительно защищён через mTLS (mutual TLS) в service mesh.',
  },
  {
    id: 'sd-networking-006',
    block: 'sd',
    topic: 'networking',
    topicLabel: 'Сети и протоколы',
    difficulty: 'junior',
    type: 'open',
    question:
      'Что такое keep-alive соединения в HTTP? Какую проблему они решают?',
    sampleAnswer:
      'HTTP Keep-Alive (persistent connections) — механизм, позволяющий переиспользовать одно TCP-соединение для нескольких HTTP-запросов вместо открытия нового соединения для каждого запроса. Проблема, которую решает: без keep-alive каждый HTTP-запрос требует нового TCP-соединения (3-way handshake + TLS handshake), что добавляет значительную задержку (100-300 мс). Для типичной веб-страницы с 50-100 ресурсами это неприемлемо. В HTTP/1.1 keep-alive включён по умолчанию (заголовок Connection: keep-alive). Соединение закрывается по timeout или при явном Connection: close. Ограничение HTTP/1.1: head-of-line blocking — один медленный запрос блокирует всю очередь.',
    explanation:
      'Keep-alive — фундаментальная оптимизация HTTP. В HTTP/2 концепция развилась дальше: одно соединение с мультиплексированием множества потоков (streams), полностью устраняя необходимость в нескольких TCP-соединениях к одному серверу.',
  },
  {
    id: 'sd-networking-007',
    block: 'sd',
    topic: 'networking',
    topicLabel: 'Сети и протоколы',
    difficulty: 'middle',
    type: 'quiz',
    question:
      'Какое ключевое улучшение HTTP/2 решает проблему head-of-line blocking на уровне HTTP?',
    options: [
      'Сжатие заголовков с помощью HPACK',
      'Мультиплексирование — несколько потоков (streams) в одном TCP-соединении, позволяющее передавать запросы и ответы параллельно',
      'Server Push — отправка ресурсов до того, как клиент их запросит',
      'Бинарный формат фреймов вместо текстового',
    ],
    correctIndex: 1,
    explanation:
      'HTTP/2 multiplexing — ключевое нововведение. В HTTP/1.1 запросы в одном соединении обрабатываются последовательно (HOL blocking): медленный ответ блокирует все последующие. HTTP/2 делит соединение на независимые потоки (streams), каждый из которых передаёт данные параллельно через единое TCP-соединение. Это устраняет HTTP-level HOL blocking. Однако TCP-level HOL blocking остаётся: потеря одного TCP-пакета блокирует все потоки. Эту проблему решает HTTP/3 с QUIC (поверх UDP).',
  },
  {
    id: 'sd-networking-008',
    block: 'sd',
    topic: 'networking',
    topicLabel: 'Сети и протоколы',
    difficulty: 'middle',
    type: 'quiz',
    question:
      'Что такое gRPC и какие преимущества он даёт по сравнению с REST/JSON?',
    options: [
      'Графовый API для запросов к базам данных',
      'Фреймворк удалённых вызовов процедур от Google, использующий HTTP/2 и Protocol Buffers для высокопроизводительной типизированной коммуникации между сервисами',
      'Протокол для передачи файлов большого размера',
      'JavaScript-фреймворк для создания RESTful API',
    ],
    correctIndex: 1,
    explanation:
      'gRPC — фреймворк RPC (Remote Procedure Call), созданный Google. Использует HTTP/2 (мультиплексирование, streaming) и Protocol Buffers (бинарная сериализация). Преимущества над REST/JSON: 1) Высокая производительность — бинарный формат в 5-10x компактнее JSON. 2) Строгая типизация — schema в .proto файлах, автогенерация клиентов. 3) Streaming — unary, server-streaming, client-streaming, bidirectional. 4) Deadlines/timeouts встроены в протокол. Недостатки: сложнее отладка (бинарный формат), хуже поддержка браузерами (нужен gRPC-Web), менее читаем для человека.',
  },
  {
    id: 'sd-networking-009',
    block: 'sd',
    topic: 'networking',
    topicLabel: 'Сети и протоколы',
    difficulty: 'middle',
    type: 'quiz',
    question:
      'Как работает TLS handshake при установке HTTPS-соединения?',
    options: [
      'Клиент отправляет пароль серверу, сервер проверяет его по базе данных',
      'Клиент и сервер обмениваются поддерживаемыми шифрами и сертификатами, генерируют общий сеансовый ключ через асимметричное шифрование, затем переходят на симметричное шифрование',
      'Сервер отправляет клиенту предварительно зашифрованный ключ по отдельному каналу',
      'DNS-сервер генерирует ключ шифрования и передаёт его обеим сторонам',
    ],
    correctIndex: 1,
    explanation:
      'TLS handshake (упрощённо для TLS 1.3): 1) ClientHello — клиент отправляет поддерживаемые шифры и версии TLS. 2) ServerHello — сервер выбирает шифр, отправляет свой сертификат (содержащий публичный ключ). 3) Клиент проверяет сертификат через цепочку доверия (CA). 4) Key Exchange — генерация общего секрета через ECDHE (Elliptic Curve Diffie-Hellman). 5) Переход на симметричное шифрование (AES) с сеансовым ключом. TLS 1.3 занимает 1 RTT (round-trip time) вместо 2 RTT в TLS 1.2. 0-RTT возможен при повторном соединении.',
  },
  {
    id: 'sd-networking-010',
    block: 'sd',
    topic: 'networking',
    topicLabel: 'Сети и протоколы',
    difficulty: 'middle',
    type: 'quiz',
    question:
      'Что такое connection pooling и зачем он нужен?',
    options: [
      'Механизм создания новых соединений для каждого запроса',
      'Повторное использование заранее установленных соединений из пула вместо создания нового соединения для каждого запроса, что снижает overhead на установку соединений',
      'Метод балансировки нагрузки между несколькими серверами',
      'Шифрование нескольких соединений одним ключом для экономии ресурсов',
    ],
    correctIndex: 1,
    explanation:
      'Connection pooling — паттерн, при котором приложение поддерживает пул предварительно установленных соединений (к БД, к другим сервисам) и переиспользует их вместо создания нового для каждого запроса. Установка TCP + TLS соединения стоит 1-3 RTT (50-200 мс). Для БД: установка соединения с PostgreSQL включает аутентификацию, согласование параметров и может занимать 50-100 мс. При 1000 RPS это неприемлемо. Пул: min/max connections, idle timeout, max lifetime. Инструменты: PgBouncer (PostgreSQL), ProxySQL (MySQL), HikariCP (Java).',
  },
  {
    id: 'sd-networking-011',
    block: 'sd',
    topic: 'networking',
    topicLabel: 'Сети и протоколы',
    difficulty: 'middle',
    type: 'quiz',
    question:
      'Какую проблему HTTP/2 решает HTTP/3 (QUIC)?',
    options: [
      'Отсутствие сжатия заголовков в HTTP/2',
      'TCP head-of-line blocking: потеря одного TCP-пакета блокирует все мультиплексированные потоки, QUIC решает это, работая поверх UDP с независимыми потоками',
      'Невозможность использования HTTP/2 без TLS',
      'Ограничение на количество одновременных соединений в HTTP/2',
    ],
    correctIndex: 1,
    explanation:
      'HTTP/2 мультиплексирует потоки внутри одного TCP-соединения. Если TCP-пакет потерян, ВСЕ потоки блокируются до его ретрансмиссии (TCP HOL blocking). HTTP/3 использует QUIC — транспортный протокол поверх UDP, разработанный Google. Каждый QUIC-поток независим: потеря пакета в одном потоке не блокирует другие. Дополнительные преимущества: 0-RTT connection establishment (при повторном подключении), встроенный TLS 1.3, миграция соединений при смене IP (connection ID вместо IP:port). Поддерживается Chrome, Firefox, Nginx, Cloudflare.',
  },
  {
    id: 'sd-networking-012',
    block: 'sd',
    topic: 'networking',
    topicLabel: 'Сети и протоколы',
    difficulty: 'middle',
    type: 'open',
    question:
      'Сравните REST, gRPC и GraphQL. Когда следует использовать каждый подход?',
    sampleAnswer:
      'REST: ресурсо-ориентированный, использует HTTP-методы (GET/POST/PUT/DELETE), JSON. Прост, широко поддерживается, хорош для публичных API и CRUD-операций. Недостатки: over-fetching/under-fetching, N+1 запросов. gRPC: RPC-ориентированный, HTTP/2 + Protobuf. Высокая производительность, строгий контракт, streaming. Идеален для межсервисной коммуникации (service-to-service), low-latency систем, IoT. Недостатки: сложнее для браузеров, менее читаем. GraphQL: query language для API, клиент указывает нужные поля. Решает проблему over/under-fetching, один endpoint. Хорош для мобильных клиентов с разными потребностями, BFF (Backend for Frontend). Недостатки: сложность кэширования (нет URL-based кэша), возможность тяжёлых запросов (N+1 на стороне сервера), сложнее мониторинг. Рекомендации: публичный API → REST, inter-service → gRPC, клиенты с разными потребностями → GraphQL.',
    explanation:
      'Выбор протокола — одно из ключевых архитектурных решений. Многие компании используют комбинацию: REST для public API, gRPC для внутренних сервисов, GraphQL как BFF-слой. Важно учитывать экосистему, tooling и компетенции команды.',
  },
  {
    id: 'sd-networking-013',
    block: 'sd',
    topic: 'networking',
    topicLabel: 'Сети и протоколы',
    difficulty: 'middle',
    type: 'open',
    question:
      'Объясните, что такое DNS-based load balancing. Какие у него ограничения?',
    sampleAnswer:
      'DNS-based load balancing — метод распределения нагрузки через DNS: один домен разрешается в несколько IP-адресов (Round Robin DNS). DNS-сервер возвращает разные IP в ответ на запросы, распределяя клиентов между серверами. Варианты: Round Robin (циклически), Weighted (с весами), Geo-based (по географии клиента), Latency-based (по задержке). Ограничения: 1) Кэширование DNS — клиенты и промежуточные резолверы кэшируют записи; изменения вступают в силу не сразу (TTL). 2) Нет health checks — DNS не знает, жив ли сервер. 3) Грубая гранулярность — на уровне IP, не на уровне запроса. 4) Неравномерность — один резолвер кэширует один IP для всех своих клиентов. Решение: комбинация DNS-based + L4/L7 load balancer (AWS Route 53 + ALB).',
    explanation:
      'DNS-based load balancing — первый уровень распределения нагрузки. AWS Route 53, Cloudflare DNS, Google Cloud DNS предоставляют advanced routing policies (geo, latency, failover). Но для быстрого failover и fine-grained балансировки необходим дополнительный уровень — L4/L7 load balancer.',
  },
  {
    id: 'sd-networking-014',
    block: 'sd',
    topic: 'networking',
    topicLabel: 'Сети и протоколы',
    difficulty: 'senior',
    type: 'quiz',
    question:
      'Что такое Service Mesh и какую роль в нём играет sidecar proxy?',
    options: [
      'Service Mesh — это фреймворк для мониторинга, а sidecar — агент сбора метрик',
      'Service Mesh — инфраструктурный слой для управления межсервисной коммуникацией; sidecar proxy (Envoy) перехватывает весь трафик сервиса, обеспечивая mTLS, retry, circuit breaking, observability без изменения кода приложения',
      'Service Mesh — это DNS-сервер для микросервисов, sidecar — клиент DNS',
      'Service Mesh — это API Gateway для внутренних сервисов, sidecar — его локальная копия',
    ],
    correctIndex: 1,
    explanation:
      'Service Mesh (Istio, Linkerd, Consul Connect) — инфраструктурный слой, который управляет всей межсервисной коммуникацией. Sidecar proxy (обычно Envoy) развёртывается рядом с каждым сервисом и прозрачно перехватывает весь входящий и исходящий трафик. Функции: mTLS (шифрование между сервисами), service discovery, load balancing (L7), circuit breaking, retry/timeout, rate limiting, distributed tracing, canary deployments, traffic splitting. Control plane (Istiod) управляет конфигурацией sidecar-ов. Data plane — это сеть sidecar proxy.',
  },
  {
    id: 'sd-networking-015',
    block: 'sd',
    topic: 'networking',
    topicLabel: 'Сети и протоколы',
    difficulty: 'senior',
    type: 'quiz',
    question:
      'Какой механизм QUIC позволяет сохранять соединение при смене сети (например, с Wi-Fi на мобильную)?',
    options: [
      'TCP Fast Open',
      'Connection ID — QUIC идентифицирует соединение по уникальному ID вместо пары IP:port, что позволяет мигрировать соединение при смене IP-адреса',
      'Multipath TCP',
      'DNS rebinding',
    ],
    correctIndex: 1,
    explanation:
      'В TCP соединение идентифицируется четвёркой (source IP, source port, dest IP, dest port). При смене сети (Wi-Fi → 4G) меняется IP, и TCP-соединение разрывается. QUIC идентифицирует соединение через Connection ID — 64-битный идентификатор, не привязанный к IP. При смене IP клиент продолжает отправлять пакеты с тем же Connection ID, и сервер распознаёт их как продолжение существующего соединения. Это критически важно для мобильных пользователей и улучшает UX при нестабильном соединении.',
  },
  {
    id: 'sd-networking-016',
    block: 'sd',
    topic: 'networking',
    topicLabel: 'Сети и протоколы',
    difficulty: 'senior',
    type: 'quiz',
    question:
      'Что такое mTLS (mutual TLS) и зачем он используется в микросервисной архитектуре?',
    options: [
      'Ускоренная версия TLS с меньшим числом round-trip',
      'Взаимная аутентификация, при которой не только сервер предъявляет сертификат клиенту, но и клиент предъявляет сертификат серверу, обеспечивая двустороннюю проверку подлинности',
      'Метод шифрования данных в базе данных с помощью TLS',
      'Протокол для мультиплексирования TLS-соединений',
    ],
    correctIndex: 1,
    explanation:
      'В обычном TLS только сервер предъявляет сертификат — клиент убеждается, что сервер тот, за кого себя выдаёт. В mTLS (mutual TLS) обе стороны предъявляют сертификаты и проверяют друг друга. В микросервисной архитектуре mTLS обеспечивает: 1) Аутентификацию сервисов (zero-trust network). 2) Шифрование всего межсервисного трафика. 3) Авторизацию на уровне сервиса (RBAC по certificate identity). Service Mesh (Istio) автоматизирует управление сертификатами и mTLS: автоматическая ротация, выдача и проверка сертификатов через sidecar proxy.',
  },
  {
    id: 'sd-networking-017',
    block: 'sd',
    topic: 'networking',
    topicLabel: 'Сети и протоколы',
    difficulty: 'senior',
    type: 'open',
    question:
      'Опишите полный путь HTTP-запроса от момента ввода URL в браузер до получения ответа. Укажите все сетевые этапы.',
    sampleAnswer:
      '1) Парсинг URL: протокол, домен, путь. 2) DNS resolution: локальный кэш → рекурсивный резолвер → root → TLD → authoritative DNS → IP-адрес. 3) TCP handshake: SYN → SYN-ACK → ACK (3-way handshake, ~1 RTT). 4) TLS handshake (для HTTPS): ClientHello → ServerHello + Certificate → Key Exchange → Finished (~1-2 RTT для TLS 1.2, ~1 RTT для TLS 1.3). 5) HTTP-запрос: отправка GET/POST с заголовками. 6) Прохождение через инфраструктуру: CDN → Load Balancer (SSL termination) → Reverse Proxy → Application Server. 7) Обработка на сервере: маршрутизация, бизнес-логика, запрос к БД/кэшу. 8) HTTP-ответ: status code, headers, body. 9) Рендеринг в браузере: парсинг HTML → CSSOM → DOM → render tree → layout → paint. 10) Загрузка дополнительных ресурсов (CSS, JS, images) — повторение с шага 2 (или из кэша/через keep-alive).',
    explanation:
      'Понимание полного пути запроса — фундаментальное знание для системного дизайна. Каждый этап может быть оптимизирован: DNS prefetch, TCP fast open, TLS 1.3, HTTP/2 multiplexing, CDN, кэширование, connection pooling, lazy loading ресурсов. Типичная задержка: DNS ~50мс, TCP ~20мс, TLS ~40мс, server processing ~100мс, total ~200-500мс.',
  },
  {
    id: 'sd-networking-018',
    block: 'sd',
    topic: 'networking',
    topicLabel: 'Сети и протоколы',
    difficulty: 'senior',
    type: 'open',
    question:
      'Как устроен Service Mesh на примере Istio? Опишите архитектуру (control plane, data plane) и основные возможности.',
    sampleAnswer:
      'Архитектура Istio: Data Plane: Envoy sidecar proxy внедряется в каждый pod (Kubernetes). Весь входящий и исходящий трафик проходит через Envoy. Envoy выполняет: L7 load balancing, circuit breaking, retry, timeout, rate limiting, сбор метрик (Prometheus), распределённый трейсинг (Jaeger), mTLS шифрование. Control Plane (Istiod): Pilot — конфигурация маршрутизации (VirtualService, DestinationRule), service discovery. Citadel — управление сертификатами, mTLS, RBAC. Galley — валидация конфигурации. Возможности: 1) Traffic management: canary releases (90/10 split), A/B testing, fault injection. 2) Security: mTLS everywhere, AuthorizationPolicy, JWT validation. 3) Observability: автоматические метрики (RED — Rate, Errors, Duration), трейсинг без изменения кода. 4) Resilience: retry, timeout, circuit breaker через конфигурацию.',
    explanation:
      'Service Mesh решает cross-cutting concerns (безопасность, observability, resilience) на уровне инфраструктуры, без изменения кода приложений. Это идеальный подход для полиглотных микросервисных систем. Однако sidecar proxy добавляет latency (~1-2мс) и потребляет ресурсы. Альтернативы: eBPF-based mesh (Cilium), proxyless gRPC mesh.',
  },
  {
    id: 'sd-networking-019',
    block: 'sd',
    topic: 'networking',
    topicLabel: 'Сети и протоколы',
    difficulty: 'senior',
    type: 'open',
    question:
      'Что такое Server-Sent Events (SSE) и чем они отличаются от WebSocket и Long Polling? Когда следует использовать каждый подход?',
    sampleAnswer:
      'Server-Sent Events (SSE): однонаправленный канал от сервера к клиенту поверх HTTP. Клиент открывает соединение, сервер отправляет события в формате text/event-stream. Автоматическое переподключение, event ID для восстановления после разрыва. Простая реализация, работает через стандартный HTTP. Long Polling: клиент отправляет HTTP-запрос, сервер «держит» его открытым до появления данных или timeout, затем клиент отправляет новый запрос. Простой, но неэффективный (overhead на каждый запрос). WebSocket: полнодуплексный, оба направления, низкий overhead после handshake, но сложнее в реализации. Рекомендации: SSE — уведомления, live feeds, дашборды (сервер → клиент). WebSocket — чаты, игры, совместное редактирование (двунаправленное). Long Polling — fallback для сред без WebSocket/SSE, простые случаи с редкими обновлениями.',
    explanation:
      'SSE часто недооценивается. Для большинства real-time сценариев, где сервер push-ит данные клиенту (уведомления, обновление цен, лента событий), SSE проще и надёжнее WebSocket: автоматическое переподключение, работа через HTTP/2, нативная поддержка браузерами (EventSource API), совместимость с прокси и CDN.',
  },
  {
    id: 'sd-networking-020',
    block: 'sd',
    topic: 'networking',
    topicLabel: 'Сети и протоколы',
    difficulty: 'middle',
    type: 'quiz',
    question:
      'Какой уровень балансировки нагрузки работает на транспортном уровне (L4) и не анализирует содержимое HTTP-запросов?',
    options: [
      'L7 load balancer (Application layer) — маршрутизирует на основе URL, заголовков, cookies',
      'L4 load balancer (Transport layer) — маршрутизирует на основе IP-адреса и TCP/UDP порта без анализа содержимого пакетов',
      'DNS load balancer — маршрутизирует на основе доменного имени',
      'L2 load balancer (Data link layer) — маршрутизирует на основе MAC-адресов',
    ],
    correctIndex: 1,
    explanation:
      'L4 load balancer работает на транспортном уровне (TCP/UDP). Он принимает решения о маршрутизации на основе IP-адресов и портов источника/назначения, не анализируя содержимое (HTTP-заголовки, URL, cookies). Преимущества: очень высокая производительность (обработка пакетов без парсинга), низкая задержка, простота. Недостатки: невозможность маршрутизации по содержимому запроса. Примеры: AWS NLB, HAProxy (L4 mode), IPVS. L7 load balancer (AWS ALB, Nginx) анализирует HTTP и может маршрутизировать по URL, заголовкам, методу.',
  },
];
