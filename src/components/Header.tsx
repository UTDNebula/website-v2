import Navbar from '@/components/Navbar';

interface Props {
  text: string;
}

const Header = (props: Props) => {
  return (
    <div className="bg-gradient-to-b from-royal to-white to-75%">
      <Navbar />
      <div className="px-8 h-[40vh] flex justify-center items-center">
        <h1 className="text-6xl font-bold text-royal text-center">{props.text}</h1>
      </div>
    </div>
  );
};

export default Header;
