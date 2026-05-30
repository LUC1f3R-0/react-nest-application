import Button from "../../components/ui/Button/Button";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        
        <div>
          <label>
            <Button className="bg-blue-500 text-amber-50 cursor-pointer hover:hover:bg-blue-700"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </label>
        </div>
        
          <div />
        <label>
          <Button className="bg-blue-500 text-amber-50 cursor-pointer hover:hover:bg-blue-700"
            onClick={()=>navigate('/register')}
          >
            Register page
          </Button>
        </label>
        
      </div>
    </>
  )
}

export default HomePage;