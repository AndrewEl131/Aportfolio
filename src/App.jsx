import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Mid from "./Components/Mid/Mid";

function App() {
  return(
    <div className='w-full min-h-screen bg-[#0C0F11] text-[#A8ADA2] flex flex-col gap-[2rem] lg:gap-[3.5rem] font-["Bebas_Neue",_sans-serif]'>
        <Header />
        <div className="w-full h-[90vh] flex justify-center ">
            <div className="w-[90%] lg:w-[60%] h-full ">
                <Mid />
                <Footer />
            </div>
        </div>
    </div>
  );
}

export default App;
