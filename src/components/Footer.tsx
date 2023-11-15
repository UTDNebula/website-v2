import Image from 'next/image';
import Link, { LinkProps } from 'next/link';

interface StyledLinkProps {
  useNextLink?: boolean;
  className: string;
  children: React.ReactNode;
}

const StyledLink = (props: StyledLinkProps & LinkProps) => {
  const { useNextLink, className, children, ...rest } = props;
  if (typeof useNextLink == 'undefined' || useNextLink) {
    return (
      <Link
        {...props}
        className={
          'underline decoration-transparent hover:decoration-inherit transition ' + className ?? ''
        }
      >
        {children}
      </Link>
    );
  }
  return (
    <a
      {...props}
      className={
        'underline decoration-transparent hover:decoration-inherit transition ' + className ?? ''
      }
    >
      {children}
    </a>
  );
};

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
      <div className="flex justify-between py-16 sm:py-28 flex-wrap gap-8">
        <Image src={'/logo-name-' + color + '.svg'} alt="logo" width="360" height="53" />
        <a href="#" className="order-first sm:order-1">
          <div
            className={
              'items-center flex flex-col rounded-full p-2 transition border ' +
              (royalBg ? 'border-white/0 hover:border-white' : 'border-black/0 hover:border-black')
            }
          >
            <button>
              <Image
                src={'/arrow-' + color + '.svg'}
                alt="arrow"
                width="20"
                height="20"
                className="rotate-180"
              />
            </button>
            <p>Top</p>
          </div>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <div className="flex flex-col items-start gap-3">
          <StyledLink href="/about">
            <h3 className="text-xl font-semibold mb-4">About us</h3>
          </StyledLink>
          <StyledLink href="/about/mission">Mission</StyledLink>
          <StyledLink href="/about/governace">Project Governance</StyledLink>
          <StyledLink href="/membership">Membership</StyledLink>
          <StyledLink href="/newsletter">Newsletter</StyledLink>
          <StyledLink href="/contact">Contact Us</StyledLink>
        </div>
        <div className="flex flex-col items-start gap-3">
          <StyledLink href="/projects">
            <h3 className="text-xl font-semibold mb-4">Projects</h3>
          </StyledLink>
          <StyledLink href="/projects/planner">Planner</StyledLink>
          <StyledLink href="/projects/jupiter">Jupiter</StyledLink>
          <StyledLink href="/projects/skedge">Skedge</StyledLink>
          <StyledLink href="/projects/trends">Trends</StyledLink>
          <StyledLink href="/projects/api">API & Platform</StyledLink>
        </div>
        <div className="flex flex-col items-start gap-3">
          <h3 className="text-xl font-semibold mb-4">Resources</h3>
          <StyledLink href="/">Roles</StyledLink>
          <StyledLink href="/about/governace">Project Governance</StyledLink>
          <StyledLink href="/">Meetings</StyledLink>
          <StyledLink href="/">Design Guide</StyledLink>
        </div>
        <div className="flex flex-col items-start  gap-4 lg:ml-auto">
          <a className="mb-6 hover:scale-105 transition" href="https://discord.gg/tcpcnfxmeQ">
            <Image src={'/join-discord-' + color + '.svg'} alt="discord" width="200" height="60" />
          </a>
          <StyledLink
            useNextLink={false}
            className="flex items-center gap-2"
            href="https://instagram.com/utdnebula"
          >
            <Image
              src={'/instagram-' + color + '.svg'}
              alt="Instagram logo"
              width="30"
              height="30"
            />
            Instagram
          </StyledLink>
          <StyledLink
            useNextLink={false}
            className="flex items-center gap-2"
            href="https://linkedin.com/company/utdnebula"
          >
            <Image src={'/linkedin-' + color + '.svg'} alt="LinkedIn logo" width="30" height="30" />
            LinkedIn
          </StyledLink>
          <StyledLink
            useNextLink={false}
            className="flex items-center gap-2"
            href="https://github.com/utdnebula"
          >
            <Image src={'/github-' + color + '.svg'} alt="GitHub logo" width="30" height="30" />
            GitHub
          </StyledLink>
        </div>
      </div>
      <div className="md:pt-40 pt-10">
        <div className={'border-t-2 ' + (royalBg ? 'border-white' : 'border-black')} />
        <div className="flex md:flex-row flex-col justify-between gap-8 pt-8">
          <div className="flex gap-x-8 gap-y-1 justify-around md:justify-normal flex-wrap">
            <StyledLink href="/">Terms of Service</StyledLink>
            <StyledLink href="/">Privacy Policy</StyledLink>
            <StyledLink href="/">Security</StyledLink>
            <StyledLink href="/">Sitemap</StyledLink>
          </div>
          <div className="md:text-right text-center text-xs">
            <p>© 2023 Nebula Labs Maintainers. All rights reserved.</p>
            <p>
              Site design by{' '}
              <StyledLink
                useNextLink={false}
                className="font-bold"
                href="https://hilary-nguyen.com/"
              >
                Hilary Nguyen
              </StyledLink>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
