export default function Navbar() {
  return (
    <nav className='flex justify-between p-6 max-w-6xl mx-auto'>
      <h1 className='font-bold'>Mobile Dev</h1>
      <div className='flex gap-6 text-sm'>
        <a href='#about'>About</a>
        <a href='#skills'>Skills</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
      </div>
    </nav>
  )
}
