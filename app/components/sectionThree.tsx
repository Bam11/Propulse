import { FaArrowLeft, FaChevronRight } from 'react-icons/fa6'
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from 'react-router';

export default function sectionThree() {
  return (
    <div className="max-w-[1220px] mx-auto mb-[150px]">
      <h2 className="font-bold text-center text-[40px] lg:text-[48px] leading-[52px] mb-[45px]">
        Nos clients en parlent le mieux
      </h2>

      <div className="px-5 grid place-items-center gap-6 mb-13">
        <div className="sm:flex gap-5 hidden items-center justify-center">
          <div className="border border-gray-200 p-4 rounded-xl">
            <FaArrowLeft size={18} className="text-gray-400" />
          </div>
          <div className="border border-gray-200 p-4 rounded-xl rotate-180">
            <FaArrowLeft size={18} className="text-gray-400" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-6 ">
          <div className="p-5 flex flex-col gap-8 items-center border border-gray-200 rounded-xl">
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
            <div className="flex items-center justify-center gap-2 p-2">
              <p className="underline">
                Lire l’étude de cas
              </p>
              <div className="border border-gray-200 p-2 rounded-lg">
                <FaChevronRight size={10} />
              </div>
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
              <p className="text-gray-400 text-center leading-[24px] h-[72px]">
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
          <div className="p-5 flex flex-col gap-8 items-center border border-gray-200 rounded-xl">
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
            <div className="flex items-center justify-center gap-2 p-2">
              <p className="underline">
                Lire l’étude de cas
              </p>
              <div className="border border-gray-200 p-2 rounded-lg">
                <FaChevronRight size={10} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid place-items-center">
        <Link to="/casestudy">
          <div className="flex gap-4 items-center bg-gradient-to-r from-[#be6ae9] via-[#ec6189] to-[#fca74b] py-3 px-6 rounded-lg cursor-pointer">
            <p className="text-white text-[16px] font-semibold">Lire toutes nos études de cas</p>
            <FiArrowUpRight size={18} className="text-white" /> 
          </div>
        </Link>
      </div>
    </div>
  )
}
