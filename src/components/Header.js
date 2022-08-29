import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex justify-between mb-10 pb-5 border-b-2 bg-indigo-600 p-5'>
      <Link to='/'>
        <span className='font-semibold text-2xl text-white'>Mini Blog</span>
      </Link>
      <nav className='flex items-center gap-10'>
        <Link to='/new-article' className='text-white bg-indigo-700 rounded px-3.5 py-1.5 hover:bg-indigo-800'>
          Create Article
        </Link>
        <Link to='/Formulaire' className='text-white bg-indigo-700 rounded px-3.5 py-1.5 hover:bg-indigo-800'>
          Create Category
        </Link>
      </nav>
    </header>
  )
}

export default Header