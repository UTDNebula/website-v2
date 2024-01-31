import Header from '@/components/Header';
import Footer from '@/components/Footer';

const _404 = () => (
  <div className="bg-white">
    <Header text="Not Found" />
    <h2 className="px-8 lg:px-16 xl:px-32 pb-12 text-5xl font-bold text-center">
      The requested page was not found on this site.
    </h2>
    <Footer royalBg={false} />
  </div>
);

export default _404;
