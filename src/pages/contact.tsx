import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const linkClasses = 'text-2xl underline decoration-transparent hover:decoration-inherit transition';

const Contact = () => (
  <>
    <Head>
      <title>Contact - Nebula Labs</title>
      <link rel="canonical" href="https://www.utdnebula.com/about/contact" key="canonical" />
      <meta property="og:url" content="https://www.utdnebula.com/about/contact" />
    </Head>
    <Header text="Contact" />
    <div className="px-8 lg:px-16 xl:px-32 flex flex-col items-center gap-12">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-2xl">
          Discord is the best place to stay up to date with our latest updates and events.
        </h2>
        <a
          className="hover:scale-105 transition"
          href="https://discord.gg/tcpcnfxmeQ"
          target="_blank"
        >
          <Image src="/join-discord-black.svg" alt="discord" width="200" height="60" />
        </a>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-2xl">You can also find us on these platforms:</h2>
        <a
          className={linkClasses + ' flex items-center gap-2'}
          href="https://instagram.com/utdnebula"
          target="_blank"
        >
          <Image src="/instagram-black.svg" alt="Instagram logo" width="30" height="30" />
          Instagram
        </a>
        <a
          className={linkClasses + ' flex items-center gap-2'}
          href="https://linkedin.com/company/utdnebula"
          target="_blank"
        >
          <Image src="/linkedin-black.svg" alt="LinkedIn logo" width="30" height="30" />
          LinkedIn
        </a>
        <a
          className={linkClasses + ' flex items-center gap-2'}
          href="https://github.com/utdnebula"
          target="_blank"
        >
          <Image src="/github-black.svg" alt="GitHub logo" width="30" height="30" />
          GitHub
        </a>
      </div>
      <h2 className="text-2xl">
        {'Contacts for our officers, division heads, and project leads can be found on the '}
        <Link
          href="/about/governance"
          className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
        >
          governance page
        </Link>
        .
      </h2>
    </div>
    <Footer royalBg={false} />
  </>
);

export default Contact;
