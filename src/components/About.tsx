import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-20 py-20 w-[90%] max-w-[600px] px-4'>
      <h2
        className='
          text-xl
          md:text-3xl
          text-center
          font-bold
        '>
        Veja por que fazer a OTIMIZAÇÃO e o GERENCIAMENTO
        do seu perfil no Google
      </h2>

      <ul className='list-disc mx-auto font-medium flex flex-col gap-4 md:text-xl text-pink-900'>
        <li>
          Amplifique sua presença no Google e online;
        </li>
        <li>
          Aumente leads e conversões;
        </li>
        <li>
          Aumente o engajamento;
        </li>
        <li>
          Melhore a sua reputação online;
        </li>
        <li>
          Impulsione as classificações locais;
        </li>
        <li>
          Ganhe uma vantagem competitiva;
        </li>
        <li>
          Tenha acesso a relatórios detalhados com todo tipo de interação (termos mais usados para encontrar o seu negócio)
        </li>
      </ul>

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
  )
}

export default About