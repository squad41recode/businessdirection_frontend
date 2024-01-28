// "use cliente";
import Image from "next/image";
import { apiRoutes } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "@/styles/Dashboard.module.css"

const Sidebar = () => {
const menuItems = apiRoutes;
const pathname = usePathname();

  return (
    <aside className={` ${style.sidebar} `}>
      <div className={` ${style.sidebarPerfil} `}>
        <Image
          className=""
          src="/img/default-profile-picture.png"
          alt="foto perfil adm" 
          width={65}
          height={20}
        />
        <div className="">
          <span className="">Administrador</span>
        </div>
      </div>
      <ul className={` ${style.sidebarNavLink} `} >
        {menuItems.map((item) => (
          <li key={item.rotaApi}>
            <Link href={item.rotaApi}  className={`${style.itemLink} ${pathname === '/admin/' + item.rotaApi ? style.active : ''}`}>
              {item.nomePlural}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
