# Project Vision

git branch -M main
git remote add origin https://github.com/devendrahere/ContextForge.git
git push -u origin main

# Core Philosophy

Knowledge is the primary entity. Tasks are a supporting layer. The system should be organized around the artifacts that carry meaning in software projects: projects, features, context, decisions, research, requirements, commits, documents, events, and architecture records.

The product should not only store what was done. It should preserve why it was done, what was considered, what was learned, and how the project evolved.

# Problem Statement

Software project knowledge is currently fragmented across README files, TODO files, context.md files, AI chats, Git commits, research notes, documentation, feature specifications, and technical design documents. That fragmentation creates repeated decisions, stale context, weak handoffs, and poor long-term maintainability.

Teams need a system that can unify these sources into a single knowledge graph with traceable history, searchable context, and AI-ready structure.

# Target Users

- Solo developers who need a durable memory for project decisions and implementation history.
- Small engineering teams that need shared context, traceability, and project continuity.
- Technical leads and architects who need decision records and design history.
- Students and builders who want to move from idea to implementation with better structure.

# Key Concepts

- Project: the top-level container for all knowledge and execution around an initiative.
- Feature: a coherent slice of capability or technical scope.
- Context: the current understanding, assumptions, and state of the project.
- Decision: a recorded choice with rationale, alternatives, and consequences.
- Research: evidence, investigation, or exploration that informs decisions.
- Requirement: a need, constraint, or acceptance condition.
- Document: a generated or authored artifact such as a spec, README, or architecture note.
- Commit: a Git-linked implementation change.
- Event: a timestamped record of meaningful change.
- Architecture Record: a durable description of boundaries, tradeoffs, and system structure.
- Task: a supporting execution item derived from knowledge, not the center of the model.

# Domain Model

The domain model should preserve stable knowledge and the history of change. Every entity should support identity, provenance, versioning, and traceability.

## Project

- Purpose: root container for the full knowledge system.
- Attributes: id, name, description, status, owner, tags, created_at, updated_at, archived_at.
- Relationships: owns features, decisions, research, requirements, documents, events, commits, context records, architecture records.
- Lifecycle: created from an idea; evolves through events; archived when inactive.

## Feature

- Purpose: model a meaningful capability or technical area.
- Attributes: id, project_id, title, summary, priority, status, parent_feature_id, order_index, created_at, updated_at.
- Relationships: belongs to a project; may contain subfeatures; links to requirements, decisions, documents, events, commits, and context.
- Lifecycle: created from planning; refined through research and decisions; implemented, then maintained or archived.

## Task

- Purpose: represent work derived from the knowledge model.
- Attributes: id, project_id, feature_id, title, description, priority, status, assignee, due_date, created_at, updated_at.
- Relationships: derived from features, requirements, decisions, and documents; may link to commits and events.
- Lifecycle: created as support work; progresses through execution; completed or cancelled.

## Idea

- Purpose: capture the starting point for a project or feature.
- Attributes: id, project_id, title, problem_statement, notes, source, created_at, updated_at.
- Relationships: can become a project, feature, requirement, or research thread; informs later context and decisions.
- Lifecycle: captured early; refined into structured knowledge; retained as the origin of the project.

## Research

- Purpose: store investigation, references, and evidence.
- Attributes: id, project_id, title, summary, source_type, source_url, notes, confidence, created_at, updated_at.
- Relationships: informs decisions, requirements, architecture records, and feature scope.
- Lifecycle: collected during exploration; linked to decisions; preserved as source evidence.

## Decision

- Purpose: record a choice and its rationale.
- Attributes: id, project_id, title, context, decision, alternatives, rationale, consequences, status, created_at, updated_at.
- Relationships: informed by research and context; affects features, requirements, documents, and architecture records.
- Lifecycle: proposed, reviewed, accepted, revised, or superseded.

## Context

- Purpose: represent the current project understanding.
- Attributes: id, project_id, scope, summary, assumptions, open_questions, risks, updated_from_event_id, created_at, updated_at.
- Relationships: belongs to a project or feature; updated by events; referenced by AI generation and documents.
- Lifecycle: continuously refreshed; versioned over time; never overwritten without history.

## Document

- Purpose: store authored or generated project artifacts.
- Attributes: id, project_id, entity_type, entity_id, document_type, title, content, source_refs, version, generated_by, created_at, updated_at.
- Relationships: derives from projects, features, decisions, requirements, or context; may reference commits and events.
- Lifecycle: drafted, reviewed, published, regenerated, or superseded.

## Commit

- Purpose: anchor project knowledge to implementation history.
- Attributes: id, project_id, hash, message, branch, author, committed_at, remote_url, linked_entity_type, linked_entity_id.
- Relationships: links to features, tasks, requirements, and events.
- Lifecycle: imported or linked from Git; used as immutable implementation evidence.

## Event

- Purpose: capture significant system activity as an append-only record.
- Attributes: id, project_id, event_type, entity_type, entity_id, payload, source, occurred_at, created_at.
- Relationships: can point to any entity; may reference commits, documents, or generated outputs.
- Lifecycle: created on every meaningful change; never edited in place.

## Requirement

- Purpose: specify a need, constraint, or acceptance condition.
- Attributes: id, project_id, feature_id, title, description, type, priority, status, source, created_at, updated_at.
- Relationships: linked to ideas, features, decisions, research, documents, and tasks.
- Lifecycle: drafted, validated, refined, implemented, or retired.

## Architecture Record

- Purpose: preserve system design and tradeoffs over time.
- Attributes: id, project_id, title, problem, decision, context, consequences, alternatives, status, created_at, updated_at.
- Relationships: informed by decisions and research; referenced by documents and features.
- Lifecycle: authored during design; updated when architecture changes; preserved as historical record.

# Entity Relationships

- Project is the root of all knowledge.
- Feature breaks a project into navigable areas of scope.
- Idea can seed a project, feature, or requirement.
- Research informs decisions and requirements.
- Decision shapes features, requirements, and architecture records.
- Context summarizes the current state of the project and feature tree.
- Document is a derived or authored artifact that explains or exports project knowledge.
- Commit ties implementation work back to the project graph.
- Event records every significant change and anchors timeline history.
- Requirement sits between intent and execution and can generate tasks.
- Architecture Record preserves long-lived design reasoning and tradeoffs.

# System Constraints

- Preserve history instead of overwriting it.
- Keep provenance for every important artifact.
- Treat AI output as assistive and reviewable, not authoritative.
- Support long-lived projects whose structure evolves over time.
- Maintain markdown portability for generated artifacts.
- Keep the core model stable enough to survive years of product growth.
- Keep the initial product lightweight and focused on the minimum durable knowledge set: projects, features, tasks, ideas, research, decisions, contexts, documents, events, repositories, and commits.
- Use a stack that can ship quickly on free tiers: Next.js, TypeScript, Tailwind CSS, shadcn/ui, PostgreSQL on Neon, Drizzle ORM, React Flow, Tiptap, react-markdown, and Vercel.
- Prefer user-supplied AI keys over paid platform keys; store keys encrypted and never fund AI usage from the product side.
- Authentication can be skipped for v1 if the tool is personal-first, but the architecture should leave room for Better Auth later.

# Architectural Principles

- Knowledge-first: model meaning before workflow.
- Event-driven: every meaningful action becomes a durable event.
- Graph-oriented: relationships are first-class and queryable.
- Human-governed AI: AI drafts and summarizes; humans approve durable changes.
- Versioned by default: context, decisions, documents, and generated outputs should be traceable across time.
- Interoperable: generated markdown should remain useful outside the product.
- Maintainable: the system should favor clarity, stable boundaries, and incremental evolution.
- Minimal first, expandable later: start with the smallest useful domain model and add capabilities only after the core memory workflow is reliable.

# Success Criteria

- A project can be reconstructed from the knowledge graph.
- Decisions are explainable with their rationale and evidence.
- Context remains current without losing historical intent.
- Commits and events can be traced back to features and requirements.
- AI can generate useful project documents from structured knowledge.
- New contributors can understand the project without reading scattered files and chats.

# Future Vision

ContextForge should evolve into the system of record for software project memory. Over time it can become the place where project intent, architecture, research, decisions, implementation history, and documentation stay connected from idea to maintenance.