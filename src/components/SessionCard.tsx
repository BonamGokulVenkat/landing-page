"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Session } from "@/types/session";

type SessionCardProps = {
  session: Session;
  isHovered: boolean;
  isAnyHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
};

export default function SessionCard({
  session,
  isHovered,
  isAnyHovered,
  onHover,
  onLeave,
}: SessionCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`bg-white border rounded-xl p-8 sm:p-12 text-left h-full transition-all duration-500 ${
        isHovered
          ? "border-blue-600 shadow-xl"
          : "border-[var(--color-stone)]"
      }`}
    >
      {session.duration && (
        <span className="small-label text-[9px] text-blue-600 mb-4 block">
          {session.duration}
        </span>
      )}

      <h3 className="card-title text-[var(--color-ink)] mb-6">
        {session.name}
      </h3>

      <p className="card-body text-[var(--color-ink-soft)] mb-8">
        {session.description}
      </p>

      {session.additionalInfo && (
        <div className="pt-6 border-t border-[var(--color-stone-light)] mt-auto">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="small-label flex items-center gap-2 text-[9px] text-[var(--color-ink)] hover:text-blue-600 transition-colors"
          >
            {expanded ? "Read Less" : "Read More"}
            <ChevronDown
              className={`w-3 h-3 transition-transform ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`grid transition-all duration-300 ${
              expanded ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
            }`}
          >
            <p className="overflow-hidden card-body italic text-[var(--color-ink-soft)] border-l-2 border-blue-600 pl-4">
              {session.additionalInfo}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}