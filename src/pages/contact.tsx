import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';
import Image from 'next/image';
import Discord from '@/../public/icons/join-discord-black.svg';
import Instagram from '@/../public/icons/instagram-black.svg';
import LinkedIn from '@/../public/icons/linkedin-black.svg';
import GitHub from '@/../public/icons/github-black.svg';
import Gmail from '@/../public/icons/gmail-black.svg';

const linkClasses = 'text-2xl underline decoration-transparent hover:decoration-inherit transition';

const Contact = () => (
  <>
    <Head>
      <title>Contact - Nebula Labs</title>
      <link rel="canonical" href="https://www.utdnebula.com/about/contact" key="canonical" />
      <meta property="og:url" content="https://www.utdnebula.com/about/contact" />
    </Head>
    <Header text="Contact Us" />
    <div className="px-8 lg:px-16 xl:px-32 flex flex-col items-center gap-12">
      <div className="flex flex-col items-center gap-12">
        <h2 className="text-2xl gap-2">
          Discord is the best place to stay up to date with our latest updates and events.
        </h2>
        <a
          className="hover:scale-105 transition"
          href="https://discord.gg/tcpcnfxmeQ"
          target="_blank"
        >
          <Image src={Discord} alt="discord" width="200" height="60" />
        </a>
      </div>
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-2xl">You can also find us on these platforms:</h2>
        <div className="flex flex-row items-center gap-12">
          <a
            className={linkClasses + ' flex items-center gap-2'}
            href="https://instagram.com/utdnebula"
            target="_blank"
          >
            <Image src={Instagram} alt="Instagram logo" width="30" height="30" />
          </a>
          <a
            className={linkClasses + ' flex items-center gap-2'}
            href="https://linkedin.com/company/utdnebula"
            target="_blank"
          >
            <Image src={LinkedIn} alt="LinkedIn logo" width="30" height="30" />
          </a>
          <a
            className={linkClasses + ' flex items-center gap-2'}
            href="https://github.com/utdnebula"
            target="_blank"
          >
            <Image src={GitHub} alt="GitHub logo" width="30" height="30" />
          </a>
          <a
            className={linkClasses + ' flex items-center gap-2'}
            href="mailto:leadership@utdnebula.com"
            target="_blank"
          >
            <Image src={Gmail} alt="GitHub logo" width="30" height="30" />
          </a>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default Contact;
