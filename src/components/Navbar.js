import reactLogo from "../images/react-icon-small.png";

export default function Navbar(){
  return (
    <nav> 
      <img className = "nav--logo" src={reactLogo} alt="cannot display"/>
      <h3 className="nav--logoText">ReactFacts</h3>
      <h4 className="nav--titleText">React Course - Project 1</h4>
    </nav>
  ) 
}
