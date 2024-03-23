import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { motion } from "framer-motion";

export const meta: MetaFunction = () => {
  return [
    { title: "Animated Tabs" },
    { name: "description", content: "Animated Tabs" },
  ];
};

const tabs = [
  {
    id: "music",
    label: "Music",
  },
  {
    id: "business",
    label: "Business",
  },
  {
    id: "tech",
    label: "Tech",
  },
  {
    id: "design",
    label: "Design",
  },
  {
    id: "jobs",
    label: "Jobs",
  },
  {
    id: "science",
    label: "Science",
  },
];

export default function Index() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [slowMode, setSlowMode] = useState(false);

  return (
    <div className="grid place-content-center place-items-center min-h-screen">
      <div className="flex-space-x-1">
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`${activeTab === id ? "" : "hover:text-white/50"} relative transition rounded-full px-3 py-1.5 text-sm font-medium text-white outline-2 outline-sky-400 focus-visible:outline`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === id && (
              <motion.div
                layoutId="active-pill"
                transition={{
                  type: "spring",
                  bounce: 0.2,
                  duration: !slowMode ? 0.6 : 6,
                }}
                className="bg-white absolute inset-0"
                style={{ borderRadius: 9999 }}
              />
            )}
            <span className="relative z-10 mix-blend-difference">{label}</span>
          </button>
        ))}
      </div>
      <div className="flex gap-4 mt-16">
        <button
          onClick={() => setSlowMode(true)}
          className={`${slowMode ? "text-white" : "text-white/50"}`}
        >
          0.1x
        </button>
        <button
          onClick={() => setSlowMode(false)}
          className={`${!slowMode ? "text-white" : "text-white/50"}`}
        >
          1x
        </button>
      </div>
    </div>
  );
}
