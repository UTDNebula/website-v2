import Image from 'next/image';
import Link, { LinkProps } from 'next/link';

interface StyledNextLinkBaseProps {
  className?: string;
  children?: React.ReactNode;
}

type StyledNextLinkProps = StyledNextLinkBaseProps & LinkProps;

const StyledNextLink = (props: StyledNextLinkProps) => {
  const { className, children, ...rest } = props;
  return (
    <Link
      {...props}
      className={
        'underline decoration-transparent hover:decoration-inherit transition ' + className ?? ''
      }
    >
      {children ?? null}
    </Link>
  );
};

interface StyledALinkProps {
  className?: string;
  children?: React.ReactNode;
  href?: string;
}

const StyledALink = (props: StyledALinkProps) => (
  <a
    href={props.href ?? ''}
    target="_blank"
    className={
      'underline decoration-transparent hover:decoration-inherit transition ' + props.className ??
      ''
    }
  >
    {props.children ?? null}
  </a>
);

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
          <StyledNextLink href="/about">
            <h3 className="text-xl font-semibold mb-4">About us</h3>
          </StyledNextLink>
          <StyledNextLink href="/about/mission">Mission</StyledNextLink>
          <StyledNextLink href="/about/governance">Project Governance</StyledNextLink>
          <StyledNextLink href="/membership">Membership</StyledNextLink>
          <StyledNextLink href="/newsletter">Newsletter</StyledNextLink>
          <StyledNextLink href="/contact">Contact Us</StyledNextLink>
        </div>
        <div className="flex flex-col items-start gap-3">
          <StyledNextLink href="/projects">
            <h3 className="text-xl font-semibold mb-4">Projects</h3>
          </StyledNextLink>
          <StyledNextLink href="https://planner.utdnebula.com/" target="_blank">
            Planner
          </StyledNextLink>
          <StyledNextLink href="https://jupiter.utdnebula.com/" target="_blank">
            Jupiter
          </StyledNextLink>
          <StyledNextLink href="https://trends.utdnebula.com/" target="_blank">
            Trends
          </StyledNextLink>
          <StyledNextLink
            href="https://chromewebstore.google.com/detail/skedge/ghipfanpcodcmkjacmmfjdmccdiaahab"
            target="_blank"
          >
            Skedge
          </StyledNextLink>
          <StyledNextLink href="https://github.com/UTDNebula/nebula-api" target="_blank">
            API & Platform
          </StyledNextLink>
        </div>
        <div className="flex flex-col items-start gap-3">
          <h3 className="text-xl font-semibold mb-4">Resources</h3>
          <StyledNextLink href="/resources/roles">Roles</StyledNextLink>
          <StyledNextLink href="/about/governance">Project Governance</StyledNextLink>
          <StyledNextLink href="/resources/meetings">Meetings</StyledNextLink>
          <StyledNextLink href="/resources/design-guide">Design Guide</StyledNextLink>
        </div>
        <div className="flex flex-col items-start  gap-4 lg:ml-auto">
          <a className="mb-6 hover:scale-105 transition" href="https://discord.gg/tcpcnfxmeQ">
            <Image src={'/join-discord-' + color + '.svg'} alt="discord" width="200" height="60" />
          </a>
          <StyledALink className="flex items-center gap-2" href="https://instagram.com/utdnebula">
            <Image
              src={'/instagram-' + color + '.svg'}
              alt="Instagram logo"
              width="30"
              height="30"
            />
            Instagram
          </StyledALink>
          <StyledALink
            className="flex items-center gap-2"
            href="https://linkedin.com/company/utdnebula"
          >
            <Image src={'/linkedin-' + color + '.svg'} alt="LinkedIn logo" width="30" height="30" />
            LinkedIn
          </StyledALink>
          <StyledALink className="flex items-center gap-2" href="https://github.com/utdnebula">
            <Image src={'/github-' + color + '.svg'} alt="GitHub logo" width="30" height="30" />
            GitHub
          </StyledALink>
        </div>
      </div>
      <div className="md:pt-40 pt-10">
        <div className={'border-t-2 ' + (royalBg ? 'border-white' : 'border-black')} />
        <div className="flex md:flex-row flex-col justify-between gap-8 pt-8">
          <div className="flex gap-x-8 gap-y-1 justify-around md:justify-normal flex-wrap">
            <StyledNextLink href="/legal/terms-of-service.txt">Terms of Service</StyledNextLink>
            <StyledNextLink href="/legal/privacy-policy.txt">Privacy Policy</StyledNextLink>
            <StyledNextLink href="/sitemap.xml">Sitemap</StyledNextLink>
          </div>
          <div className="md:text-right text-center text-xs">
            <p>© 2023 Nebula Labs Maintainers. All rights reserved.</p>
            <p>
              Site design by{' '}
              <StyledALink className="font-bold" href="https://hilary-nguyen.com/">
                Hilary Nguyen
              </StyledALink>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
