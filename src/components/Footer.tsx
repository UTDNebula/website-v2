import Image from 'next/image';
import Link from 'next/link';

const linkClasses = 'underline decoration-transparent hover:decoration-inherit transition';

interface FooterProps {
  royalBg?: Boolean;
}

const Footer = (props: FooterProps) => {
  const { royalBg = true } = props;
  const color = royalBg ? 'white' : 'black';

  return (
    <footer
      className={
        (royalBg ? 'bg-royal text-white ' : 'text-black ') +
        'w-full rounded-t-[3.125rem] pb-10 md:px-40 px-8 text-sm'
      }
    >
      <div className="flex justify-between py-16 sm:py-28 gap-8">
        <Image
          src={'/logo-name-' + color + '.svg'}
          alt="logo"
          width="360"
          height="53"
          className="shrink min-w-0"
        />
        <button
          onClick={() => window.scrollTo(0, 0)}
          className={
            'items-center flex flex-col rounded-full p-2 transition border ' +
            (royalBg ? 'border-white/0 hover:border-white' : 'border-black/0 hover:border-black')
          }
        >
          <Image
            src={'/arrow-' + color + '.svg'}
            alt="arrow"
            width="20"
            height="20"
            className="rotate-180"
          />
          Top
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col items-start gap-3">
          <Link className={linkClasses} href="/about">
            <h3 className="text-xl font-semibold mb-4">About us</h3>
          </Link>
          <Link className={linkClasses} href="/about/mission">
            Mission
          </Link>
          <Link className={linkClasses} href="/about/governance">
            Project Governance
          </Link>
          <Link className={linkClasses} href="/membership">
            Membership
          </Link>
          <Link className={linkClasses} href="/newsletter">
            Newsletter
          </Link>
          <Link className={linkClasses} href="/contact">
            Contact Us
          </Link>
        </div>
        <div className="flex flex-col items-start gap-3">
          <Link className={linkClasses} href="/projects">
            <h3 className="text-xl font-semibold mb-4">Projects</h3>
          </Link>
          <Link className={linkClasses} href="/projects/planner">
            Planner
          </Link>
          <Link className={linkClasses} href="/projects/jupiter">
            Jupiter
          </Link>
          <Link className={linkClasses} href="/projects/trends">
            Trends
          </Link>
          <Link className={linkClasses} href="/projects/skedge">
            Skedge
          </Link>
          <Link className={linkClasses} href="/projects/api">
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
          <Link className={linkClasses} href="/resources/design-guide">
            Design Guide
          </Link>
        </div>
        <div className="flex flex-col items-start  gap-4 lg:ml-auto">
          <a
            className="mb-6 hover:scale-105 transition"
            href="https://discord.gg/tcpcnfxmeQ"
            target="_blank"
          >
            <Image src={'/join-discord-' + color + '.svg'} alt="discord" width="200" height="60" />
          </a>
          <a
            className={linkClasses + ' flex items-center gap-2'}
            href="https://instagram.com/utdnebula"
            target="_blank"
          >
            <Image
              src={'/instagram-' + color + '.svg'}
              alt="Instagram logo"
              width="30"
              height="30"
            />
            Instagram
          </a>
          <a
            className={linkClasses + ' flex items-center gap-2'}
            href="https://linkedin.com/company/utdnebula"
            target="_blank"
          >
            <Image src={'/linkedin-' + color + '.svg'} alt="LinkedIn logo" width="30" height="30" />
            LinkedIn
          </a>
          <a
            className={linkClasses + ' flex items-center gap-2'}
            href="https://github.com/utdnebula"
            target="_blank"
          >
            <Image src={'/github-' + color + '.svg'} alt="GitHub logo" width="30" height="30" />
            GitHub
          </a>
        </div>
      </div>
      <div className="md:pt-40 pt-10">
        <div className={'border-t-2 ' + (royalBg ? 'border-white' : 'border-black')} />
        <div className="flex md:flex-row flex-col justify-between gap-8 pt-8">
          <div className="flex gap-x-8 gap-y-1 justify-around md:justify-normal flex-wrap">
            <Link className={linkClasses} href="/legal/terms-of-service.txt">
              Terms of Service
            </Link>
            <Link className={linkClasses} href="/legal/privacy-policy.txt">
              Privacy Policy
            </Link>
            <Link className={linkClasses} href="/sitemap.xml">
              Sitemap
            </Link>
          </div>
          <div className="md:text-right text-center text-xs">
            <p>© 2023 Nebula Labs Maintainers. All rights reserved.</p>
            <p>
              Site design by{' '}
              <a
                className={linkClasses + ' font-bold'}
                href="https://hilary-nguyen.com/"
                target="_blank"
              >
                Hilary Nguyen
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
