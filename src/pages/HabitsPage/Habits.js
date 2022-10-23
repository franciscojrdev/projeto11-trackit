import NavBar from "../../components/NavBar/NavBar";
import { HabitsBack } from "../../components/StyledComponents/HabitsBack";
import logo from "../../assets/images/logo.png";
import Footer from "../../components/Footer/Footer";

export default function Habits(){
    return (
        <HabitsBack>
            <NavBar logo={logo}/>
            <Footer/>
        </HabitsBack>
    )
}