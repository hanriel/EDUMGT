import Image from "next/image"

export default function AsideHeaderLogo(){
    return (
        <a href="/" className="header__logo logo">
              <Image
                src="/images/logo.svg" className="logo__image"
                width={40}
                height={40}
                alt="EDUMGT LOGO"
              />
              <p className="logo__title">EDUMGT</p>
              <p className="logo__tagline">ver 0.2</p>
          </a>
    )
}