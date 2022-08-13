import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <nav className="flex flex-rows bg-green-500 px-10 md:px-20 py-10 text-black font-bold text-2xl">
        <Link href='/'>
          <a>けいとくらふと情報局</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
