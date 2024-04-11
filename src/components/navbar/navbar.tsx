import { appleImg } from "../../lib/utils"

const NavBar = () => {
  return (
    <header>
        <nav>
            <img src={appleImg} alt="logo" width={20} height={24}/>
        </nav>
    </header>
  )
}

export default NavBar