"use client";

import { useEffect } from "react";

export default function ConsoleSuppressor() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;

    // Suppress console output in production
    const noop = () => {};
    console.log = noop;
    console.debug = noop;
    console.info = noop;
    console.warn = noop;
    // Keep console.error for critical debugging if needed

    // Disable right-click context menu
    const preventContext = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", preventContext);

    // Disable common devtools shortcuts
    const preventDevtools = (e: KeyboardEvent) => {
      // F12
      if (e.key === "F12") e.preventDefault();
      // Ctrl+Shift+I / Cmd+Opt+I (Inspector)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "I") e.preventDefault();
      // Ctrl+Shift+J / Cmd+Opt+J (Console)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "J") e.preventDefault();
      // Ctrl+Shift+C / Cmd+Opt+C (Element picker)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "C") e.preventDefault();
      // Ctrl+U / Cmd+U (View source)
      if ((e.ctrlKey || e.metaKey) && e.key === "u") e.preventDefault();
    };
    document.addEventListener("keydown", preventDevtools);

    return () => {
      document.removeEventListener("contextmenu", preventContext);
      document.removeEventListener("keydown", preventDevtools);
    };
  }, []);

  return null;
}
