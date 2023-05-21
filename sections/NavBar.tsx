export default function NavBar() {
    return  (
        <div className="flex text-montserrat flex-col items-center justify-center overflow-hidden">
            <button className="flex rounded-full w-[80%] items-center justify-between gap-3 py-2 shadow-md px-3 py-3">
                <div className="flex gap-2">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className="w-5 font-light">
                        <path d="M13 0c7.18 0 13 5.82 13 13 0 2.868-.929 5.519-2.502 7.669l7.916 7.917-2.828 2.828-7.917-7.916A12.942 12.942 0 0 1 13 26C5.82 26 0 20.18 0 13S5.82 0 13 0zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" opacity=".8"></path>
                    </svg>
                    <div className="flex flex-col items-start text-xs">
                        <p className="text-montserrat font-bold">Qualquer lugar</p>
                        <p className="font-light text-neutral">Qualquer semana • Hóspedes?</p>
                    
                    </div>
                </div>
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className="border-[1px] border-slate-100 rounded-full w-5 p-1">
                    <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z">
                    </path>
                </svg>
                
            </button>
            <div className="carousel carousel-end py-2">
                <div className="carousel-item flex flex-col justify-center items-center">
                    <img class="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg" alt="" width="20" height="20"/>
                    <p className="text-xs text-inherit">Quartos</p>
                </div> 
                <div className="carousel-item flex flex-col justify-center items-center">
                    <img class="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg" alt="" width="20" height="20"/>
                    <p className="text-xs text-inherit">Chalés</p>
                </div> 
                <div className="carousel-item flex flex-col justify-center items-center">
                    <img class="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg" alt="" width="20" height="20"/>
                    <p className="text-xs text-inherit">No interior</p>
                </div> 
                <div className="carousel-item flex flex-col justify-center items-center">
                    <img class="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg" alt="" width="20" height="20"/>
                    <p className="text-xs text-inherit">Vistas incríveis</p>
                </div> 
                <div className="carousel-item flex flex-col justify-center items-center">
                    <img class="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg" alt="" width="20" height="20"/>
                    <p className="text-xs text-inherit">Pousadas</p>
                </div> 
                <div className="carousel-item flex flex-col justify-center items-center">
                    <img class="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg" alt="" width="20" height="20"/>
                    <p className="text-xs text-inherit">Em frente à praia</p>
                </div> 
                <div className="carousel-item flex flex-col justify-center items-center">
                    <img class="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg" alt="" width="20" height="20"/>
                    <p className="text-xs text-inherit">Fazendas</p>
                </div>
                <div className="carousel-item flex flex-col justify-center items-center">
                    <img class="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg" alt="" width="20" height="20"/>
                    <p className="text-xs text-inherit">Ilhas</p>
                </div>
                <div className="carousel-item flex flex-col justify-center items-center">
                    <img class="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg" alt="" width="20" height="20"/>
                    <p className="text-xs text-inherit">Em alta</p>
                </div>
                <div className="carousel-item flex flex-col justify-center items-center">
                    <img class="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg" alt="" width="20" height="20"/>
                    <p className="text-xs text-inherit">Parques nacionais</p>
                </div>
                <div className="carousel-item flex flex-col justify-center items-center">
                    <img class="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg" alt="" width="20" height="20"/>
                    <p className="text-xs text-inherit">Cidades famosas</p>
                </div>
            </div>
        </div>

    )
}