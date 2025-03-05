const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Nezha Quant. 保留所有权利。</p>
        <div className="mt-4 space-x-4">
          <a href="/privacy" className="hover:text-blue-300">隐私政策</a>
          <a href="/terms" className="hover:text-blue-300">使用条款</a>
          <a href="/contact" className="hover:text-blue-300">联系我们</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer 