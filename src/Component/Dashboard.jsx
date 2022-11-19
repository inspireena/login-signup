import { useNavigate } from "react-router-dom";
import Header1 from "./Header1";

function Dashboard() {
    const navigate = useNavigate()
    if (!localStorage.getItem('logged') ) {
        console.log('if worikg')
        window.location.replace('/login')
        return null;
    }
    const { name,phone,email}  = JSON.parse(localStorage.getItem('logged'));
    

      
    return (
        <div>
            <Header1/>
            
            </div>
    )
}
export default Dashboard;