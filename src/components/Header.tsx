import React from 'react'

const Header = () => {
  return (
    <header
      className='
        w-full
        px-4
        py-20
        bg-gradient-to-tr from-amber-500 via-pink-600 to-pink-600
        text-white
        rounded-bl-[200px]
        lg:rounded-bl-[400px]
        border-b-[12px]
        border-sky-500
      '>
      <div className='flex flex-col items-center gap-20 w-[95%] max-w-[600px] lg:max-w-[800px] mx-auto'>
        <h1
          className='
            text-2xl
            md:text-4xl
            lg:text-6xl
            font-bold
            text-center
          '>
          Gerenciamento de Google Meu Negócio
        </h1>
        <p
          className='
            font-semibold
            md:text-xl
            text-justify
            lg:text-2xl
          '>
          O Google Meu Negócio explodiu nos últimos anos para se tornar uma das ferramentas mais poderosas e de alto desempenho em SEO local. Aproveite ao máximo seu perfil com a ajuda de nossa equipe especializada!
        </p>

        <span
          className='
            text-green-300
            drop-shadow-[1px_1px_2px_black]
            text-sm
            text-center
            md:text-lg
          '>
          AVISO: O melhor investimento que você pode fazer na sua marca
        </span>
      </div>
    </header>
  )
}

export default Header