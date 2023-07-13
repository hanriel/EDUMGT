import Image from 'next/image'
import AsideHeaderLogo from './AsideHeaderLogo'
import Navigation from './Navigation'

export default function Aside() {
  return (
    <aside className="aside">
    <header className='header'>
    <AsideHeaderLogo/>
    </header>
    <nav>
    <Navigation/>
    </nav>
    </aside>
  )
}