import { permanentRedirect } from "next/navigation";

// Legacy real-estate route from the old template — no longer part of the site.
export default function AgentsPage() {
  permanentRedirect("/");
}
