import MakeMenu from "../components/MakeMenu";
import About from "../components/About";
import Services from "../components/Services";
import BrandBanner from "../components/BrandBanner";

function Home() {
    return (
        <>
        <MakeMenu />
        <About />
        {/* <Services /> */}
        <BrandBanner />
        </>
    )
}

export default Home