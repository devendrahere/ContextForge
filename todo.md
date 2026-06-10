# Development Phases

## Phase 1: Core Project Memory

### Epic: Core Data Model

- Feature: minimal entities
  - Task: define Project, Feature, Task, Idea, Research, Decision, Context, Document, Event, Repository, and Commit
  - Priority: High
  - Complexity: High
  - Status: Not started
- Feature: entity relationships
  - Task: specify how knowledge entities link to each other and how provenance is preserved
  - Priority: High
  - Complexity: High
  - Status: Not started
- Feature: lifecycle rules
  - Task: describe how each entity is created, updated, versioned, archived, or superseded
  - Priority: High
  - Complexity: Medium
  - Status: Not started

### Epic: Event History

- Feature: event model
  - Task: define append-only event types for feature creation, updates, decision making, research capture, context updates, commit links, and document generation
  - Priority: High
  - Complexity: High
  - Status: Not started
- Feature: timeline ordering
  - Task: establish how events are ordered, queried, and rendered across the project timeline
  - Priority: High
  - Complexity: Medium
  - Status: Not started

## Phase 2: Research and Decisions

### Epic: Research Management

- Feature: research capture
  - Task: store research notes, links, and evidence with project context
  - Priority: High
  - Complexity: Medium
  - Status: Not started
- Feature: research summaries
  - Task: generate concise summaries from research notes for later reuse
  - Priority: Medium
  - Complexity: Medium
  - Status: Not started

### Epic: Decision Management

- Feature: decision logs
  - Task: model decisions with rationale, alternatives, consequences, and status
  - Priority: High
  - Complexity: Medium
  - Status: Not started
- Feature: decisions.md generation
  - Task: generate a decision log document from decisions and research
  - Priority: High
  - Complexity: Medium
  - Status: Not started

### Epic: Markdown Generation

- Feature: context.md generation
  - Task: generate a current context summary from project history and structured notes
  - Priority: High
  - Complexity: Medium
  - Status: Not started
- Feature: plan.md generation
  - Task: generate the current delivery plan from the project graph
  - Priority: High
  - Complexity: Medium
  - Status: Not started
- Feature: todo.md generation
  - Task: generate a task-oriented view from the current project state
  - Priority: High
  - Complexity: Medium
  - Status: Not started

## Phase 3: Git, Timeline, and Events

### Epic: Git Integration

- Feature: repository linking
  - Task: connect a project to one or more Git repositories
  - Priority: High
  - Complexity: Medium
  - Status: Not started
- Feature: commit references
  - Task: store commit metadata and link commits to project knowledge
  - Priority: High
  - Complexity: Medium
  - Status: Not started
- Feature: feature to commit linking
  - Task: link features and decisions to commits and branches
  - Priority: High
  - Complexity: Medium
  - Status: Not started

### Epic: Timeline System

- Feature: event timeline
  - Task: display key project events in chronological order
  - Priority: High
  - Complexity: Medium
  - Status: Not started
- Feature: history drilldown
  - Task: let users inspect what changed, when, and why
  - Priority: High
  - Complexity: Medium
  - Status: Not started

### Epic: Event System

- Feature: event capture
  - Task: record meaningful changes as events across projects, features, decisions, context, and commits
  - Priority: High
  - Complexity: High
  - Status: Not started
- Feature: event provenance
  - Task: ensure each event can point back to its source entity and related artifacts
  - Priority: High
  - Complexity: Medium
  - Status: Not started

## Phase 4: Knowledge Graph and AI

### Epic: Knowledge Graph

- Feature: dependency graph
  - Task: visualize relationships between projects, features, decisions, research, contexts, documents, events, repositories, and commits
  - Priority: High
  - Complexity: High
  - Status: Not started
- Feature: timeline graph integration
  - Task: connect the graph to the event timeline for traceability
  - Priority: Medium
  - Complexity: High
  - Status: Not started

### Epic: AI Generation

- Feature: context generation
  - Task: generate context.md from project state, decisions, and research
  - Priority: High
  - Complexity: Medium
  - Status: Not started
- Feature: feature summarization
  - Task: summarize features from connected context, requirements, and commits
  - Priority: Medium
  - Complexity: Medium
  - Status: Not started
- Feature: research summarization
  - Task: summarize research into reusable project knowledge
  - Priority: Medium
  - Complexity: Medium
  - Status: Not started

## Phase 5: Polish, Search, and Export

### Epic: Search

- Feature: keyword search
  - Task: search project knowledge across titles, content, tags, and metadata
  - Priority: High
  - Complexity: Medium
  - Status: Not started
- Feature: semantic search
  - Task: support meaning-based lookup across project knowledge
  - Priority: Medium
  - Complexity: High
  - Status: Not started

### Epic: Export System

- Feature: markdown export
  - Task: export project knowledge into portable markdown files
  - Priority: High
  - Complexity: Medium
  - Status: Not started
- Feature: document export
  - Task: export generated documents for handoff and maintenance
  - Priority: Medium
  - Complexity: Medium
  - Status: Not started
- Feature: open graph export
  - Task: export graph data for future analysis and integrations
  - Priority: Medium
  - Complexity: Medium
  - Status: Not started

### Epic: AI Polish

- Feature: stale context detection
  - Task: identify outdated, duplicated, or unlinked context
  - Priority: Medium
  - Complexity: High
  - Status: Not started
- Feature: specification drafting
  - Task: draft specifications from decisions, requirements, and research
  - Priority: Medium
  - Complexity: Medium
  - Status: Not started

# Milestone Tasks

1. Finalize the minimal knowledge model and lifecycle rules.
2. Build project, feature, task, and context capture.
3. Add research, decision, and markdown generation workflows.
4. Implement Git linking, event history, and timeline views.
5. Add the knowledge graph and AI generation layer.
6. Polish search and export flows.

# Priority Levels

- High: required for the knowledge OS to function and deliver core value.
- Medium: important for usability, traceability, and long-term differentiation.
- Low: defer until the core model and workflows are stable.

# Dependencies

- Event history depends on the canonical entity model.
- Graph navigation depends on explicit relationship storage.
- Document generation depends on stable projects, features, decisions, and research.
- Git linkage depends on commit identity and project-feature mapping.
- AI generation depends on clean structure and source provenance.

# Estimated Complexity

- Canonical data model: High
- Event history: High
- Context capture UX: Medium
- Graph navigation: High
- Search: Medium to High
- Document generation: Medium
- Git integration: High
- AI features: Medium to High

# Completion Tracking

- [ ] Phase 1 - Core Project Memory
  - [ ] Core Data Model
  - [ ] Event History
- [ ] Phase 2 - Research and Decisions
  - [ ] Research Management
  - [ ] Decision Management
  - [ ] Markdown Generation
- [ ] Phase 3 - Git, Timeline, and Events
  - [ ] Git Integration
  - [ ] Timeline System
  - [ ] Event System
- [ ] Phase 4 - Knowledge Graph and AI
  - [ ] Knowledge Graph
  - [ ] AI Generation
- [ ] Phase 5 - Polish, Search, and Export
  - [ ] Search
  - [ ] Export System
  - [ ] AI Polish

# Delivery Rule

Complete foundational knowledge modeling before adding automation. The product should be able to preserve and explain project intent before it tries to optimize execution.