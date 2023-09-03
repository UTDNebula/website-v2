function WhoWeAre() {
  return (
    <div className="xl:pt-32 px-40 flex justify-between">
      <div className="w-[340px]">
        <h1 className="font-inter font-bold text-[80px] text-transparent bg-clip-text bg-gradient-to-br from-[#3634BB] via-royal to-[#6166FA]">
          Who We Are
        </h1>
      </div>
      <div>
        <h3 className="font-inter text-[40px] w-[600px]">
          We&apos;re a community of student developers and designers crafting
          innovative tools to empower UT Dallas students, one galaxy at a time.
        </h3>
        <button className="mt-6 p-3 text-white bg-royal rounded-full hover:bg-[#3634BB] transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default WhoWeAre;
