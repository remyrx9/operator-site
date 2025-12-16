import Link from "next/link";
import { site } from "@/lib/content";

function clsx(...v: Array<string | false | null | undefined>) {
  return v.filter(Boolean).join(" ");
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-xs text-black/70">
      {children}
    </span>
  );
}

function SectionTitle({
  kicker,
  title,
  lead,
}: {
  kicker?: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {kicker ? (
        <div className="mb-3 flex justify-center">
          <Pill>{kicker}</Pill>
        </div>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {lead ? (
        <p className="mt-3 text-sm leading-6 text-black/60 sm:text-base">
          {lead}
        </p>
      ) : null}
    </div>
  );
}

function Card({
  title,
  desc,
  badge,
  href,
}: {
  title: string;
  desc: string;
  badge?: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "group rounded-3xl border border-black/10 bg-white p-6 shadow-sm",
        "transition hover:-translate-y-0.5 hover:shadow-md",
        "focus:outline-none focus:ring-2 focus:ring-black/20"
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="text-base font-semibold tracking-tight">{title}</div>
          <p className="mt-2 text-sm leading-6 text-black/60">{desc}</p>
        </div>
        {badge ? (
          <span className="shrink-0 rounded-full border border-black/10 bg-black/[0.03] px-2.5 py-1 text-xs text-black/60">
            {badge}
          </span>
        ) : null}
      </div>
      <div className="mt-5 flex items-center gap-2 text-xs text-black/50">
        <span className="h-1.5 w-1.5 rounded-full bg-black/20" />
        <span className="transition group-hover:text-black/70">Open</span>
      </div>
    </Link>
  );
}

function Divider() {
  return <div className="mx-auto my-16 h-px w-full max-w-6xl bg-black/10" />;
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#fbfbfc] text-black">
      {/* top glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-[-220px] z-0 mx-auto h-[520px] max-w-4xl rounded-full bg-black/[0.06] blur-3xl"
      />

      <header className="relative z-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <Link href="#" className="text-sm font-semibold tracking-tight">
            {site.name}
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-black/60 sm:flex">
            {site.nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="transition hover:text-black"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link
              href={site.ctaSecondary.href}
              className="hidden rounded-full px-3 py-2 text-sm text-black/70 transition hover:bg-black/[0.05] sm:inline-flex"
            >
              {site.ctaSecondary.label}
            </Link>
            <Link
              href={site.ctaPrimary.href}
              className="inline-flex rounded-full bg-black px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
            >
              {site.ctaPrimary.label}
            </Link>
          </div>
        </div>
      </header>

      {/* hero */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-5 pb-10 pt-14 sm:px-8 sm:pb-14 sm:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex justify-center">
              <Pill>Minimal. Unified. Alive.</Pill>
            </div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              {site.tagline}
            </h1>
            <p className="mt-5 text-base leading-7 text-black/60 sm:text-lg">
              {site.subtag}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={site.ctaPrimary.href}
                className="inline-flex w-full max-w-xs items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90 sm:w-auto"
              >
                {site.ctaPrimary.label}
              </Link>
              <Link
                href={site.ctaSecondary.href}
                className="inline-flex w-full max-w-xs items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-black/80 shadow-sm transition hover:bg-black/[0.03] sm:w-auto"
              >
                {site.ctaSecondary.label}
              </Link>
            </div>

            <p className="mt-6 text-xs text-black/45">
              This site is a hug, but it is not soft. It holds weight.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* everything grid */}
      <section id="everything" className="relative z-10 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionTitle
            kicker="Everything"
            title="A single home for every venture"
            lead="Each pillar is separate, but it lives under one roof."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {site.ventures.map((v) => (
              <Card
                key={v.title}
                title={v.title}
                desc={v.desc}
                badge={v.badge}
                href={v.href}
              />
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold tracking-tight">
              The point of rxexperience
            </div>
            <p className="mt-2 text-sm leading-6 text-black/60">
              Not a portfolio. Not a link tree. A living container for everything
              you build, with enough calm that it never fights your evolution.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* podcast */}
      <section id="podcast" className="relative z-10 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionTitle
            kicker="Podcast"
            title={site.sections.podcast.title}
            lead={site.sections.podcast.lead}
          />
          <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
            <ul className="grid gap-3 text-sm text-black/70 sm:grid-cols-3">
              {site.sections.podcast.bullets.map((b) => (
                <li key={b} className="rounded-2xl bg-black/[0.03] p-4">
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-xs text-black/50">
                Drop episodes here when ready.
              </div>
              <Link
                href={site.sections.podcast.action.href}
                className="inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
              >
                {site.sections.podcast.action.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* music */}
      <section id="music" className="relative z-10 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionTitle
            kicker="Music"
            title={site.sections.music.title}
            lead={site.sections.music.lead}
          />
          <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
            <ul className="grid gap-3 text-sm text-black/70 sm:grid-cols-3">
              {site.sections.music.bullets.map((b) => (
                <li key={b} className="rounded-2xl bg-black/[0.03] p-4">
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-xs text-black/50">
                Add embeds later without changing the layout.
              </div>
              <Link
                href={site.sections.music.action.href}
                className="inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
              >
                {site.sections.music.action.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* philosophy */}
      <section id="philosophy" className="relative z-10 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionTitle
            kicker="Philosophy"
            title={site.sections.philosophy.title}
            lead={site.sections.philosophy.lead}
          />
          <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
            <ul className="grid gap-3 text-sm text-black/70 sm:grid-cols-3">
              {site.sections.philosophy.bullets.map((b) => (
                <li key={b} className="rounded-2xl bg-black/[0.03] p-4">
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-xs text-black/50">
                This becomes your doctrine library.
              </div>
              <Link
                href={site.sections.philosophy.action.href}
                className="inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
              >
                {site.sections.philosophy.action.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* contact */}
      <section id="contact" className="relative z-10 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
          <SectionTitle
            kicker="Contact"
            title={site.contact.title}
            lead={site.contact.lead}
          />

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold tracking-tight">Email</div>
              <p className="mt-2 text-sm text-black/60">
                Keep it tight. One message. One outcome.
              </p>
              <a
                href={`mailto:${site.contact.email}`}
                className="mt-5 inline-flex rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
              >
                {site.contact.email}
              </a>
              <p className="mt-3 text-xs text-black/45">
                Replace with your real email when ready.
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold tracking-tight">Links</div>
              <p className="mt-2 text-sm text-black/60">
                Wire these to your real channels when you want.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {site.contact.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="rounded-full border border-black/10 bg-black/[0.03] px-3 py-2 text-sm text-black/70 transition hover:bg-black/[0.06]"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
              <p className="mt-3 text-xs text-black/45">
                Use real URLs or keep placeholders until launch.
              </p>
            </div>
          </div>

          <footer className="mx-auto mt-12 max-w-6xl px-1 text-center text-xs text-black/45">
            <div className="mb-1">{site.footer.note}</div>
            <div>© {new Date().getFullYear()} {site.name}</div>
          </footer>
        </div>
      </section>
    </main>
  );
}
