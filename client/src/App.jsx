import Login from './Component/Login'
import PhoneIcons from './Component/PhoneIcons'
import Footer from './Component/Footer'
function App() {
    return (
        <div>
            <div className="w-screen h-screen m-auto justify-center items-center bg-[#fafafa] flex gap-8">
                <PhoneIcons />
                <Login />
            </div>
            <Footer />
        </div>
    )
}

export default App
