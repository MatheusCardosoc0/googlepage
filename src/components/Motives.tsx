import React from 'react'
import { AiFillEye, AiFillRocket } from 'react-icons/ai'
import { BsFillFileArrowUpFill, BsPersonLinesFill } from 'react-icons/bs'

const Motives = () => {
  return (
    <div className='py-20 w-full flex justify-center'>
      <div
        className='
          w-[90%]
          flex
          flex-col
          justify-center
          items-center
          gap-20
        '>
        <div className='flex flex-col gap-20 items-center justify-center w-full max-w-[600px] border-8 border-pink-500 p-8 rounded-xl text-black bg-[#ffffff] drop-shadow-[1px_1px_6px_black]'>
          <h3 className='text-xl text-center md:text-3xl font-bold'>
            POSTAGENS e ATUALIZAÇÕES para aumentar o engajamento
          </h3>

          <BsFillFileArrowUpFill className='text-6xl md:text-8xl text-pink-500 drop-shadow-[0px_0px_3px_#00eeff]' />

          <p className='md:font-semibold text-justify'>
            O Google Posts oferece uma oportunidade para criar publicações envolventes com conteúdo sobre promoções atuais, eventos, novos produtos ou serviços, etc. Essas publicações farão sua empresa se destacar e oferecerão um espaço para interagir diretamente com os clientes nos resultados da pesquisa. Podemos trabalhar com você para criar conteúdo atraente e incluir todos os recursos e detalhes corretos para não apenas obter mais engajamento, mas também mais negócios!
          </p>
        </div>

        <div className='flex flex-col gap-20 items-center justify-center w-full max-w-[600px] border-8 border-pink-500 p-8 rounded-xl text-black bg-[#ffffff] drop-shadow-[1px_1px_6px_black]'>
          <h3 className='text-xl text-center md:text-3xl font-bold'>
            REPUTAÇÃO ATIVA
            e gestão de relacionamento
          </h3>

          <BsPersonLinesFill className='text-6xl md:text-8xl text-pink-500 drop-shadow-[0px_0px_3px_#00eeff]' />

          <p className='md:font-semibold text-justify'>
            As Avaliações merecem atenção especial devido ao seu posicionamento de destaque no Perfil do Google. Desenvolvemos uma estratégia de revisão personalizada alinhada ao espírito do seu negócio e ajudamos a construir a lealdade à sua marca, enquanto influencia os usuários a se tornarem clientes. Nas Perguntas & Respostas antecipamos as necessidades dos usuários, publicando as respostas das perguntas frequentes antes mesmo que os clientes em potencial tenham a chance de perguntar.
          </p>
        </div>

        <div className='flex flex-col gap-20 items-center justify-center w-full max-w-[600px] border-8 border-pink-500 p-8 rounded-xl text-black bg-[#ffffff] drop-shadow-[1px_1px_6px_black]'>
          <h3 className='text-xl text-center md:text-3xl font-bold'>
            POSICIONAMENTO
            e além!
          </h3>

          <AiFillRocket className='text-6xl md:text-8xl text-pink-500 drop-shadow-[0px_0px_3px_#00eeff]' />

          <p className='md:font-semibold text-justify'>
            O gerenciamento foi especialmente desenvolvido para melhorar simultaneamente seu perfil no Google e o posicionamento local. Quando otimizamos o perfil, não estamos apenas almejando os principais fatores de classificação, mas também cobrindo outros aspectos que consolidam a sua presença digital e aumentam a confiabilidade e engajamento. Aproveite ao máximo seu perfil com a ajuda de nossa equipe especializada!
          </p>
        </div>

        <div className='flex flex-col gap-20 items-center justify-center w-full max-w-[600px] border-8 border-pink-500 p-8 rounded-xl text-black bg-[#ffffff] drop-shadow-[1px_1px_6px_black]'>
          <h3 className='text-xl text-center md:text-3xl font-bold'>
            MONITORAR e ELIMINAR o SPAM
            dos concorrentes
          </h3>

          <AiFillEye className='text-6xl md:text-8xl text-pink-500 drop-shadow-[0px_0px_3px_#00eeff]' />

          <p className='md:font-semibold text-justify'>
            Revisamos o Google Maps regularmente, verificando se há spam e táticas como preenchimento de palavras-chave, endereços falsos, perfis fantasmas, perfis repetidos e outras práticas inadequadas que manipulam os resultados da busca. Podemos ajudar a eliminar concorrentes desonestos e abrir novas oportunidades de classificação para o seu negócio.
          </p>
          <p className='md:font-semibold text-justify'>
            As marcas que aparecem no pacote de 3 unidades locais do Google (mapa) obtêm um aumento de 70% em cliques, em relação às marcas que não aparecem. Não deixe um spammer tomar o seu lugar!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Motives