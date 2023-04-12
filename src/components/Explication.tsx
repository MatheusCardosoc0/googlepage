import React from 'react'

import {
  FaHandsHelping,
  FaGoogle,
  FaImage
} from 'react-icons/fa'

const Explication = () => {
  return (
    <div
      className='
        py-12
        flex
        flex-col
        gap-20
        justify-center
        items-center
      '>
      <div className=' w-[90%]
        max-w-[600px] flex flex-col gap-20'>
        <h2
          className='
          text-xl
          md:text-4xl
          font-bold
          text-center
        '>
          O perfil do Google é o seu espaço de vendas
        </h2>

        <div
          className='
          text-justify
          md:text-xl
          flex
          flex-col
          gap-28
          font-medium
        '>
          <p>
            O Google Meu Negócio explodiu nos últimos anos para se tornar uma das ferramentas mais poderosas e de alto desempenho em SEO local. Aproveite ao máximo seu perfil com a ajuda de nossa equipe especializada!
          </p>

          <p className='text-center text-lg'>
            É exatamente por isso que você precisa garantir que uma grande parte do seu esforço seja dedicada ao seu perfil do Google e à primeira impressão que ele pode causar.
          </p>
        </div>
      </div>

      <div
        className='
          flex
          flex-col
          md:flex-row
          justify-between
          gap-4
          w-full
          text-sm
        '>
        <div className='flex flex-col gap-3 items-center mx-auto'>
          <FaGoogle className='text-6xl' />

          <span className='text-sky-700 text-xl'>
            Chame a atenção
          </span>

          <p
            className='
              w-[90%]
              max-w-[400px]
              text-center
            '>
            Trabalhando desde os pontos principais até os detalhes mais sutis, a otimização e gerenciamento profissional, incluem cada parte do perfil em seus mais sutis detalhes.
          </p>
        </div>

        <div className='flex flex-col gap-3 items-center mx-auto'>
          <FaHandsHelping className='text-6xl' />

          <span className='text-sky-700 text-xl'>
            Conecte-se com os clientes
          </span>

          <p
            className='
              w-[90%]
              max-w-[400px]
              text-center
            '>
            Os perfis são oportunidades valiosas para mostrar aos clientes quem você é. Eles irão julgá-lo com base na frequência de suas atualizações, sua forma como interage com as avaliações e comentários. Nosso serviço oferece ajuda quando se trata de responder a avaliações, responder às perguntas dos clientes e manter uma boa reputação.


          </p>
        </div>

        <div className='flex flex-col gap-3 items-center mx-auto'>
          <FaImage className='text-6xl' />

          <span className='text-sky-700 text-xl'>
            Perfil forte e completo
          </span>

          <p
            className='
              w-[90%]
              max-w-[400px]
              text-center
            '>
            É importante otimizar e gerenciar todos os recursos do Google Meu Negócio para obter uma vantagem sobre os concorrentes. Usar todos os recursos e ficar em dia com a manutenção são a alavanca de que seu negócio precisa, e nós sabemos como fazer isso da melhor forma possível.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Explication