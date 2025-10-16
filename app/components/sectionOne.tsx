import React from 'react'

export default function SectionOne() {
  return (
    <main>
      <div className="max-w-[1220px] mx-auto mb-[150px] mt-10">
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-15  ">
          <h2 className="text-4xl font-bold text-center">
            Comment ça marche?
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-start px-[20px] gap-20 ">
            <div className="w-[320px] lg:w-[600px] lg:sticky top-0 ">
              <img
                className="w-full" src="images/video.png" alt="video"
                loading="lazy"
              />
            </div>
            <div className="flex justify-center items-center lg:items-start gap-15 ">
              <div className="h-[640px] w-[1px] bg-gradient-to-r from-purple-500 to-orange-400 transform"></div>
              <div className=" flex flex-col gap-10">
                <div className="relative">
                  <h2 className="font-bold text-lg leading-[25px] mb-4">
                    Nous connectons votre <br />compte Instagram à Propulse
                  </h2>
                  <p className="text-sm text-[#b1b9c5] font-normal">
                    Real-time tracking via your <br /> FirstPromoter dashboard
                  </p>
                    <div className="absolute top-0 -left-22 size-[50px] rounded-full bg-[linear-gradient(90deg,_rgba(179,_106,_233,_1)_0%,_rgba(236,_97,_137,_01)_50%,_rgba(252,_167,_75,_0.1)_100%)] p-[1px]">
                        <div className="size-full rounded-full bg-white">
                          <div className="size-full rounded-full grid place-items-center bg-[linear-gradient(90deg,_rgba(179,_106,_233,_0.2)_0%,_rgba(236,_97,_137,_0.1)_49.65%,_rgba(252,_167,_75,_0.02)_100%)] ">
                            <p className="bg-gradient-to-br from-purple-500 to-orange-400 bg-clip-text text-transparent text-xl">
                              01
                            </p>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                  <h2 className="font-bold text-lg leading-[25px] mb-4">
                    Nous identifions votre <br />audience cible
                  </h2>
                  <p className="text-sm text-[#b1b9c5] font-normal">
                    Seul ou avec notre équipe, choisissez <br />les comptes avec lesquels interagir.
                  </p>
                    <div className="absolute top-0 -left-22 size-[50px] rounded-full bg-[linear-gradient(90deg,_rgba(179,_106,_233,_1)_0%,_rgba(236,_97,_137,_01)_50%,_rgba(252,_167,_75,_0.1)_100%)] p-[1px]">
                        <div className="size-full rounded-full bg-white">
                          <div className="size-full rounded-full grid place-items-center bg-[linear-gradient(90deg,_rgba(179,_106,_233,_0.2)_0%,_rgba(236,_97,_137,_0.1)_49.65%,_rgba(252,_167,_75,_0.02)_100%)] ">
                            <p className="bg-gradient-to-br from-purple-500 to-orange-400 bg-clip-text text-transparent text-xl">
                              02
                            </p>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                  <h2 className="font-bold text-lg leading-[25px] mb-4">
                    Nous interagissons avec votre <br />audience cible
                  </h2>
                  <p className="text-sm text-[#b1b9c5] font-normal">
                    Notre technologie engage avec les <br />followers de votre audience.
                  </p>
                    <div className="absolute top-0 -left-22 size-[50px] rounded-full bg-[linear-gradient(90deg,_rgba(179,_106,_233,_1)_0%,_rgba(236,_97,_137,_01)_50%,_rgba(252,_167,_75,_0.1)_100%)] p-[1px]">
                        <div className="size-full rounded-full bg-white">
                          <div className="size-full rounded-full grid place-items-center bg-[linear-gradient(90deg,_rgba(179,_106,_233,_0.2)_0%,_rgba(236,_97,_137,_0.1)_49.65%,_rgba(252,_167,_75,_0.02)_100%)] ">
                            <p className="bg-gradient-to-br from-purple-500 to-orange-400 bg-clip-text text-transparent text-xl">
                              03
                            </p>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                  <h2 className="font-bold text-lg leading-[25px] mb-4">
                    Votre audience cible découvre <br /> votre entreprise
                  </h2>
                  <p className="text-sm text-[#b1b9c5] font-normal">
                    Les followers reçoivent des notifications <br />et découvrent votre compte et votre <br />entreprise.
                  </p>
                    <div className="absolute top-0 -left-22 size-[50px] rounded-full bg-[linear-gradient(90deg,_rgba(179,_106,_233,_1)_0%,_rgba(236,_97,_137,_01)_50%,_rgba(252,_167,_75,_0.1)_100%)] p-[1px]">
                        <div className="size-full rounded-full bg-white">
                          <div className="size-full rounded-full grid place-items-center bg-[linear-gradient(90deg,_rgba(179,_106,_233,_0.2)_0%,_rgba(236,_97,_137,_0.1)_49.65%,_rgba(252,_167,_75,_0.02)_100%)] ">
                            <p className="bg-gradient-to-br from-purple-500 to-orange-400 bg-clip-text text-transparent text-xl">
                              04
                            </p>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                  <h2 className="font-bold text-lg leading-[25px] mb-4">
                    Vous convertissez votre <br />audience en clients
                  </h2>
                  <p className="text-sm text-[#b1b9c5] font-normal">
                    Votre compte est suivi par des followers <br />qualifiés et des clients potentiels.
                  </p>
                    <div className="absolute top-0 -left-22 size-[50px] rounded-full bg-[linear-gradient(90deg,_rgba(179,_106,_233,_1)_0%,_rgba(236,_97,_137,_01)_50%,_rgba(252,_167,_75,_0.1)_100%)] p-[1px]">
                        <div className="size-full rounded-full bg-white">
                          <div className="size-full rounded-full grid place-items-center bg-[linear-gradient(90deg,_rgba(179,_106,_233,_0.2)_0%,_rgba(236,_97,_137,_0.1)_49.65%,_rgba(252,_167,_75,_0.02)_100%)] ">
                            <p className="bg-gradient-to-br from-purple-500 to-orange-400 bg-clip-text text-transparent text-xl">
                              05
                            </p>
                          </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
