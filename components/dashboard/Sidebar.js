// "use cliente";
import Image from "next/image";
import { apiRoutes } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles/Dashboard.module.css"

const Sidebar = () => {
const menuItems = apiRoutes;
const pathname = usePathname()
  return (
    <div className={`${styles.itemLink} ${styles.Sidebar} `}>
      <div>
        <Image
          className=""
          src="/default-avatar.png"
          alt=""
          width="50"
          height="50"
        />
        <div className="">
          <span className="">Administrador</span>
        </div>
      </div>
      <ul>
        {menuItems.map((item) => (
            <Link href={item.rotaApi} className={`${styles.itemLink} ${pathname === item.rotaApi && styles.active}`}>
              {item.nomePlural}
            </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
