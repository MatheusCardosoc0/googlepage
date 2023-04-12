import React from 'react'

const Footer = () => {
  return (
    <footer className='py-20 bg-gradient-to-tr from-amber-600 to-sky-600 rounded-tr-[30%] w-full text-white'>

      <div className='flex justify-center flex-col items-center gap-12 w-[90%] max-w-[700px] mx-auto'>
        <h3
          className='text-2xl md:text-3xl px-20 font-bold text-center'>
          Faça parte do grupo de clientes que já começaram a conquistar a transformação no Google!
        </h3>

        <p>
          Seu concorrente já pode estar melhor posicionado que você, mas ainda dá tempo!
        </p>
        <a
          target='_blank'
          href='https://keepsolucoes.online/'
          className='
          bg-pink-600
          p-4
          text-2xl
          font-bold
          text-white
          rounded-3xl
          hover:brightness-150
          cursor-pointer
        '>
          Quero contratar
        </a>
      </div>
    </footer>
  )
}

export default Footer