
import cat1Image from '../images/cat1.png';

export default function Card(){


    return (
        <section> 
  <div class="container mx-auto px-4">
    <nav class="flex">
      <ol role="list" class="flex items-center">
        <li class="text-left">
          <div class="-m-1">
            <a href="#" class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Домашняя страница </a>
          </div>
        </li>

        <li class="text-left">
          <div class="flex items-center">
            <span class="mx-2 text-gray-400">/</span>
            <div class="-m-1">
              <a href="#" class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Животные </a>
            </div>
          </div>
        </li>

        <li class="text-left">
          <div class="flex items-center">
            <span class="mx-2 text-gray-400">/</span>
            <div class="-m-1">
              <a href="#" class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800" aria-current="page"> Коты </a>
            </div>
          </div>
        </li>
      </ol>
    </nav>

    <div class="lg:col-gap-14 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
      <div class="lg:col-span-3 lg:row-end-1">
        <div class="lg:flex lg:items-start">
          <div class="lg:order-2 lg:ml-5">
            <div class="max-w-xl overflow-hidden rounded-lg">
              <img class="h-full w-full max-w-full object-cover" src= {cat1Image} alt="" />
            </div>
          </div>

          <div class="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
            <div class="flex flex-row items-start lg:flex-col">
              <button type="button" class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center">
                <img class="h-full w-full object-cover" src={cat1Image} alt="" />
              </button>
              <button type="button" class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
                <img class="h-full w-full object-cover" src={cat1Image} alt="" />
              </button>
              <button type="button" class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
                <img class="h-full w-full object-cover" src={cat1Image} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:col-span-2 lg:row-span-2 lg:row-end-2">
        <div class="flex items-center">
          <p class=" text-sm font-medium text-gray-500">Нравится: {15} </p>
        </div>

        <h1 class="sm: text-2xl font-bold text-gray-900 sm:text-3xl">Индира</h1>
        <h1 class="sm: text-2xl font-bold text-gray-900 sm:text-3xl">Возраст 9,5 месяцев</h1>



        <h2 class="mt-8 text-base text-gray-900">Фильтр 1</h2>
        <div class="mt-3 flex select-none flex-wrap items-center gap-1">
          <label class="">
            <input type="radio" name="type" value="Powder" class="peer sr-only" checked />
            <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Свойство 1</p>
          </label>
          <label class="">
            <input type="radio" name="type" value="Whole Bean" class="peer sr-only" />
            <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Свойство 2</p>
          </label>
          <label class="">
            <input type="radio" name="type" value="Groud" class="peer sr-only" />
            <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Свойство 3</p>
          </label>
        </div>

        <p class = "mt-8 text-base text-gray-900">
        Индира - это невероятно милая и маленькая кошка с пушистым серым мехом и белым пятном на носике, напоминающим звездочку. Несмотря на ее небольшой размер, она обладает огромным сердцем, полным доброты и ласки.

        Индира - настоящая трусливая кошка, которая быстро испугается громких звуков или неожиданных движений. Она предпочитает проводить время в укромных уголках своего дома или под мягким пледом, где чувствует себя в безопасности.

        Однако, несмотря на свою скрытность, Индира очень привязывается к своим близким.

        Индира - настоящий источник радости и умиротворения. Ее доброта и нежность делают ее идеальным компаньоном для тех, кто ценит спокойствие и тепло в своем доме.
        </p>

        {/* <h2 class="mt-8 text-base text-gray-900">Choose subscription</h2>
        <div class="mt-3 flex select-none flex-wrap items-center gap-1">
          <label class="">
            <input type="radio" name="subscription" value="4 Months" class="peer sr-only" />
            <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">4 Months</p>
            <span class="mt-1 block text-center text-xs">$80/mo</span>
          </label>
          <label class="">
            <input type="radio" name="subscription" value="8 Months" class="peer sr-only" checked />
            <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">8 Months</p>
            <span class="mt-1 block text-center text-xs">$60/mo</span>
          </label>
          <label class="">
            <input type="radio" name="subscription" value="12 Months" class="peer sr-only" />
            <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">12 Months</p>
            <span class="mt-1 block text-center text-xs">$40/mo</span>
          </label>
        </div> */}

        <div class="mt-10 flex flex-col items-center justify-end space-y-4  py-4 sm:flex-row sm:space-y-0">
          {/* <div class="flex items-end">
            <h1 class="text-3xl font-bold">$60.50</h1>
            <span class="text-base">/month</span>
          </div> */}

          <button type="button" class="bg-indira">
            Хочу забрать
          </button>
        </div>

        {/* <ul class="mt-8 space-y-2">
          <li class="flex items-center text-left text-sm font-medium text-gray-600">
            <svg class="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" class=""></path>
            </svg>
            Free shipping worldwide
          </li>

          <li class="flex items-center text-left text-sm font-medium text-gray-600">
            <svg class="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" class=""></path>
            </svg>
            Cancel Anytime
          </li>
        </ul> */}
      </div>

      {/* <div class="lg:col-span-3">
        <div class="border-b border-gray-300">
          <nav class="flex gap-4">
            <a href="#" title="" class="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"> Description </a>

            <a href="#" title="" class="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600">
              Reviews
              <span class="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100"> 1,209 </span>
            </a>
          </nav>
        </div>

        <div class="mt-8 flow-root sm:mt-12">
          <h1 class="text-3xl font-bold">Delivered To Your Door</h1>
          <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium nesciunt fuga.</p>
          <h1 class="mt-8 text-3xl font-bold">From the Fine Farms of Brazil</h1>
          <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.</p>
          <p class="mt-4">Amet consectetur adipisicing elit. Optio numquam enim facere. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore rerum nostrum eius facere, ad neque.</p>
        </div>
      </div> */}
    </div>
  </div>
</section>


    )

}