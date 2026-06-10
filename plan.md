# Product Breakdown

Project Knowledge OS should be built as a knowledge platform with a supporting execution layer. The core value is the project knowledge graph; tasks, delivery views, and Git linkage sit on top of that graph rather than replacing it.

Recommended stack for v1:

- Frontend and backend: Next.js with TypeScript
- UI: Tailwind CSS and shadcn/ui
- Data: PostgreSQL on Neon with Drizzle ORM
- Auth: Better Auth, or skip auth entirely for a personal v1 if simplicity wins
- AI: user-provided API keys through OpenRouter integration
- Visualization: React Flow
- Editing and rendering: Tiptap and react-markdown
- Hosting: Vercel

Platform rule:

- Do not pay for AI APIs from the product side; the user supplies and controls their own key.
- Store user keys encrypted.

Primary product areas:

- Project and feature management
- Idea and research capture
- Decision logs and architecture records
- Context tracking and history
- Document generation and export
- Git integration and implementation traceability
- Event timeline and state history
- AI-assisted knowledge maintenance

# Feature Hierarchy

1. Project workspace
2. Knowledge graph
3. Feature management
4. Task management
5. Idea management
6. Research management
7. Decision management
8. Context management
9. Document generation
10. Event timeline
11. Git integration
12. AI context automation

This hierarchy should inform the navigation model, data model, and delivery sequence.

# Milestones

## Milestone 1: Knowledge Foundation

Define the canonical entities, lifecycle rules, event model, and relationship schema. Establish the project graph and the metadata needed for provenance.

## Milestone 2: Knowledge Capture

Support project creation, feature modeling, idea capture, research capture, decision logs, requirement tracking, and context updates.

## Milestone 3: Knowledge Retrieval

Add search, filtering, graph traversal, and timeline views so users can move from one knowledge artifact to its related history and evidence.

## Milestone 4: Documentation and Export

Generate context.md, README.md, TODO.md, feature specs, architecture records, and test-oriented documentation from structured project knowledge.

## Milestone 5: Git and AI Integration

Link commits, branches, and pull requests to project knowledge and add AI workflows for summarization, context generation, stale context detection, and specification drafting.

# MVP Scope

The MVP should prove that project knowledge can be captured, structured, and retrieved better than fragmented markdown files, chat transcripts, and task lists.

In scope:

- Project creation and metadata
- Idea capture
- Feature and subfeature modeling
- Research notes
- Decision logs
- Context tracking
- Requirement capture
- Event history for significant changes
- Basic document generation
- Keyword search
- Repository linking
- Commit references
- Feature to commit linking
- Context.md, plan.md, todo.md, and decisions.md generation

Out of scope for MVP:

- Full Git automation
- Advanced collaboration features
- Rich analytics dashboards
- Cross-project portfolio management
- Deep semantic retrieval

# Version 1 Scope

Version 1 should turn the MVP into a dependable project memory system.

Version 1 additions:

- Stronger graph navigation
- Better document templates
- Commit linkage
- Context diffing and change history
- Improved search and filtering
- AI-assisted project and feature summaries
- Optional personal-first authentication
- Encrypted storage for user-provided AI keys
- OpenRouter-based AI requests using the user key

# Version 2 Scope

Version 2 should make the platform deeply AI-native and graph-aware.

Version 2 additions:

- Semantic retrieval across project knowledge
- AI-generated specifications
- Automated context export for AI use
- Stale context detection
- Cross-project knowledge reuse
- Relationship inference and suggestion

# Technical Architecture Plan

The architecture should separate durable knowledge storage from derived artifacts and AI-assisted workflows.

Recommended layers:

- Presentation layer for project, graph, timeline, and document views
- Application layer for orchestration, validation, and workflows
- Domain layer for projects, features, ideas, research, decisions, requirements, context, documents, commits, events, and architecture records
- Persistence layer for relational data, edges, and event history
- AI integration layer for summarization, generation, extraction, and stale-context detection
- Markdown generation layer for exports like context.md, plan.md, todo.md, and decisions.md

Important design choices:

- Treat events as the source of truth for history.
- Treat documents as derived or authored knowledge artifacts.
- Keep AI-generated content versioned and attributable.
- Store raw input alongside normalized knowledge.
- Make relationships explicit rather than inferred only at query time.
- Keep the initial implementation narrow: projects, features, tasks, ideas, research, decisions, contexts, documents, events, repositories, and commits.

# Database Strategy

Use a relational core for canonical entities and append-only event history, with graph-aware edges for traversal and traceability.

Strategy:

- Store Projects, Features, Tasks, Ideas, Research, Decisions, Contexts, Documents, Events, Repositories, Commits, and Requirements in normalized tables.
- Model relationships through explicit edge or join tables.
- Keep event records append-only.
- Version generated documents and retain source references.
- Preserve provenance metadata on every durable record.
- Store encrypted AI provider keys separately from project data.

This supports maintainability, auditability, and predictable evolution over time.

# Search Strategy

Search should support exact retrieval, filters, and meaning-based discovery.

Layers:

- Keyword search across titles, content, tags, and metadata
- Filtered search by project, feature, entity type, time, and source
- Semantic search over context, research, decisions, and documents
- Graph traversal search for related entities and provenance chains

Search should answer questions such as:

- Why was this decision made?
- What research supports this feature?
- Which commit implemented this requirement?
- What context is stale or disconnected?

# Knowledge Graph Strategy

The knowledge graph should be a first-class model for navigation, traceability, and AI retrieval.

Graph design:

- Project connects to Feature, Idea, Research, Decision, Requirement, Document, Commit, Event, and Architecture Record.
- Feature connects to subfeatures, requirements, decisions, documents, commits, events, and context.
- Idea can connect to projects, features, requirements, or research threads.
- Research connects to decisions, requirements, features, and architecture records.
- Decision connects to the context it changed and the requirements or features it influenced.
- Event connects to the entity it describes and any related source material.

The graph should support traversal from idea to implementation and reverse traversal from commit back to rationale.

# AI Integration Strategy

AI should increase leverage without becoming the source of truth.

Core AI jobs:

- Generate context.md from project history and structured notes
- Generate README.md from project knowledge
- Generate TODO.md from features, decisions, and requirements
- Generate decisions.md from decision logs and research context
- Summarize projects and features
- Analyze decisions and tradeoffs
- Detect stale context and missing links
- Generate specifications and architecture drafts
- Use OpenRouter with user-provided API keys

Operational rules:

- AI outputs must cite source artifacts.
- AI-generated content should be reviewable before persistence.
- AI should prefer structured extraction over freeform invention.
- AI should preserve uncertainty when source material is incomplete.
- Never incur AI usage cost on behalf of the user.

# Risk Assessment

## Risk: Over-modeling early

If the entity model becomes too complex, the product may be hard to adopt.

Mitigation: keep the MVP entity set small and add advanced graph behavior incrementally.

## Risk: AI hallucination

If AI output is treated as authoritative, the system can drift from reality.

Mitigation: require source links, confidence handling, and human review for durable changes.

## Risk: Workflow friction

If capture is slower than existing markdown or chat workflows, adoption will be weak.

Mitigation: optimize for low-friction input, fast summaries, and import from existing project artifacts.

## Risk: History loss

If the current state overwrites earlier reasoning, the product fails its core mission.

Mitigation: use event history, versioned documents, and provenance links as permanent records.