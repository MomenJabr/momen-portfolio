import { site } from "./site";

/**
 * Contact — reach-out links for the Let's Start a Conversation section.
 */
export const contactSection = {
  eyebrow: "Contact",
  title: "Let's Start a Conversation",
  intro:
    "Have a data science, machine learning, BI, or technical engineering opportunity? I'd be glad to connect.",
};

export const contactLinks = [
  {
    id: "email",
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/momen-jabr-2bb07538a",
    href: site.linkedin,
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/MomenJabr",
    href: site.github,
  },
  {
    id: "resume",
    label: "Resume",
    value: "Momen-Jabr-CV.pdf",
    href: site.resume.href,
  },
];