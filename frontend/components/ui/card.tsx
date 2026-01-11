import { PropsWithChildren } from "react";

type CardProps = PropsWithChildren<{
  title?: string;
  badge?: string;
}>;

export function Card({ title, badge, children }: CardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-lg backdrop-blur">
      <div className="flex items-center justify-between">
        {title ? <h3 className="text-lg font-semibold">{title}</h3> : <span />}
        {badge ? (
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]">
            {badge}
          </span>
        ) : null}
      </div>
      <div className="mt-4 text-sm text-zinc-200">{children}</div>
    </div>
  );
}
