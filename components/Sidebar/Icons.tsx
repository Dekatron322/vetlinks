import Image from "next/image"
import Link from "next/link"

export const LogoIcon = () => (
  <section>
    <Link href="/" className="icon-style content-center">
      <Image src="Authimages/collapsed.svg" width={128} height={43} alt="dekalo" />
    </Link>
    <Link href="/" className="dark-icon-style content-center">
      <Image src="Authimages/collapsed.svg" width={128} height={43} alt="dekalo" />
    </Link>
  </section>
)

export const CollapsedLogoIcon = () => (
  <section>
    <Link href="/" className="icon-style content-center">
      <Image src="/Authimages/logoSmall.svg" width={40} height={43} alt="dekalo" />
    </Link>
    <Link href="/" className="dark-icon-style content-center">
      <Image src="/Authimages/logoSmall.svg" width={40} height={43} alt="dekalo" />
    </Link>
  </section>
)

export const DashboardIcon = ({ isActive }: { isActive: boolean }) => (
  <Image src={isActive ? "/AuthImages/Globe.svg" : "/AuthImages/Globe.svg"} alt="Dashboard" width={20} height={20} />
)

export const EstatesIcon = ({ isActive }: { isActive: boolean }) => (
  <Image src={isActive ? "/AuthImages/Users.svg" : "/AuthImages/Users.svg"} alt="Estates" width={20} height={20} />
)

export const HomeIcon = ({ isActive }: { isActive: boolean }) => (
  <Image src={isActive ? "/AuthImages/FilePlus.svg" : "/AuthImages/FilePlus.svg"} alt="Home" width={20} height={20} />
)

export const ChatIcon = ({ isActive }: { isActive: boolean }) => (
  <Image src={isActive ? "/AuthImages/Clock.svg" : "/AuthImages/Clock.svg"} alt="Utility" width={20} height={20} />
)

export const ServiceIcon = ({ isActive }: { isActive: boolean }) => (
  <Image src={isActive ? "/Icons/Utility-active.svg" : "/Icons/Utility.svg"} alt="Utility" width={20} height={20} />
)

export const SupportIcon = ({ isActive }: { isActive: boolean }) => (
  <Image src={isActive ? "/Icons/Utility-active.svg" : "/Icons/Support.svg"} alt="Utility" width={20} height={20} />
)

export const AdminIcon = ({ isActive }: { isActive: boolean }) => (
  <Image src={isActive ? "/Icons/Utility-active.svg" : "/Icons/Admin.svg"} alt="Utility" width={20} height={20} />
)

export const LogoutIcon = ({ isActive }: { isActive: boolean }) => (
  <Image src={isActive ? "/Icons/Utility-active.svg" : "/Icons/Logout.svg"} alt="Utility" width={20} height={20} />
)

export const PropertyIcon = ({ isActive }: { isActive: boolean }) => (
  <Image
    src={isActive ? "/AuthImages/BellSimple.svg" : "/AuthImages/BellSimple.svg"}
    alt="Utility"
    width={20}
    height={20}
  />
)

export const VisitorIcon = ({ isActive }: { isActive: boolean }) => (
  <Image src={isActive ? "/Icons/Visitor-active.svg" : "/Icons/Visitor.svg"} alt="Utility" width={20} height={20} />
)
