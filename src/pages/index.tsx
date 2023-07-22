import Navbar from "@/components/Navbar"
import Image from "next/image"
import Circles from "@/../public/circles.svg"
import Blob from "@/components/Blob"
import Footer from "@/components/Footer"

const Header = () => (
    <div className="h-screen" >
        <div className="absolute -z-30 w-full h-full">
            <Blob className="-left-[10%] -top-[10%]" color="periwinkle" size="medium"  />
            <Blob className="-right-[15%] -top-[10%]" color="blue-1" size="medium"  />
            <Blob className="-left-[20%] top-[20%]" color="blue-1" size="large"  />
            <Blob className="left-[20%] -top-[10%]" color="926FDB" size="large"  />
            <Blob className="left-[30%] top-[30%]" color="pink" size="large"  />
            <Blob className="left-[70%] top-[30%]" color="orange" size="medium"  />
        </div>
        <Image src={Circles} alt={''} priority className="absolute -z-20 h-auto w-full opacity-50" />
        <div className="absolute -z-10 w-full h-full opacity-75">
            <Blob className="-left-[20%] top-[35%]" color="4835BC" size="large"  />
            <Blob className="right-[5%] -top-[10%]" color="4835BC" size="large"  />
        </div>
    
        <Navbar/>
        <main className="pt-32">
            hero content here
        </main>
    </div>
)

const Home = () => (
    <div>
        <Header/>
        {/* <div>who we are</div> */}
        {/* <div>projects</div> */}
        {/* <div>projects</div> */}
        {/* <div>testimonials</div> */}
        {/* <div>beliefs</div> */}
        {/* <div>cta card</div> */}
        <Footer/>
    </div>
)

export default Home