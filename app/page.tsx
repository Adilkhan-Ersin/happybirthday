'use client';
import clsx from"clsx";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Character from"@/components/Character";

export default function Home() {
  // State for toggling audio and visual indicator
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
      
  const listText = [
   "Торт, который не кончится",
   "Сердца — для себя, а не только для всех остальных.",
   "Зарядки — и для телефона, и для души",
   "Много волшебства и чудес",
   "Волнений — только от просмотра сериала, а не из-за реальных людей.",
   "Такси, которое приезжает через 2 минуты, а не через 20.",
   "Улыбок — от души, а не из вежливости.",
   "Перерывов от всего, что шумит в голове.",
   "Интернета без лагов во время твоей любимой сцены.",
   "Музыки, которая лечит.",
   "Людей, которые слушают, а не ждут, чтобы вставить своё.",
   "Друзей, с которыми не страшно быть странной.",
   "Пижам, в которых ты — королева.",
   "Печенек в 3 ночи, когда душа просит уюта.",
   "Чата, в котором можно просто молчать, и тебя всё равно поймут.",
   "Слов, которые лечат, а не ранят.",
   "Состояний, когда ты любишь себя — просто так.",
   "Красивых фраз, чтобы делать скрины и плакать.",
   "Картин в голове, где ты счастлива — по-настоящему.",
   "Быть — собой.",
   "Волшебных совпадений.",
   "Сил на всё, даже когда сил нет.",
   "Дней без “я не справляюсь”.",
   "Людей, которые видят в тебе свет, даже когда ты не горишь.",
   "Песен, которые — как объятия.",
   "Утра, где не надо вставать по будильнику.",
   "Места, где ты можешь молчать, и это будет ок.",
   "Жизни, где ты не просишь, а получаешь.",
   "Кофе, который не остыл, пока ты отвлеклась.",
   "Тёплого слова в момент, когда холодно.",
   "Объятия без причины.",
   "Письма, которые приходят внезапно и радуют.",
   "Того, кто заметит, когда ты на грани.",
   "И того, кто просто скажет: “я рядом”.",
   "Тёплого одеяла и холодный подушки.",
   "Мечт, от которых мурашки.",
   "Дней без паники.",
   "Минут без телефона — но с настоящей жизнью.",
   "Лета в душе, даже зимой.",
   'Возможности сказать"нет"— без чувства вины.',
   'Возможности сказать"да"— себе.' ,
   "Уверенности в себе, даже когда мир — как барахолка.",
   "Голоса, который шепчет: “ты молодец”.",
   "Вдохновения — даже если ты не художник.",
   "Простых радостей: вкусной еды, случайной песни, добрых глаз.",
   "Неизвестного будущего, но с приятным предчувствием.",
   "Падений, после которых хочется встать — и идти дальше.",
   "Безопасности.",
   'Тех, кто не говорит"ты слишком","ты мало","будь другой".' ,
   "Одиночества — не грустного, а глубокого.",
   "Диалогов с собой — честных.",
   "Безумных идей, от которых душа оживает.",
   "Спокойных вечеров. Без объяснений. Просто — спокойно.",
   "Новых любимых песен.",
   "Слёз от счастья.",
   "Счастья без причины.",
   "Фраз, которые ты перечитываешь по ночам.",
   "Поцелуев, даже если виртуальных.",
   "Дня, когда тебе просто всё — по кайфу.",
   "Света, даже если вокруг темно.",
   "Чувства, что ты — любимая.",
   "Верности — к себе.",
   "Новых “первая глава” вместо “конец”.",
   "Момента, когда ты поймёшь — “я справилась”.",
   "Радости от мелочей.",
   "Чувства, что ты жива. По-настоящему.",
   "Листьев, которые шуршат под ногами осенью.",
   "Горячего чая, если вдруг слёзы.",
   "Человека, который будет — всегда.",
   "Отпустить тех, кто не держал.",
   "Найти тех, кто держит, даже если ты молчишь.",
   "Финансового благополучия и стабильности во всем.",
   "И красивой.",
   "И нежной.",
   "И сильной. Всё сразу. Без ограничений.",
    'Ответов на свои"почему".' ,
   "Вопросов, которые ведут к мечтам.",
   "Поддержки, когда ты не просишь.",
   "Магии, в которую веришь только ты.",
   "Пусть жизнь будет полна приятных сюрпризов.",
   "Признаний — случайных, но важных.",
   "Незабываемых путешествий и новых открытий в жизни.",
   "Секретных взглядов.",
   "Пусть магия чисел 25.05.25 исполнит желания!",
   "Любви — той самой.",
   "Себя — ту самую.",
   "И ещё одно:",
  ];
  // Refs for audio and navigation container
  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  // Manage audio playback
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current?.play();
    } else {
      audioElementRef.current?.pause();
    }
  }, [isAudioPlaying]);

  return (
    
    <div className="w-screen flex flex-col items-center justify-center">
      <main className="max-w-[500px] overflow-hidden">
        <div onClick={toggleAudioIndicator} className="flex w-[50px] h-[50px] rounded-full bg-[var(--foreground)] fixed bottom-[15px] right-[15px] items-center justify-center z-50">
          <button className="flex items-center space-x-0.5">
            <audio ref={audioElementRef} className="hidden" src="/audio/Lust.mp3" loop />
                {[1, 2, 3, 4].map((bar) => (
                  <div key={bar} className={clsx("indicator-line", { active: isIndicatorActive, })} style={{ animationDelay: `${bar * 0.1}s`, }}/>
                ))}
          </button>
        </div>
        <section>
          <div className='flex relative'>
            <Image className='w-full' src="/lents.png" width={375} height={100} alt="lenta"/>
          </div>
        </section>
        <section className="flex w-full flex-col items-center">
          <div className='flex flex-col items-center justify-center'>
            <h6 className='font-medium text-2xl'>25.05.25</h6>
            <h1 className='text-5xl font-[lucyFont] text-center'>Happy Birthday, Bobi!</h1>
            <h5 className='mt-2.5 text-4xl font-[lucyFont]'>It&apos;s your special day</h5>
          </div>
          <div className='w-full flex mt-[20px] justify-between'>
            <Image className='w-[150px] h-[150px]' src="/big-cake.png" width={300} height={300} alt="cake"/>
            <Image className='w-[150px] h-[150px]' src="/wine.png" width={300} height={300} alt="cake"/>
          </div>
          <div className='flex items-center'>
            <div className='w-full mt-[120px] flex items-center justify-between'>
              <Image className='w-[220px] h-[220px]' src="/confetti.png" width={300} height={300} alt="cake"/>
              <Image className='w-[220px] h-[220px] scale-x-[-1]' src="/confetti.png" width={300} height={300} alt="cake"/>
            </div>
          </div>
          <div className="mt-[20px]">
            <Image src="/wowww.png" width={300} height={300} alt="Clipped Photo" />
          </div>
        </section>
        <section className="flex flex-col w-full items-center p-4">
          <div className='flex w-full items-center mb-4 justify-between'>
            <Image className='w-[100px] h-[100px]' src="/conys.png" width={300} height={300} alt="berry"/>
            <Image className='w-[100px] h-[100px] scale-x-[-1]' src="/heart-eyes.png" width={300} height={300} alt="berry"/>
          </div>
          <h1 className="text-4xl font-semibold font-[Dancing_Script]">Happy Birthday!</h1>
          <p className="text-center mt-3 text-[18px]">Ты, наверное, сейчас улыбаешься — и это уже делает день лучше. 
            Сегодня — твой день, и Вселенная готова слушать твои самые смелые мечты.
          </p>
          <div className='flex flex-col w-full mt-5 items-center'>
            <p className='text-left text-xl w-full'>Желаю тебе:</p>
            
              <ul className='text-left w-full'>
                {listText.map((text, index) => (
                  <li key={index}><Character paragraph={text}/></li>
                ))}
                <li className="font-semibold"><Character paragraph={'Пусть однажды ты прочитаешь этот список, улыбнёшься, и поймёшь: "Это всё уже сбылось."'}/></li>
              </ul>
          </div>
          <h1 className='text-[36px] text-center mt-[20px] font-[lucyFont]'>Final message, and yes, it’s cheesy</h1>
          <p className="text-center">Ты — как любимая песня. 
            Может, я и не знаю всех слов, 
            но точно знаю, что хочу слушать тебя снова и снова.</p>
        </section>
      </main>
      <footer className="flex flex-col max-w-[500px] items-center justify-center p-4">
        <p className="text-[26px] font-[lucyFont]">Made by <a href="https://ersinadilkhan.vercel.app/" target="_blank" rel="noopener noreferrer">Adilkhan.</a></p>
      </footer>
    </div>
  );
}
