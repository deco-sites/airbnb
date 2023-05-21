export default function NavBar() {
    return  (
        <div className="flex text-montserrat flex-col md:justify-between items-center justify-center shadow-md shadow-slate-100 absolute top-0 w-full px-4 pt-3 pb-1">
            <div className="items-center justify-between w-full hidden md:flex md:gap-5 ">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1280px-Airbnb_Logo_B%C3%A9lo.svg.png" className="w-20 hidden md:block"/>
                <div className="hidden md:flex text-xs rounded-full items-center justify-between shadow-md px-3 py-3 border-gray-300 border-[1px]">
                <p className="font-bold border-r-slate-300 border-r-[1px] px-3">Qualquer lugar</p>
                <p className="font-bold border-r-slate-300 border-r-[1px] px-3">Qualquer semana</p>
                <p className="px-3">Hóspedes?</p>
                <svg className="rounded-full bg-[#ff385c]" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="fill:none;height:16px;width:16px;stroke:currentColor;stroke-width:5.333333333333333;overflow:visible; padding: 5px; color:white;" aria-hidden="true" role="presentation" focusable="false"><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg>
            </div>
            <div className="gap-5 items-center justify-center hidden md:flex">
                <p className="text-xs font-bold">Anuncie seu espaço no AirBnb</p>
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 20px; width: 20px; fill: currentcolor;"><path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path></svg>


                <div className="border-gray-300 border-[1px] rounded-full flex gap-2 p-1 justify-between items-center">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;"><g fill="none" fill-rule="nonzero"><path d="m2 16h28"></path><path d="m2 24h28"></path><path d="m2 8h28"></path></g></svg>
                    <img src="https://cdn-icons-png.flaticon.com/512/4121/4121064.png" className="w-[22px] h-[22px]"/>
                </div>
            </div>
            </div>
            
            <button className="flex rounded-full w-[80%] items-center justify-between gap-3 py-2 shadow-md px-3 py-3 md:hidden">
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
            
            <div className="carousel carousel-center py-2 space-x-3 mt-2 w-full">
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