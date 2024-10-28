import Image from 'next/image';
import Link from 'next/link';
import LogoName from '@/../public/logo-name-white.svg';
import Arrow from '@/../public/icons/arrow-white.svg';
import Discord from '@/../public/icons/join-discord-white.svg';
import Instagram from '@/../public/icons/instagram-white.svg';
import LinkedIn from '@/../public/icons/linkedin-white.svg';
import GitHub from '@/../public/icons/github-white.svg';

const linkClasses = 'underline decoration-transparent hover:decoration-inherit transition';

const Footer = () => {
  return (
    <footer className="bg-royal text-white w-full rounded-t-[3.125rem] pb-10 md:px-40 px-8 text-sm mt-20">
      <div className="flex justify-between py-16 sm:py-28 gap-8">
        <Image src={LogoName} alt="logo" width="360" height="53" className="shrink min-w-0" />
        <button
          onClick={() => window.scrollTo(0, 0)}
          className="items-center flex flex-col rounded-full p-2 transition border border-white/0 hover:border-white"
        >
          <Image src={Arrow} alt="arrow" width="20" height="20" className="rotate-180" />
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
          <Link className={linkClasses} href="/membership">
            Membership
          </Link>
          <Link className={linkClasses} href="/contact">
            Contact Us
          </Link>
        </div>
        <div className="flex flex-col items-start gap-3">
          <h3 className="text-xl font-semibold mb-4">Projects</h3>
          <Link className={linkClasses} href="/projects/jupiter" target="_blank">
            Jupiter
          </Link>
          <Link className={linkClasses} href="/projects/trends" target="_blank">
            Trends
          </Link>
          <Link className={linkClasses} href="/projects/skedge" target="_blank">
            Skedge
          </Link>
          <Link className={linkClasses} href="/projects/api" target="_blank">
            API & Platform
          </Link>
          <Link className={linkClasses} href="/projects/planner" target="_blank">
            Planner
          </Link>
        </div>
        <div className="flex flex-col items-start gap-3">
          <h3 className="text-xl font-semibold mb-4">Resources</h3>
          <Link className={linkClasses} href="/about/governance">
            Project Governance
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
          <a
            className={linkClasses}
            href="https://nebula-labs.atlassian.net/wiki/x/0YD5AQ"
            target="_blank"
          >
            Confluence
          </a>
        </div>
        <div className="flex flex-col items-start  gap-4 lg:ml-auto">
          <a
            className="mb-6 hover:scale-105 transition"
            href="https://discord.utdnebula.com/"
            target="_blank"
          >
            <Image src={Discord} alt="discord" width="200" height="60" />
          </a>
          <a
            className={linkClasses + ' flex items-center gap-2'}
            href="https://instagram.com/utdnebula"
            target="_blank"
          >
            <Image src={Instagram} alt="Instagram logo" width="30" height="30" />
            Instagram
          </a>
          <a
            className={linkClasses + ' flex items-center gap-2'}
            href="https://linkedin.com/company/utdnebula"
            target="_blank"
          >
            <Image src={LinkedIn} alt="LinkedIn logo" width="30" height="30" />
            LinkedIn
          </a>
          <a
            className={linkClasses + ' flex items-center gap-2'}
            href="https://github.com/utdnebula"
            target="_blank"
          >
            <Image src={GitHub} alt="GitHub logo" width="30" height="30" />
            GitHub
          </a>
        </div>
      </div>
      <div className="md:pt-40 pt-10">
        <div className="border-t-2 border-white" />
        <div className="flex md:flex-row flex-col justify-between gap-8 pt-8">
          <div className="flex gap-x-8 gap-y-1 justify-around md:justify-normal flex-wrap">
            <Link className={linkClasses} href="/legal/privacy-policy.txt">
              Privacy Policy
            </Link>
            <Link className={linkClasses} href="/sitemap.xml">
              Sitemap
            </Link>
          </div>
          <p className="md:text-right text-center text-xs">
            © {new Date().getFullYear()} Nebula Labs Maintainers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
