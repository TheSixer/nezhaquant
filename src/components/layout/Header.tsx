import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Nezha Quant
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-blue-200">首页</Link></li>
            <li><Link href="/strategies" className="hover:text-blue-200">交易策略</Link></li>
            <li><Link href="/market" className="hover:text-blue-200">市场分析</Link></li>
            <li><Link href="/about" className="hover:text-blue-200">关于</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header 