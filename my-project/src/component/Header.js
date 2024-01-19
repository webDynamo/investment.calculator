
import logo from "../component/headerImage.png"
export default function Header(){
    return(
        <>
        <header className="flex flex-col justify-center items-center p-10 gap-5">
            <img className="h-32 w-32" src={logo} alt=""/>
            <h2 className="text-3xl font-extrabold">Investment Calculater</h2>
        </header>
        </>
    )
}