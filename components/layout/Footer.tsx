import Link from "next/link";
import {
  CircuitBoard,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const LINKS = [
  { href: "/learn", label: "Learn" },
  { href: "/modules", label: "Modules" },
  { href: "/lab", label: "3D Lab" },
  { href: "/notes", label: "Quick Notes" },
  { href: "/quiz", label: "Quiz" },
  { href: "/about", label: "About" },
];

const SOCIALS = [
  {
    href: "https://github.com/Jaiki-839",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://www.instagram.com/jaiki_839",
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: "https://www.linkedin.com/in/jaiki-kushwaha-59b7642b5/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://x.com/Jaiki_kushwaha",
    label: "X",
    icon: Twitter,
  },

];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
              <CircuitBoard size={19} className="text-accent" />
              ByteBasics
            </div>

            <p className="mt-2 text-sm leading-relaxed text-muted">
              Understand Computers. Build Digital Knowledge.
            </p>

            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <nav className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Project Credits */}
        <div className="mt-10 border-t border-border pt-6">
          <div className="flex flex-col gap-2 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>
              Project given by{" "}
              <span className="font-medium text-ink">Bikesh Sir</span>
            </p>

            <p>
              Made with ❤️ by {" "}
              <a
                href="https://www.jaikikushwaha.me"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ink underline-offset-10 hover:text-accent hover:underline"
              >
                Jaiki Kushwaha
              </a>
            </p>
          </div>

          <p className="mt-4 text-xs text-muted">
            © {new Date().getFullYear()} ByteBasics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

