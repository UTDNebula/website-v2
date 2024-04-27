import Image from 'next/image';
import Link from 'next/link';

const linkClasses = 'underline decoration-transparent hover:decoration-inherit transition';

const Footer = () => {
  return (
    <footer className="bg-royal text-white w-full rounded-t-[3.125rem] pb-10 md:px-40 px-8 text-sm">
      <div className="flex justify-between py-16 sm:py-28 gap-8">
        <Image src="/logo-name.svg" alt="logo" width="360" height="53" className="shrink min-w-0" />
        <button
          onClick={() => window.scrollTo(0, 0)}
          className="items-center flex flex-col rounded-full p-2 transition border border-white/0 hover:border-white"
        >
          <Image src="/arrow.svg" alt="arrow" width="20" height="20" className="rotate-180" />
          Top
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col items-start gap-3">
          <h3 className="text-xl font-semibold mb-4">About us</h3>
          <Link className={linkClasses} href="/about/mission">
            Mission
          </Link>
          <Link className={linkClasses} href="/about/governance">
            Project Governance
          </Link>
          <Link className={linkClasses} href="/contact">
            Contact Us
          </Link>
        </div>
        <div className="flex flex-col items-start gap-3">
          <Link className={linkClasses} href="/projects">
            <h3 className="text-xl font-semibold mb-4">Projects</h3>
          </Link>
          <Link className={linkClasses} href="https://planner.utdnebula.com/" target="_blank">
            Planner
          </Link>
          <Link className={linkClasses} href="https://jupiter.utdnebula.com/" target="_blank">
            Jupiter
          </Link>
          <Link className={linkClasses} href="https://trends.utdnebula.com/" target="_blank">
            Trends
          </Link>
          <Link
            className={linkClasses}
            href="https://chromewebstore.google.com/detail/skedge/ghipfanpcodcmkjacmmfjdmccdiaahab"
            target="_blank"
          >
            Skedge
          </Link>
          <Link
            className={linkClasses}
            href="https://github.com/UTDNebula/nebula-api"
            target="_blank"
          >
            API & Platform
          </Link>
        </div>
        <div className="flex flex-col items-start gap-3">
          <h3 className="text-xl font-semibold mb-4">Resources</h3>
          <Link className={linkClasses} href="/resources/roles">
            Roles
          </Link>
          <Link className={linkClasses} href="/about/governance">
            Project Governance
          </Link>
          <Link className={linkClasses} href="/resources/meetings">
            Meetings
          </Link>
          <Link className={linkClasses} href="/resources/calendar">
            Calendar
          </Link>
          <a
            className={linkClasses}
            href="https://nebula-labs.atlassian.net/wiki/spaces/ND/overview?homepageId=23822536"
            target="_blank"
          >
            Design Guide
          </a>
        </div>
        <div className="flex flex-col items-start  gap-4 lg:ml-auto">
          <a
            className="mb-6 hover:scale-105 transition"
            href="https://discord.gg/tcpcnfxmeQ"
            target="_blank"
          >
            <Image src="/join-discord.svg" alt="discord" width="200" height="60" />
          </a>
          <a
            className={linkClasses + ' flex items-center gap-2'}
            href="https://instagram.com/utdnebula"
            target="_blank"
          >
            <Image src="/instagram.svg" alt="Instagram logo" width="30" height="30" />
            Instagram
          </a>
          <a
            className={linkClasses + ' flex items-center gap-2'}
            href="https://linkedin.com/company/utdnebula"
            target="_blank"
          >
            <Image src="/linkedin.svg" alt="LinkedIn logo" width="30" height="30" />
            LinkedIn
          </a>
          <a
            className={linkClasses + ' flex items-center gap-2'}
            href="https://github.com/utdnebula"
            target="_blank"
          >
            <Image src="/github.svg" alt="GitHub logo" width="30" height="30" />
            GitHub
          </a>
        </div>
      </div>
      <div className="md:pt-40 pt-10">
        <div className="border-t-2 border-white" />
        <div className="flex md:flex-row flex-col justify-between gap-8 pt-8">
          <Link className={linkClasses} href="/sitemap.xml">
            Sitemap
          </Link>
          <div className="md:text-right text-center text-xs">
            <p>© 2024 Nebula Labs Maintainers. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
