import Title from './Title';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function Experience () {
    return (
        <section id='experience' class="qualification section">

        <Title title='Experiência' subtitle='Minha jornada na área' />

        <div class="grid grid-cols-[1fr]">
        {/* 0 */}
        <div class="grid grid-cols-[1fr_max-content_1fr] gap-x-6">
            <div></div>
            <div class="">
                <span class="inline-block w-[13px] h-[13px] rounded-full bg-[#1976D2]"></span>
                <span class="block w-[1px] h-full bg-[#1976D2] transform translate-x-[6px] -translate-y-[7px]"></span>
            </div>
            <div>
                <h3 class="qualification__title">Ensino Superior</h3>
                <span class="text-sm">UniFBV - Wyden</span>
                <div class="text-xs opacity-80 py-2 flex items-center">
                    <CalendarMonthIcon />
                    2024 - 2026
                </div>
            </div>
        </div>

    <div class="block" data-content id="education">
        {/* 1 */}
        <div class="grid grid-cols-[1fr_max-content_1fr] gap-x-6">
            <div className='flex flex-col items-end'>
                <h3 class="qualification__title">Estagiário de TI</h3>
                <span class="text-sm">Unimed Recife</span>
                <div class="text-xs opacity-80 py-2 flex items-center">
                    <CalendarMonthIcon />
                    Set 2024 - Presente
                </div>
            </div>
            <div class="">
                <span class="inline-block w-[13px] h-[13px] rounded-full bg-[#1976D2]"></span>
                <span class="block w-[1px] h-full bg-[#1976D2] transform translate-x-[6px] -translate-y-[7px]"></span>
            </div>
            <div></div>
        </div>

        {/* 2 */}
        <div class="grid grid-cols-[1fr_max-content_1fr] gap-x-6">
            <div></div>
            <div class="">
                <span class="inline-block w-[13px] h-[13px] rounded-full bg-[#1976D2]"></span>
                <span class="block w-[1px] h-full bg-[#1976D2] transform translate-x-[6px] -translate-y-[7px]"></span>
            </div>
            <div>
                <h3 class="qualification__title">Desenvolvedor de Software</h3>
                <span class="text-sm">N49 Inteligência Digital</span>
                <div class="text-xs opacity-80 py-2 flex items-center">
                    <CalendarMonthIcon />
                    Jul 2024 - Ago 2024
                </div>
            </div>
        </div>

        {/* 3 */}
        <div class="grid grid-cols-[1fr_max-content_1fr] gap-x-6">
            <div className='flex flex-col items-end'>
                <h3 class="qualification__title">Desenvolvedor Full-Stack</h3>
                <span class="text-sm">3C Solution do Brasil Ltda</span>
                <div class="text-xs opacity-80 py-2 flex items-center">
                    <CalendarMonthIcon />
                    Jun 2021 - Fev 2023
                </div>
            </div>
            <div class="">
                <span class="inline-block w-[13px] h-[13px] rounded-full bg-[#1976D2]"></span>
                <span class="block w-[1px] h-full bg-[#1976D2] transform translate-x-[6px] -translate-y-[7px]"></span>
            </div>
            <div></div>
        </div>

    </div>
</div>

        
    </section>
    )
}