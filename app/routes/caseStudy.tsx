import type React from 'react'
import { FaChevronRight } from 'react-icons/fa6'
import { Link } from 'react-router'

export default function caseStudy() {
  return (
    <>
      <header className="">
        <div className='fixed z-[9999] top-0 left-0 right-0 bg-[#020617] px-6 py-3 h-20'>
            <div className='max-w-[1220px] mx-auto'>
              <div className="flex items-center justify-between text-white py-2 ">
                <div className="flex items-center justify-center gap-3">
                  <img className="size-[30px] sm:size-[37px]" src="/images/logo.webp" alt="" />
                  <h2 className="text-xl sm:text-3xl font-extrabold">Propulse</h2>
                </div>
                <div className="p-2 hidden sm:flex items-center justify-between gap-8">
                  <Link className="text-sm" to="/">Fonctionnement</Link>
                  <Link className="text-sm" to="/">Succès clients</Link>
                  <Link className="text-sm" to="/">FAQ</Link>
                  <Link className="text-sm" to="/">Tarifs</Link>
                  <Link className="text-sm" to="/">Blog</Link>
                  <Link className="text-sm" to="/">Afiliation</Link>
                </div>
                <button type="button" className="flex gap-2 sm:gap-4 items-center bg-gradient-to-r from-[#be6ae9] via-[#ec6189] to-[#fca74b] py-1 px-2 sm:py-2 sm:px-4 rounded-lg">
                  <div className="size-[23px]">
                    <img className="w-full rounded-full" src="/images/image15.webp" alt="" />
                  </div>
                  <p className="text-white text-[12px] sm:text-[16px] font-semibold">Demander une démo</p>
                  <FaChevronRight size={15} className="text-white" />
                </button>
              </div>
            </div>
        </div>

      </header>
      <main className="">
        <div className="bg-[url('/images/bg.webp')] bg-cover w-full h-[440px] bg-[#2d293a] text-white mt-20">
          <div className="max-w-[1220px] mx-auto flex flex-col items-center gap-4">
            <div className='bg- rounded-3xl p-1 mt-16'>
              <div className="flex gap-2 items-center justify-center bg-gradient-to-r from-[#b36ae9]/30 via-[#ec6189]/10 to-[#fca74b]/10  px-2 py-1 rounded-3xl">
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.99965 10.8907L3.60648 12.8781C3.45658 12.9708 3.29986 13.0106 3.13634 12.9973C2.97281 12.9841 2.82972 12.9311 2.70708 12.8384C2.58443 12.7456 2.48904 12.6298 2.42091 12.491C2.35277 12.3521 2.33915 12.1963 2.38003 12.0235L3.27942 8.26742L0.274623 5.74347C0.138351 5.62423 0.0533171 5.4883 0.0195216 5.33567C-0.0142739 5.18304 -0.00418977 5.03412 0.049774 4.88891C0.103738 4.7437 0.185501 4.62446 0.295064 4.53118C0.404627 4.43791 0.554526 4.37829 0.744762 4.35232L4.71028 4.01447L6.24334 0.476967C6.31148 0.317978 6.41722 0.198736 6.56058 0.119242C6.70394 0.0397471 6.8503 0 6.99965 0C7.14901 0 7.29536 0.0397471 7.43872 0.119242C7.58208 0.198736 7.68783 0.317978 7.75596 0.476967L9.28902 4.01447L13.2545 4.35232C13.4453 4.37882 13.5952 4.43844 13.7042 4.53118C13.8133 4.62393 13.895 4.74317 13.9495 4.88891C14.004 5.03465 14.0144 5.18383 13.9806 5.33646C13.9468 5.48909 13.8615 5.62476 13.7247 5.74347L10.7199 8.26742L11.6193 12.0235C11.6602 12.1958 11.6465 12.3516 11.5784 12.491C11.5103 12.6303 11.4149 12.7461 11.2922 12.8384C11.1696 12.9306 11.0265 12.9836 10.863 12.9973C10.6994 13.0111 10.5427 12.9714 10.3928 12.8781L6.99965 10.8907Z" fill="url(#paint0_linear_1264_5640)" />
                  <defs>
                    <linearGradient id="paint0_linear_1264_5640" x1="0.215332" y1="7.1" x2="14.1076" y2="7.1" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#00F090" />
                      <stop offset="1" stop-color="#009EFB" />
                    </linearGradient>
                  </defs>
                </svg>
                <p className="text-[16px] font-medium">
                  Exemples concrets de réussite
                </p>
              </div>
            </div>
            <h1 className="font-extrabold text-4xl leading-[120%] text-center sm:text-6xl">
              Nos études de cas clients
            </h1>
          </div>
        </div>

        <div className="max-w-[1220px] mx-auto -mt-45 mb-16">
          <div className=" flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="bg-white p-5 flex flex-col gap-8 items-center border border-gray-200 rounded-xl">
                <div className="bg-[#ff7900] w-[341px] h-[280px] rounded-xl flex items-center px-8">
                  <img src="/images/orange.webp" alt="" />
                </div>
                <div className="flex flex-col items-center gap-3">
                  <h2 className="text-3xl font-extrabold">Orange</h2>
                  <p className="bg-gray-200 text-[#6875f5] text-sm font-semibold py-1 px-2 rounded-lg">
                    +500 followers/mois
                  </p>
                  <p className="text-gray-400 text-center leading-[24px]">
                    A renforcé leur présence sur Instagram et <br />augmenté leur taux <br />d’engagement
                  </p>
                </div>
                <div className="w-full flex justify-center items-center bg-gradient-to-r from-[#be6ae9] via-[#ec6189] to-[#fca74b] py-3 px-6 rounded-lg cursor-pointer">
                  <p className="text-white text-[16px] font-semibold ">Lire toutes nos études de cas</p>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-8 items-center border border-gray-200 rounded-xl">
                <div className="bg-[#f9f4f1] w-[341px] h-[280px] rounded-xl flex items-center px-8">
                  <img src="/images/jade.webp" alt="" />
                </div>
                <div className="flex flex-col items-center gap-3">
                  <h2 className="text-3xl font-extrabold">Jade Patin Rivière</h2>
                  <p className="bg-gray-200 text-[#6875f5] text-sm font-semibold py-1 px-2 rounded-lg">
                    +450 followers/mois
                  </p>
                  <p className="text-gray-400 text-center leading-[24px]">
                    Comment Propulse a aidé Jade, neuro <br />psycho praticienne, à créer une communauté <br />fidèle et engagée
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2 p-2">
                  <p className="underline">
                    Lire l’étude de cas
                  </p>
                  <div className="border border-gray-200 p-2 rounded-lg">
                    <FaChevronRight size={10} />
                  </div>
                </div>
              </div>
              <div className="bg-white p-5 flex flex-col gap-8 items-center border border-gray-200 rounded-xl">
                <div className="bg-[#222633] w-[341px] h-[280px] rounded-xl flex items-center px-8">
                  <img src="/images/guy.webp" alt="" />
                </div>
                <div className="flex flex-col items-center gap-3">
                  <h2 className="text-3xl font-extrabold">Guy Hoquet</h2>
                  <p className="bg-gray-200 text-[#6875f5] text-sm font-semibold py-1 px-2 rounded-lg">
                    +450 followers/mois
                  </p>
                  <p className="text-gray-400 text-center leading-[24px]">
                    A renforcé leur nombre de followers sur <br />Instagram et augmenté leur nombre de <br />prospects
                  </p>
                </div>
                <div className="w-full flex justify-center items-center bg-gradient-to-r from-[#be6ae9] via-[#ec6189] to-[#fca74b] py-3 px-6 rounded-lg cursor-pointer">
                  <p className="text-white text-[16px] font-semibold ">Découvrir leur histoire</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="p-5 flex flex-col gap-8 items-center border border-gray-200 rounded-xl">
                <div className="bg-[#fae8dc] w-[341px] h-[280px] rounded-xl flex items-center px-8">
                  <img className='rounded-full' src="/images/wilma.webp" alt="" />
                </div>
                <div className="flex flex-col items-center gap-3">
                  <h2 className="text-3xl font-extrabold">Wilma</h2>
                  <p className="bg-gray-200 text-[#6875f5] text-sm font-semibold py-1 px-2 rounded-lg">
                    +450 followers/mois
                  </p>
                  <p className="text-gray-400 text-center leading-[24px]">
                    A développé sa clientèle sur Instagram tout <br />en améliorant son taux d’engagement
                  </p>
                </div>
                <div className="w-full flex justify-center items-center bg-gradient-to-r from-[#be6ae9] via-[#ec6189] to-[#fca74b] py-3 px-6 rounded-lg cursor-pointer">
                  <p className="text-white text-[16px] font-semibold ">Découvrir leur histoire</p>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-8 items-center border border-gray-200 rounded-xl">
                <div className="bg-[#cf1a21] w-[341px] h-[280px] rounded-xl flex justify-center items-center px-8">
                  <img className='size-[215px]' src="/images/tussok.webp" alt="" />
                </div>
                <div className="flex flex-col items-center gap-3">
                  <h2 className="text-[26px] font-extrabold">Tussock Jumper Wines</h2>
                  <p className="bg-gray-200 text-[#6875f5] text-sm font-semibold py-1 px-2 rounded-lg">
                    +450 followers/mois
                  </p>
                  <p className="text-gray-400 text-center leading-[24px]">
                    A développé sa clientèle sur Instagram tout <br />en améliorant son taux d’engagement
                  </p>
                </div>
                <div className="w-full flex justify-center items-center bg-gradient-to-r from-[#be6ae9] via-[#ec6189] to-[#fca74b] py-3 px-6 rounded-lg cursor-pointer">
                  <p className="text-white text-[16px] font-semibold ">Découvrir leur histoire</p>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-8 items-center border border-gray-200 rounded-xl">
                <div className="bg-[#e1d8cb] w-[341px] h-[280px] rounded-xl flex items-center px-8">
                  <img className='rounded-full' src="/images/organize.webp" alt="" />
                </div>
                <div className="flex flex-col items-center gap-3">
                  <h2 className="text-3xl font-extrabold">Organiz Me</h2>
                  <p className="bg-gray-200 text-[#6875f5] text-sm font-semibold py-1 px-2 rounded-lg">
                    +450 followers/mois
                  </p>
                  <p className="text-gray-400 text-center leading-[24px]">
                    A renforcé leur nombre de followers sur <br />Instagram et augmenté leur nombre de <br />prospects
                  </p>
                </div>
                <div className="w-full flex justify-center items-center bg-gradient-to-r from-[#be6ae9] via-[#ec6189] to-[#fca74b] py-3 px-6 rounded-lg cursor-pointer">
                  <p className="text-white text-[16px] font-semibold ">Découvrir leur histoire</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}
