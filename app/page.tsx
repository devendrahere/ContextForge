import {
  buildProjectGraph,
  demoCommits,
  demoContext,
  demoDecisions,
  demoDocuments,
  demoEvents,
  demoFeatures,
  demoIdeas,
  demoProject,
  demoResearch,
  demoRepositories,
  demoTasks,
  countTasksByStatus,
  featureCommitLinks,
  sortEventsByTime,
} from "@/lib/domain";
import type { ReactNode } from "react";

const sections = [
  {
    title: "Core memory",
    subtitle: "Projects, features, tasks, ideas, and context",
    items: ["Projects", "Features", "Tasks", "Ideas", "Context"],
  },
  {
    title: "Knowledge trail",
    subtitle: "Research, decisions, documents, and events",
    items: ["Research", "Decisions", "Documents", "Events"],
  },
  {
    title: "Execution traceability",
    subtitle: "Repositories and commits linked back to the graph",
    items: ["Repositories", "Commits", "Feature ↔ Commit links"],
  },
];

const projectGraph = buildProjectGraph();
const taskCounts = countTasksByStatus(projectGraph.tasks);
const orderedEvents = sortEventsByTime(projectGraph.events);
const commitLinks = featureCommitLinks(projectGraph.commits);

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-10 lg:px-10">
      <section className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur md:grid-cols-[1.4fr_0.9fr]">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1 text-sm text-sky-100">
            Phase 1 foundation
          </div>
          <div className="space-y-4">
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Project Knowledge OS
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              A knowledge-first system for software projects that preserves context,
              decisions, research, and implementation history in one traceable graph.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {sections.map((section) => (
              <div key={section.title} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                <p className="text-sm font-medium text-sky-100">{section.title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">{section.subtitle}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {section.items.map((item) => (
                    <span key={item} className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
          <p className="text-sm font-medium text-sky-100">Phase 1 scope</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>Core entities: projects, features, tasks, ideas, research, decisions, context, documents, events, repositories, commits.</li>
            <li>Append-only event history for meaningful changes.</li>
            <li>Minimal knowledge model before automation.</li>
          </ul>
        </aside>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <Panel title="Current project" accent="Project">
            <StatRow label="Name" value={demoProject.name} />
            <StatRow label="Status" value={demoProject.status} />
            <StatRow label="Summary" value={demoProject.summary} />
          </Panel>

          <Panel title="Task health" accent="Lifecycle">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {Object.entries(taskCounts).map(([status, count]) => (
                <div key={status} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-sky-200/70">{status}</p>
                  <p className="mt-2 text-3xl font-semibold text-white">{count}</p>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="Phase 1 backlog" accent="Execution">
            <div className="grid gap-3 md:grid-cols-2">
              {demoTasks.map((task) => (
                <div key={task.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-medium text-white">{task.title}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">{task.status}</p>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="Event timeline" accent="Traceability">
            <div className="space-y-3">
              {orderedEvents.map((event) => (
                <div key={event.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium text-white">{event.type}</p>
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{event.occurredAt}</p>
                  </div>
                  <p className="mt-2 text-sm text-slate-300">
                    {event.entityType} · {event.entityId}
                  </p>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="Graph seed" accent="Relations">
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {demoFeatures.map((feature) => (
                <NodeCard key={feature.id} label="Feature" title={feature.title} body={feature.summary} />
              ))}
              {demoIdeas.map((idea) => (
                <NodeCard key={idea.id} label="Idea" title={idea.title} body={idea.source} />
              ))}
              {demoResearch.map((research) => (
                <NodeCard key={research.id} label="Research" title={research.title} body={research.insight} />
              ))}
            </div>
          </Panel>
        </div>

        <div className="space-y-6">
          <Panel title="Knowledge trail" accent="Memory">
            <div className="space-y-4 text-sm text-slate-300">
              <CompactItem label="Context" value={demoContext.body} />
              <CompactItem label="Decision" value={demoDecisions[0]?.rationale ?? ""} />
              <CompactItem label="Document set" value={demoDocuments.map((document) => document.title).join(" · ")} />
              <CompactItem label="Events" value={`${demoEvents.length} events recorded`} />
            </div>
          </Panel>

          <Panel title="Git linkage" accent="Traceability">
            <div className="space-y-4 text-sm text-slate-300">
              <CompactItem label="Repository" value={demoRepositories[0]?.url ?? ""} />
              <CompactItem label="Commit" value={`${demoCommits[0]?.hash ?? ""} · ${demoCommits[0]?.message ?? ""}`} />
              <CompactItem
                label="Feature ↔ Commit"
                value={commitLinks.map((link) => `${link.featureId} → ${link.commitHash}`).join(" · ")}
              />
            </div>
          </Panel>

          <Panel title="Workspace snapshot" accent="Graph">
            <div className="grid gap-3 text-sm text-slate-300">
              <CompactItem label="Ideas" value={`${projectGraph.ideas.length} captured`} />
              <CompactItem label="Research" value={`${projectGraph.research.length} notes`} />
              <CompactItem label="Decisions" value={`${projectGraph.decisions.length} logged`} />
              <CompactItem label="Documents" value={projectGraph.documents.map((document) => document.title).join(" · ")} />
            </div>
          </Panel>
        </div>
      </section>
    </main>
  );
}

function Panel({
  title,
  accent,
  children,
}: Readonly<{
  title: string;
  accent: string;
  children: ReactNode;
}>) {
  return (
    <section className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6 shadow-glow">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-sky-200/70">{accent}</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">{title}</h2>
        </div>
      </div>
      {children}
    </section>
  );
}

function StatRow({
  label,
  value,
}: Readonly<{
  label: string;
  value: string;
}>) {
  return (
    <div className="grid gap-1 border-b border-white/8 py-3 last:border-b-0 sm:grid-cols-[120px_1fr] sm:gap-4">
      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{label}</p>
      <p className="text-sm leading-6 text-slate-100">{value}</p>
    </div>
  );
}

function NodeCard({
  label,
  title,
  body,
}: Readonly<{
  label: string;
  title: string;
  body: string;
}>) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
      <p className="text-xs uppercase tracking-[0.24em] text-sky-200/70">{label}</p>
      <p className="mt-2 text-base font-medium text-white">{title}</p>
      <p className="mt-2 text-sm leading-6 text-slate-400">{body}</p>
    </div>
  );
}

function CompactItem({
  label,
  value,
}: Readonly<{
  label: string;
  value: string;
}>) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs uppercase tracking-[0.24em] text-sky-200/70">{label}</p>
      <p className="mt-2 text-sm leading-6 text-slate-200">{value}</p>
    </div>
  );
}