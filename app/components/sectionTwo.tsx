import React from 'react'
import { FaChevronRight, FaRegUser } from 'react-icons/fa6';
import { MdDone } from 'react-icons/md';

export default function () {
  return (
    <div>
      <div className="max-w-[1220px] mx-auto mb-[150px]">
        <h2 className="font-bold text-center text-[40px] lg:text-[48px] leading-[52px] mb-[45px]">
          Automatisez votre acquisition clients sur Instagram
        </h2>

        <div className="px-5 space-y-15">
          <div className="flex flex-col lg:flex-row justify-between gap-5 mb-6">
            <div className="bg-[url('/images/bg.webp')] bg-cover bg-[#21263a] rounded-2xl px-7 flex flex-col lg:flex-row gap-22 overflow-hidden">
              <div className="relative text-white py-7">
                <h2 className="font-bold text-lg mb-4">Acquisition client - en <br /> automatique</h2>
                <p className="text-sm font-medium">
                  Nous ciblons vos futurs clients, vous <br />obtenez de vrais followers, des <br />opportunités professionnelles et plus <br />d'engagement.
                </p>

                <div className="absolute lg:-left-13 lg:bottom-9 -bottom-20 flex gap-[20px]">
                  <div className="bg-[#e5e7eb]/10 opacity-20 size-[70px] min-w-[70px] p-5 border-2 border-[#e5e7eb]/10 rounded-lg">
                    <FaRegUser size={20} className="text-white/20" />
                  </div>
                  <div className="bg-[#e5e7eb]/10 opacity-40 size-[70px] min-w-[70px] p-5 border-2 border-[#e5e7eb]/20 rounded-lg">
                    <FaRegUser size={20} className="text-white/20" />
                    <div className="absolute -bottom-2 w-6 h-6 bg-gradient-to-r from-[#00f090] to-[#009efb] rounded-full grid place-items-center opacity-45" >
                      <MdDone size={15} className="text-4xl font-extrabold" />
                    </div>
                  </div>
                  <div className="bg-[#e5e7eb]/10 opacity-60 size-[70px] min-w-[70px] p-5 border-2 border-[#e5e7eb]/20 rounded-lg">
                    <FaRegUser size={20} className="text-white/20" />
                  </div>

                  <div className="bg-[#e5e7eb]/10 size-[70px] min-w-[70px] opacity-75 p-5 border-2 border-[#e5e7eb]/20 rounded-lg">
                    <FaRegUser size={20} className="text-white/20" />
                    <div className="absolute -bottom-2 w-6 h-6 bg-gradient-to-r from-[#00f090] to-[#009efb] rounded-full grid place-items-center opacity-55" >
                      <MdDone size={15} className="text-4xl font-extrabold" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative py-7 -mb-7 pr-5">
                <img loading="lazy" src="images/infomatics1.svg" alt="" />
                <div className="absolute -left-6 bottom-16 flex gap-[26px]">
                  <div className="bg-[#e5e7eb]/10 size-[70px] min-w-[70px] p-5 border-2 border-[#e5e7eb]/20 rounded-lg">
                    <FaRegUser size={20} className="text-white/20" />
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-[#00f090] to-[#009efb] rounded-full grid place-items-center opacity-55" >
                      <MdDone size={15} className="text-4xl font-extrabold" />
                    </div>
                  </div>
                  <div className="relative">
                    <img className="size-[70px] min-w-[70px]" src="/images/Frame.webp" alt="" />
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-[#00f090] to-[#009efb] rounded-full grid place-items-center" >
                      <MdDone size={15} className="text-4xl font-extrabold" />
                    </div>
                  </div>
                  <div className="bg-[#e5e7eb]/10 size-[70px] min-w-[70px] p-5 border-2 border-[#e5e7eb]/20 rounded-lg">
                    <FaRegUser size={20} className="text-white/20" />
                  </div>
                  <div className="bg-[#e5e7eb]/10 size-[70px] min-w-[70px] opacity-40 p-5 border-2 border-[#e5e7eb]/20 rounded-lg">
                    <FaRegUser size={20} className="text-white/20" />
                  </div>
                  <div className="bg-[#e5e7eb]/10 size-[70px] min-w-[70px] opacity-20 p-5 border-2 border-[#e5e7eb]/20 rounded-lg">
                    <FaRegUser size={20} className="text-white/20" />
                  </div>
                </div>
              </div>
            </div>


            <div className="bg-[url('/images/bg.webp')] bg-cover bg-[#21263a] rounded-2xl p-7">
              <div className="text-white">
                <h2 className="font-bold text-lg mb-4">Résultats rapides - dès le 1er <br />mois</h2>
                <p className="text-sm font-medium">
                  Nous garantissons des résultats dès le 1er <br />mois, avec un ciblage sur-mesure précis.
                </p>
              </div>
              <div className="mt-7">
                <img loading="lazy" src="images/informatics2.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-5 justify-between">
            <div className="bg-[url('/images/bg.webp')] bg-cover bg-[#21263a] rounded-2xl p-6">
              <div className="text-white mb-6">
                <h2 className="font-bold text-lg mb-4">Votre espace - mesurez vos <br />performances</h2>
                <p className="text-sm font-medium">
                  Suivez votre croissance grâce aux <br /> analyses précises disponibles depuis <br />votre espace client
                </p>
              </div>
              <div className="">
                <img loading="lazy" src="images/informatics3.svg" alt="" />
              </div>
            </div>
            <div className="bg-[url('/images/bg.webp')] bg-cover bg-[#21263a] rounded-2xl p-6">
              <div className="text-white mb-6">
                <h2 className="font-bold text-lg mb-4">Monétisez vos followers - une <br />audience qui achète</h2>
                <p className="text-sm font-medium">
                  Apprenez à transformer vos followers en <br />clients grâce aux vidéos de nos Experts .
                </p>
              </div>
              <div className="-mb-12 relative">
                <svg width="328" height="240" viewBox="0 0 328 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M283.56 16.5706C307.104 16.7137 326.155 35.7647 326.298 59.3089L327.666 285.07C327.809 308.647 308.961 327.865 285.526 328.322L284.407 328.329L58.6458 326.961C35.1013 326.819 16.0493 307.767 15.9066 284.222L14.5394 58.4622C14.3942 34.5106 33.8475 15.0573 57.7991 15.2025L283.56 16.5706ZM57.7923 16.2015C34.3979 16.0599 15.3968 35.061 15.5384 58.4554L16.9066 284.216C17.046 307.213 35.6548 325.822 58.6517 325.961L284.412 327.329C307.807 327.471 326.808 308.47 326.666 285.076L325.298 59.3148C325.159 36.3179 306.55 17.7091 283.553 17.5697L57.7923 16.2015ZM262.228 50.8333L262.996 50.846C278.841 51.3208 291.594 64.0748 292.07 79.9193L292.084 80.6888L292.958 263.477C293.037 279.897 279.916 293.276 263.595 293.615L262.815 293.62L80.0267 292.746C63.5705 292.668 50.2492 279.346 50.1702 262.89L49.2952 80.1009C49.2158 63.4207 62.7586 49.8787 79.4388 49.9583L262.228 50.8333ZM79.4339 50.9583C63.3096 50.8814 50.2181 63.9726 50.2952 80.097L51.1702 262.885C51.2465 278.793 64.1239 291.669 80.0316 291.745L262.82 292.621C278.944 292.699 292.035 279.607 291.958 263.483L291.083 80.6937C291.007 64.7859 278.13 51.9085 262.222 51.8324L79.4339 50.9583ZM245.271 77.6058C256.378 77.5621 265.393 86.577 265.35 97.6839L264.769 245.499C264.725 256.483 255.831 265.377 244.847 265.42L97.0325 266.001C85.9255 266.045 76.9108 257.029 76.9544 245.922L77.5355 98.1077C77.5787 87.1236 86.4722 78.23 97.4564 78.1868L245.271 77.6058Z" fill="#E5E7EB" fill-opacity="0.05" />
                  {/* <foreignObject x="20.3359" y="58" width="302" height="201"><div xmlns="http://www.w3.org/1999/xhtml" className="backdrop-filter:blur(22px);clip-path:url(#bgblur_0_1367_420_clip_path);height:100%;width:100%"></div></foreignObject> */}<g filter="url(#filter0_i_1367_420)" data-figma-bg-blur-radius="44">
                    <rect x="64.3359" y="102" width="214" height="113" rx="15" fill="#E5E7EB" fill-opacity="0.14" />
                  </g>
                  <rect x="153.336" y="140" width="36" height="36" rx="18" fill="#E5E7EB" fill-opacity="0.2" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M166.06 151.967C166.082 151.777 166.149 151.596 166.254 151.437C166.359 151.278 166.499 151.145 166.664 151.05C166.829 150.955 167.014 150.9 167.204 150.888C167.395 150.877 167.585 150.91 167.76 150.986C168.645 151.364 170.628 152.263 173.145 153.716C175.662 155.169 177.433 156.438 178.202 157.014C178.859 157.507 178.861 158.483 178.203 158.977C177.442 159.55 175.692 160.802 173.145 162.274C170.595 163.746 168.635 164.634 167.758 165.007C167.003 165.33 166.158 164.841 166.06 164.027C165.945 163.075 165.73 160.914 165.73 157.996C165.73 155.079 165.944 152.919 166.06 151.967Z" fill="white" />
                  <rect x="76.3359" y="198" width="190" height="2" rx="1" fill="#E5E7EB" fill-opacity="0.2" />
                  <rect x="76.3359" y="198" width="56" height="2" rx="1" fill="url(#paint0_linear_1367_420)" />
                  <circle cx="132.336" cy="199" r="4.5" fill="white" stroke="url(#paint1_linear_1367_420)" stroke-width="3" />
                  <defs>
                    <filter id="filter0_i_1367_420" x="20.3359" y="58" width="302" height="201" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="8.8" />
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1367_420" />
                    </filter>
                    <clipPath id="bgblur_0_1367_420_clip_path" transform="translate(-20.3359 -58)"><rect x="64.3359" y="102" width="214" height="113" rx="15" />
                    </clipPath><linearGradient id="paint0_linear_1367_420" x1="76.3359" y1="199" x2="132.336" y2="199" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#B36AE9" />
                      <stop offset="0.496514" stop-color="#EC6189" />
                      <stop offset="1" stop-color="#FCA74B" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_1367_420" x1="126.336" y1="199" x2="138.336" y2="199" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#B36AE9" />
                      <stop offset="0.496514" stop-color="#EC6189" />
                      <stop offset="1" stop-color="#FCA74B" />
                    </linearGradient>
                  </defs>
                </svg>
                <img className="absolute w-[50px] top-1 left-12" src="/images/img1.webp" alt="" />
                <img className="absolute w-[50px] bottom-25 -left-2" src="/images/img2.webp" alt="" />
                <img className="absolute w-[50px] top-9 right-40" src="/images/img3.webp" alt="" />
                <img className="absolute w-[50px] top-3 right-10" src="/images/img4.webp" alt="" />
                <img className="absolute w-[50px] bottom-18 right-3" src="/images/img5.webp" alt="" />
              </div>

            </div>
            <div className="bg-[url('/images/bg.webp')] bg-cover bg-[#21263a] rounded-2xl p-6">
              <div className="text-white mb-6">
                <h2 className="font-bold text-lg mb-4">Sécurité garantie – contrôle <br />assuré</h2>
                <p className="text-sm font-medium">
                  Nous gérons votre croissance <br />discrètement, mais vous restez maître de <br />votre compte. Rien ne change, sauf vos <br />résultats.
                </p>
              </div>
              <div className="">
                <svg width="335" height="208" viewBox="0 0 389 208" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <foreignObject x="152.336" y="13.4529" width="84" height="84"><div xmlns="http://www.w3.org/1999/xhtml" className="backdrop-filter:blur(12px);clip-path:url(#bgblur_0_1371_420_clip_path);height:100%;width:100%"></div></foreignObject><g filter="url(#filter0_i_1371_420)" data-figma-bg-blur-radius="24">
                    <rect x="177.336" y="38.4529" width="34" height="34" rx="17" fill="white" fill-opacity="0.04" />
                    <rect x="176.836" y="37.9529" width="35" height="35" rx="17.5" stroke="white" stroke-opacity="0.13" />
                    <path d="M194.533 53.6532C196.521 53.6532 198.133 52.0413 198.133 50.053C198.133 48.0647 196.521 46.4529 194.533 46.4529C192.545 46.4529 190.933 48.0647 190.933 50.053C190.933 52.0413 192.545 53.6532 194.533 53.6532Z" stroke="#CBD5E1" stroke-width="1.5" />
                    <path d="M201.736 60.4027C201.736 62.6393 201.736 64.4529 194.536 64.4529C187.336 64.4529 187.336 62.6393 187.336 60.4027C187.336 58.1661 190.56 56.3525 194.536 56.3525C198.512 56.3525 201.736 58.1661 201.736 60.4027Z" stroke="#CBD5E1" stroke-width="1.5" />
                  </g>
                  <foreignObject x="204.336" y="101.453" width="84" height="84"><div xmlns="http://www.w3.org/1999/xhtml" className="backdrop-filter:blur(12px);clip-path:url(#bgblur_1_1371_420_clip_path);height:100%;width:100%"></div></foreignObject><g filter="url(#filter1_i_1371_420)" data-figma-bg-blur-radius="24">
                    <rect x="229.336" y="126.453" width="34" height="34" rx="17" fill="white" fill-opacity="0.04" />
                    <rect x="228.836" y="125.953" width="35" height="35" rx="17.5" stroke="white" stroke-opacity="0.13" />
                    <path d="M245.836 134.453V152.453M250.336 139.703C250.336 137.633 248.321 135.953 245.836 135.953C243.35 135.953 241.336 137.633 241.336 139.703C241.336 141.773 243.35 143.453 245.836 143.453C248.321 143.453 250.336 145.133 250.336 147.203C250.336 149.273 248.321 150.953 245.836 150.953C243.35 150.953 241.336 149.273 241.336 147.203" stroke="#CBD5E1" stroke-width="1.5" stroke-linecap="round" />
                  </g>
                  <foreignObject x="101.336" y="101.453" width="84" height="84"><div xmlns="http://www.w3.org/1999/xhtml" className="backdrop-filter:blur(12px);clip-path:url(#bgblur_2_1371_420_clip_path);height:100%;width:100%"></div></foreignObject><g filter="url(#filter2_i_1371_420)" data-figma-bg-blur-radius="24">
                    <rect x="126.336" y="126.453" width="34" height="34" rx="17" fill="white" fill-opacity="0.04" />
                    <rect x="125.836" y="125.953" width="35" height="35" rx="17.5" stroke="white" stroke-opacity="0.13" />
                    <path d="M151.336 151.453H141.025C139.034 151.453 138.038 151.453 137.277 151.065C136.608 150.724 136.064 150.181 135.723 149.512C135.336 148.751 135.336 147.755 135.336 145.764V135.453" stroke="#CBD5E1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M135.336 146.564L138.764 143.708C140.217 142.497 141.171 142.622 142.426 143.876L142.431 143.881C143.798 145.248 144.778 145.192 146.139 144L151.336 139.453" stroke="#CBD5E1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <g filter="url(#filter3_d_1371_420)">
                    <path d="M137.836 99.3396C140.93 97.5533 144.742 97.5533 147.836 99.3396L178.972 117.316C182.066 119.102 183.972 122.404 183.972 125.976V161.929C183.972 165.502 182.066 168.803 178.972 170.59L147.836 188.566C144.742 190.352 140.93 190.352 137.836 188.566L106.7 170.59C103.606 168.803 101.7 165.502 101.7 161.929V125.976C101.7 122.404 103.606 119.102 106.7 117.316L137.836 99.3396Z" fill="url(#paint0_linear_1371_420)" fill-opacity="0.14" shape-rendering="crispEdges" />
                    <path d="M138.086 99.7722C140.933 98.1283 144.421 98.0775 147.309 99.6189L147.586 99.7722L178.722 117.749C181.661 119.446 183.472 122.582 183.472 125.976V161.929C183.472 165.323 181.661 168.46 178.722 170.157L147.586 188.134C144.738 189.777 141.251 189.828 138.363 188.287L138.086 188.134L106.95 170.157C104.011 168.46 102.2 165.323 102.2 161.929V125.976C102.2 122.582 104.011 119.446 106.95 117.749L138.086 99.7722Z" stroke="url(#paint1_linear_1371_420)" shape-rendering="crispEdges" />
                  </g>
                  <g filter="url(#filter4_d_1371_420)">
                    <path d="M240.836 99.3396C243.93 97.5533 247.742 97.5533 250.836 99.3396L281.972 117.316C285.066 119.102 286.972 122.404 286.972 125.976V161.929C286.972 165.502 285.066 168.803 281.972 170.59L250.836 188.566C247.742 190.352 243.93 190.352 240.836 188.566L209.7 170.59C206.606 168.803 204.7 165.502 204.7 161.929V125.976C204.7 122.404 206.606 119.102 209.7 117.316L240.836 99.3396Z" fill="url(#paint2_linear_1371_420)" fill-opacity="0.14" shape-rendering="crispEdges" />
                    <path d="M241.086 99.7722C243.933 98.1283 247.421 98.0775 250.309 99.6189L250.586 99.7722L281.722 117.749C284.661 119.446 286.472 122.582 286.472 125.976V161.929C286.472 165.323 284.661 168.46 281.722 170.157L250.586 188.134C247.738 189.777 244.251 189.828 241.363 188.287L241.086 188.134L209.95 170.157C207.011 168.46 205.2 165.323 205.2 161.929V125.976C205.2 122.582 207.011 119.446 209.95 117.749L241.086 99.7722Z" stroke="url(#paint3_linear_1371_420)" shape-rendering="crispEdges" />
                  </g>
                  <g filter="url(#filter5_d_1371_420)">
                    <path d="M189.836 11.3396C192.93 9.5533 196.742 9.5533 199.836 11.3396L230.972 29.3161C234.066 31.1025 235.972 34.4037 235.972 37.9764V73.9294C235.972 77.502 234.066 80.8033 230.972 82.5896L199.836 100.566C196.742 102.352 192.93 102.352 189.836 100.566L158.7 82.5896C155.606 80.8033 153.7 77.502 153.7 73.9294V37.9764C153.7 34.4037 155.606 31.1025 158.7 29.3161L189.836 11.3396Z" fill="url(#paint4_linear_1371_420)" fill-opacity="0.14" shape-rendering="crispEdges" />
                    <path d="M190.086 11.7722C193.025 10.0753 196.647 10.0753 199.586 11.7722L230.722 29.7488C233.661 31.4458 235.472 34.5823 235.472 37.9763V73.9294C235.472 77.3234 233.661 80.46 230.722 82.157L199.586 100.134C196.647 101.83 193.025 101.83 190.086 100.134L158.95 82.157C156.011 80.46 154.2 77.3234 154.2 73.9294V37.9763C154.2 34.5823 156.011 31.4458 158.95 29.7488L190.086 11.7722Z" stroke="url(#paint5_linear_1371_420)" shape-rendering="crispEdges" />
                  </g>
                  <g opacity="0.1" filter="url(#filter6_d_1371_420)">
                    <path d="M292.836 11.3396C295.93 9.5533 299.742 9.5533 302.836 11.3396L333.972 29.3161C337.066 31.1025 338.972 34.4037 338.972 37.9764V73.9294C338.972 77.502 337.066 80.8033 333.972 82.5896L302.836 100.566C299.742 102.352 295.93 102.352 292.836 100.566L261.7 82.5896C258.606 80.8033 256.7 77.502 256.7 73.9294V37.9764C256.7 34.4037 258.606 31.1025 261.7 29.3161L292.836 11.3396Z" fill="url(#paint6_linear_1371_420)" fill-opacity="0.14" shape-rendering="crispEdges" />
                    <path d="M293.086 11.7722C295.933 10.1283 299.421 10.0775 302.309 11.6189L302.586 11.7722L333.722 29.7488C336.661 31.4458 338.472 34.5823 338.472 37.9763V73.9294C338.472 77.3234 336.661 80.46 333.722 82.157L302.586 100.134C299.738 101.777 296.251 101.828 293.363 100.287L293.086 100.134L261.95 82.157C259.011 80.46 257.2 77.3234 257.2 73.9294V37.9763C257.2 34.5823 259.011 31.4458 261.95 29.7488L293.086 11.7722Z" stroke="url(#paint7_linear_1371_420)" shape-rendering="crispEdges" />
                  </g>
                  <g opacity="0.3" filter="url(#filter7_d_1371_420)">
                    <path d="M86.8359 11.3396C89.93 9.5533 93.7419 9.5533 96.8359 11.3396L127.972 29.3161C131.066 31.1025 132.972 34.4037 132.972 37.9764V73.9294C132.972 77.502 131.066 80.8033 127.972 82.5896L96.8359 100.566C93.7419 102.352 89.9299 102.352 86.8359 100.566L55.6997 82.5896C52.6057 80.8033 50.6997 77.502 50.6997 73.9294V37.9764C50.6997 34.4037 52.6057 31.1025 55.6997 29.3161L86.8359 11.3396Z" fill="url(#paint8_linear_1371_420)" fill-opacity="0.14" shape-rendering="crispEdges" />
                    <path d="M87.0859 11.7722C89.9335 10.1283 93.4211 10.0775 96.3086 11.6189L96.5859 11.7722L127.722 29.7488C130.661 31.4458 132.472 34.5823 132.472 37.9763V73.9294C132.472 77.3234 130.661 80.46 127.722 82.157L96.5859 100.134C93.7384 101.777 90.2507 101.828 87.3633 100.287L87.0859 100.134L55.9502 82.157C53.0109 80.46 51.2002 77.3234 51.2002 73.9294V37.9763C51.2002 34.5823 53.0109 31.4458 55.9502 29.7488L87.0859 11.7722Z" stroke="url(#paint9_linear_1371_420)" shape-rendering="crispEdges" />
                  </g>
                  <g opacity="0.4" filter="url(#filter8_d_1371_420)">
                    <path d="M34.8359 99.3396C37.93 97.5533 41.7419 97.5533 44.8359 99.3396L75.9721 117.316C79.0662 119.102 80.9721 122.404 80.9721 125.976V161.929C80.9721 165.502 79.0662 168.803 75.9721 170.59L44.8359 188.566C41.7419 190.352 37.9299 190.352 34.8359 188.566L3.69973 170.59C0.605719 168.803 -1.30027 165.502 -1.30027 161.929V125.976C-1.30027 122.404 0.605719 119.102 3.69973 117.316L34.8359 99.3396Z" fill="url(#paint10_linear_1371_420)" fill-opacity="0.14" shape-rendering="crispEdges" />
                    <path d="M35.0859 99.7722C37.9335 98.1283 41.4211 98.0775 44.3086 99.6189L44.5859 99.7722L75.7217 117.749C78.661 119.446 80.4717 122.582 80.4717 125.976V161.929C80.4717 165.323 78.661 168.46 75.7217 170.157L44.5859 188.134C41.7384 189.777 38.2507 189.828 35.3633 188.287L35.0859 188.134L3.9502 170.157C1.0109 168.46 -0.799783 165.323 -0.799805 161.929V125.976C-0.799782 122.582 1.0109 119.446 3.9502 117.749L35.0859 99.7722Z" stroke="url(#paint11_linear_1371_420)" shape-rendering="crispEdges" />
                  </g>
                  <g opacity="0.4" filter="url(#filter9_d_1371_420)">
                    <path d="M343.836 99.3396C346.93 97.5533 350.742 97.5533 353.836 99.3396L384.972 117.316C388.066 119.102 389.972 122.404 389.972 125.976V161.929C389.972 165.502 388.066 168.803 384.972 170.59L353.836 188.566C350.742 190.352 346.93 190.352 343.836 188.566L312.7 170.59C309.606 168.803 307.7 165.502 307.7 161.929V125.976C307.7 122.404 309.606 119.102 312.7 117.316L343.836 99.3396Z" fill="url(#paint12_linear_1371_420)" fill-opacity="0.14" shape-rendering="crispEdges" />
                    <path d="M344.086 99.7722C346.933 98.1283 350.421 98.0775 353.309 99.6189L353.586 99.7722L384.722 117.749C387.661 119.446 389.472 122.582 389.472 125.976V161.929C389.472 165.323 387.661 168.46 384.722 170.157L353.586 188.134C350.738 189.777 347.251 189.828 344.363 188.287L344.086 188.134L312.95 170.157C310.011 168.46 308.2 165.323 308.2 161.929V125.976C308.2 122.582 310.011 119.446 312.95 117.749L344.086 99.7722Z" stroke="url(#paint13_linear_1371_420)" shape-rendering="crispEdges" />
                  </g>
                  <foreignObject x="142.336" y="55.4529" width="104" height="104"><div xmlns="http://www.w3.org/1999/xhtml" className="backdrop-filter:blur(12px);clip-path:url(#bgblur_3_1371_420_clip_path);height:100%;width:100%"></div></foreignObject><g data-figma-bg-blur-radius="24">
                    <rect x="166.336" y="79.4529" width="56" height="56" rx="28" fill="url(#paint14_linear_1371_420)" />
                    <rect x="166.836" y="79.9529" width="55" height="55" rx="27.5" stroke="white" stroke-opacity="0.21" />
                    <path d="M201.005 102.452V99.7856C201.005 96.0522 198.072 93.1189 194.339 93.1189C190.605 93.1189 187.672 96.0522 187.672 99.7856V102.452C185.405 102.452 183.672 104.186 183.672 106.452V115.786C183.672 118.052 185.405 119.786 187.672 119.786H201.005C203.272 119.786 205.005 118.052 205.005 115.786V106.452C205.005 104.186 203.272 102.452 201.005 102.452ZM190.339 99.7856C190.339 97.5189 192.072 95.7856 194.339 95.7856C196.605 95.7856 198.339 97.5189 198.339 99.7856V102.452H190.339V99.7856ZM195.672 113.119C195.672 113.919 195.139 114.452 194.339 114.452C193.539 114.452 193.005 113.919 193.005 113.119V109.119C193.005 108.319 193.539 107.786 194.339 107.786C195.139 107.786 195.672 108.319 195.672 109.119V113.119Z" fill="white" />
                  </g>
                  <defs>
                    <filter id="filter0_i_1371_420" x="152.336" y="13.4529" width="84" height="84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="5.8" />
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
                      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1371_420" />
                    </filter>
                    <clipPath id="bgblur_0_1371_420_clip_path" transform="translate(-152.336 -13.4529)"><rect x="177.336" y="38.4529" width="34" height="34" rx="17" />
                    </clipPath><filter id="filter1_i_1371_420" x="204.336" y="101.453" width="84" height="84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="5.8" />
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
                      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1371_420" />
                    </filter>
                    <clipPath id="bgblur_1_1371_420_clip_path" transform="translate(-204.336 -101.453)"><rect x="229.336" y="126.453" width="34" height="34" rx="17" />
                    </clipPath><filter id="filter2_i_1371_420" x="101.336" y="101.453" width="84" height="84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="5.8" />
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
                      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1371_420" />
                    </filter>
                    <clipPath id="bgblur_2_1371_420_clip_path" transform="translate(-101.336 -101.453)"><rect x="126.336" y="126.453" width="34" height="34" rx="17" />
                    </clipPath><filter id="filter3_d_1371_420" x="87.6997" y="88" width="110.272" height="119.906" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="7" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.1155 0 0 0 0 0.0931028 0 0 0 0 0.182692 0 0 0 0.39 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1371_420" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1371_420" result="shape" />
                    </filter>
                    <filter id="filter4_d_1371_420" x="190.7" y="88" width="110.272" height="119.906" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="7" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.1155 0 0 0 0 0.0931028 0 0 0 0 0.182692 0 0 0 0.39 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1371_420" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1371_420" result="shape" />
                    </filter>
                    <filter id="filter5_d_1371_420" x="139.7" y="0" width="110.272" height="119.906" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="7" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.1155 0 0 0 0 0.0931028 0 0 0 0 0.182692 0 0 0 0.39 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1371_420" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1371_420" result="shape" />
                    </filter>
                    <filter id="filter6_d_1371_420" x="242.7" y="0" width="110.272" height="119.906" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="7" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.1155 0 0 0 0 0.0931028 0 0 0 0 0.182692 0 0 0 0.39 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1371_420" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1371_420" result="shape" />
                    </filter>
                    <filter id="filter7_d_1371_420" x="36.6997" y="0" width="110.272" height="119.906" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="7" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.1155 0 0 0 0 0.0931028 0 0 0 0 0.182692 0 0 0 0.39 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1371_420" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1371_420" result="shape" />
                    </filter>
                    <filter id="filter8_d_1371_420" x="-15.3003" y="88" width="110.272" height="119.906" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="7" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.1155 0 0 0 0 0.0931028 0 0 0 0 0.182692 0 0 0 0.39 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1371_420" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1371_420" result="shape" />
                    </filter>
                    <filter id="filter9_d_1371_420" x="293.7" y="88" width="110.272" height="119.906" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="7" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.1155 0 0 0 0 0.0931028 0 0 0 0 0.182692 0 0 0 0.39 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1371_420" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1371_420" result="shape" />
                    </filter>
                    <clipPath id="bgblur_3_1371_420_clip_path" transform="translate(-142.336 -55.4529)"><rect x="166.336" y="79.4529" width="56" height="56" rx="28" />
                    </clipPath><linearGradient id="paint0_linear_1371_420" x1="114.836" y1="148.453" x2="184.836" y2="148.453" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#E5E7EB" stop-opacity="0" />
                      <stop offset="1" stop-color="#E5E7EB" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_1371_420" x1="123.336" y1="146.953" x2="184.336" y2="146.953" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#E5E7EB" stop-opacity="0" />
                      <stop offset="1" stop-color="#E5E7EB" stop-opacity="0.3" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_1371_420" x1="270.836" y1="143.453" x2="205.836" y2="143.453" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#E5E7EB" stop-opacity="0" />
                      <stop offset="1" stop-color="#E5E7EB" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_1371_420" x1="273.336" y1="143.453" x2="205.336" y2="143.453" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#E5E7EB" stop-opacity="0" />
                      <stop offset="1" stop-color="#E5E7EB" stop-opacity="0.3" />
                    </linearGradient>
                    <linearGradient id="paint4_linear_1371_420" x1="194.836" y1="26.4529" x2="194.836" y2="103.453" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#E5E7EB" stop-opacity="0" />
                      <stop offset="1" stop-color="#E5E7EB" />
                    </linearGradient>
                    <linearGradient id="paint5_linear_1371_420" x1="195.336" y1="36.9529" x2="194.836" y2="103.453" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#E5E7EB" stop-opacity="0" />
                      <stop offset="1" stop-color="#E5E7EB" stop-opacity="0.3" />
                    </linearGradient>
                    <linearGradient id="paint6_linear_1371_420" x1="297.836" y1="26.4529" x2="297.836" y2="103.453" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#E5E7EB" stop-opacity="0" />
                      <stop offset="1" stop-color="#E5E7EB" />
                    </linearGradient>
                    <linearGradient id="paint7_linear_1371_420" x1="298.336" y1="36.9529" x2="297.836" y2="103.453" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#E5E7EB" stop-opacity="0" />
                      <stop offset="1" stop-color="#E5E7EB" stop-opacity="0.3" />
                    </linearGradient>
                    <linearGradient id="paint8_linear_1371_420" x1="91.8359" y1="26.4529" x2="91.8359" y2="103.453" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#E5E7EB" stop-opacity="0" />
                      <stop offset="1" stop-color="#E5E7EB" />
                    </linearGradient>
                    <linearGradient id="paint9_linear_1371_420" x1="92.3359" y1="36.9529" x2="91.8359" y2="103.453" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#E5E7EB" stop-opacity="0" />
                      <stop offset="1" stop-color="#E5E7EB" stop-opacity="0.3" />
                    </linearGradient>
                    <linearGradient id="paint10_linear_1371_420" x1="39.8359" y1="114.453" x2="39.8359" y2="191.453" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#E5E7EB" stop-opacity="0" />
                      <stop offset="1" stop-color="#E5E7EB" />
                    </linearGradient>
                    <linearGradient id="paint11_linear_1371_420" x1="40.3359" y1="124.953" x2="39.8359" y2="191.453" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#E5E7EB" stop-opacity="0" />
                      <stop offset="1" stop-color="#E5E7EB" stop-opacity="0.3" />
                    </linearGradient>
                    <linearGradient id="paint12_linear_1371_420" x1="348.836" y1="114.453" x2="348.836" y2="191.453" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#E5E7EB" stop-opacity="0" />
                      <stop offset="1" stop-color="#E5E7EB" />
                    </linearGradient>
                    <linearGradient id="paint13_linear_1371_420" x1="349.336" y1="124.953" x2="348.836" y2="191.453" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#E5E7EB" stop-opacity="0" />
                      <stop offset="1" stop-color="#E5E7EB" stop-opacity="0.3" />
                    </linearGradient>
                    <linearGradient id="paint14_linear_1371_420" x1="166.336" y1="107.453" x2="222.336" y2="107.453" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#B36AE9" />
                      <stop offset="0.496514" stop-color="#EC6189" />
                      <stop offset="1" stop-color="#FCA74B" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          <div className="grid place-items-center">
            <div className="flex gap-4 items-center bg-gradient-to-r from-[#be6ae9] via-[#ec6189] to-[#fca74b] py-3 px-6 rounded-lg">
              <div className="size-[23px]">
                <img className="w-full rounded-full" src="/images/image15.webp" alt="" />
              </div>
              <p className="text-white text-[16px] font-semibold">Commencer 7 jours offerts</p>
              <FaChevronRight size={15} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
