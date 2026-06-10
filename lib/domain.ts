export type EntityId = string;

export type Project = {
  id: EntityId;
  name: string;
  summary: string;
  status: "draft" | "active" | "paused" | "archived";
  createdAt: string;
};

export type Feature = {
  id: EntityId;
  projectId: EntityId;
  title: string;
  summary: string;
  status: "idea" | "planned" | "in-progress" | "done";
};

export type Task = {
  id: EntityId;
  projectId: EntityId;
  featureId?: EntityId;
  title: string;
  status: "todo" | "doing" | "blocked" | "done";
};

export type Idea = {
  id: EntityId;
  projectId: EntityId;
  title: string;
  source: string;
};

export type ResearchNote = {
  id: EntityId;
  projectId: EntityId;
  title: string;
  source: string;
  insight: string;
};

export type Decision = {
  id: EntityId;
  projectId: EntityId;
  title: string;
  rationale: string;
};

export type ContextRecord = {
  id: EntityId;
  projectId: EntityId;
  title: string;
  body: string;
};

export type DocumentRecord = {
  id: EntityId;
  projectId: EntityId;
  title: string;
  type: "context.md" | "plan.md" | "todo.md" | "decisions.md";
  summary: string;
};

export type EventRecord = {
  id: EntityId;
  projectId: EntityId;
  type: string;
  entityType: string;
  entityId: EntityId;
  occurredAt: string;
};

export type Repository = {
  id: EntityId;
  projectId: EntityId;
  name: string;
  url: string;
};

export type CommitReference = {
  id: EntityId;
  projectId: EntityId;
  repositoryId: EntityId;
  hash: string;
  message: string;
  featureId?: EntityId;
};

export type ProjectGraph = {
  project: Project;
  features: Feature[];
  tasks: Task[];
  ideas: Idea[];
  research: ResearchNote[];
  decisions: Decision[];
  context: ContextRecord;
  documents: DocumentRecord[];
  events: EventRecord[];
  repositories: Repository[];
  commits: CommitReference[];
};

export function sortEventsByTime(events: EventRecord[]): EventRecord[] {
  return [...events].sort((left, right) => left.occurredAt.localeCompare(right.occurredAt));
}

export function featureCommitLinks(commits: CommitReference[]): Array<{ featureId: EntityId; commitHash: string }> {
  return commits
    .filter((commit) => Boolean(commit.featureId))
    .map((commit) => ({
      featureId: commit.featureId as EntityId,
      commitHash: commit.hash,
    }));
}

export function countTasksByStatus(tasks: Task[]): Record<Task["status"], number> {
  return tasks.reduce<Record<Task["status"], number>>(
    (counts, task) => ({
      ...counts,
      [task.status]: counts[task.status] + 1,
    }),
    { todo: 0, doing: 0, blocked: 0, done: 0 },
  );
}

export function buildProjectGraph(): ProjectGraph {
  return {
    project: demoProject,
    features: demoFeatures,
    tasks: demoTasks,
    ideas: demoIdeas,
    research: demoResearch,
    decisions: demoDecisions,
    context: demoContext,
    documents: demoDocuments,
    events: demoEvents,
    repositories: demoRepositories,
    commits: demoCommits,
  };
}

export const demoProject: Project = {
  id: "project-1",
  name: "ContextForge",
  summary: "ContextForge preserves project memory, decisions, and implementation context.",
  status: "active",
  createdAt: "2026-06-10T00:00:00.000Z",
};

export const demoFeatures: Feature[] = [
  {
    id: "feature-1",
    projectId: demoProject.id,
    title: "Project memory",
    summary: "Capture projects, ideas, context, and decisions in one place.",
    status: "planned",
  },
  {
    id: "feature-2",
    projectId: demoProject.id,
    title: "Knowledge graph",
    summary: "Connect features, research, decisions, events, and commits.",
    status: "idea",
  },
];

export const demoTasks: Task[] = [
  {
    id: "task-1",
    projectId: demoProject.id,
    featureId: "feature-1",
    title: "Model the core entities",
    status: "doing",
  },
  {
    id: "task-2",
    projectId: demoProject.id,
    featureId: "feature-1",
    title: "Render the project workspace",
    status: "todo",
  },
];

export const demoIdeas: Idea[] = [
  {
    id: "idea-1",
    projectId: demoProject.id,
    title: "Unify project context across docs and chats",
    source: "Founder note",
  },
];

export const demoResearch: ResearchNote[] = [
  {
    id: "research-1",
    projectId: demoProject.id,
    title: "Markdown-first project workflows",
    source: "Internal analysis",
    insight: "Markdown is portable, but it lacks structure, provenance, and relationship tracking.",
  },
];

export const demoDecisions: Decision[] = [
  {
    id: "decision-1",
    projectId: demoProject.id,
    title: "Use a knowledge-first model",
    rationale: "Tasks alone cannot preserve reasoning, traceability, or long-lived project memory.",
  },
];

export const demoContext: ContextRecord = {
  id: "context-1",
  projectId: demoProject.id,
  title: "Current context",
  body: "Phase 1 focuses on the core model: projects, features, tasks, ideas, research, decisions, context, documents, events, repositories, and commits.",
};

export const demoDocuments: DocumentRecord[] = [
  {
    id: "doc-1",
    projectId: demoProject.id,
    title: "context.md",
    type: "context.md",
    summary: "Explains the why behind the system.",
  },
  {
    id: "doc-2",
    projectId: demoProject.id,
    title: "plan.md",
    type: "plan.md",
    summary: "Explains what will be built.",
  },
  {
    id: "doc-3",
    projectId: demoProject.id,
    title: "todo.md",
    type: "todo.md",
    summary: "Explains how the system will be built.",
  },
];

export const demoEvents: EventRecord[] = [
  {
    id: "event-1",
    projectId: demoProject.id,
    type: "ProjectCreated",
    entityType: "Project",
    entityId: demoProject.id,
    occurredAt: "2026-06-10T00:00:00.000Z",
  },
  {
    id: "event-2",
    projectId: demoProject.id,
    type: "FeaturePlanned",
    entityType: "Feature",
    entityId: "feature-1",
    occurredAt: "2026-06-10T00:15:00.000Z",
  },
];

export const demoRepositories: Repository[] = [
  {
    id: "repo-1",
    projectId: demoProject.id,
    name: "contextforge",
    url: "https://github.com/example/contextforge",
  },
];

export const demoCommits: CommitReference[] = [
  {
    id: "commit-1",
    projectId: demoProject.id,
    repositoryId: "repo-1",
    hash: "a1b2c3d",
    message: "Initialize knowledge model",
    featureId: "feature-1",
  },
];