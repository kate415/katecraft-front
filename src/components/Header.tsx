import Link from 'next/link'

const Grass = () => {
  const grassColors: string[] = [
    'bg-green-500',
    'bg-green-600',
    'bg-green-700',
    'bg-green-800',
    'bg-green-900',
  ]
  const grassColor: string =
    grassColors[Math.floor(Math.random() * grassColors.length)]
  return <div className={`w-2 h-2 ${grassColor}`} />
}

const Header = () => {
  var grasses = []
  const cell: number = 625
  const row: number = 15
  for (var i = 0; i < row; i++) {
    var tmp = []
    for (var _ = 0; _ < cell; _++) {
      tmp.push(<Grass />)
    }
    grasses.push(tmp)
  }

  return (
    <header className='flex flex-row min-w-max overflow-hidden relative'>
      <div className='flex flex-col'>
        {grasses.map((rows, rowsIndex) => {
          return (
            <div key={rowsIndex} className='flex flex-row'>
              {rows.map((cell, cellIndex) => {
                return <div key={cellIndex}>{cell}</div>
              })}
            </div>
          )
        })}
        <Link href='/'>
          <a className='text-white font-bold text-2xl absolute px-10 md:px-20 py-10'>
            けいとくらふと情報局
          </a>
        </Link>
      </div>
    </header>
  )
}

export default Header
