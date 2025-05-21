'use client';
import clsx from "clsx";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
export default function Home() {
  // State for toggling audio and visual indicator
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

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
    <div className="w-screen h-screen">
      <main className="max-w-[500px] w-full overflow-hidden">
        <div className="flex w-[50px] h-[50px] rounded-full bg-[var(--foreground)] fixed bottom-[15px] right-[15px] items-center justify-center z-50">
          <button onClick={toggleAudioIndicator} className="flex items-center space-x-0.5">
            <audio ref={audioElementRef} className="hidden" src="/audio/lust.mp3" loop />
                {[1, 2, 3, 4].map((bar) => (
                  <div key={bar} className={clsx("indicator-line", { active: isIndicatorActive, })} style={{ animationDelay: `${bar * 0.1}s`, }}/>
                ))}
          </button>
        </div>
        <section>
          <div className='flex relative'>
            <Image className='' src="/lents.png" width={1080} height={1080} alt="lenta"/>
          </div>
        </section>
        <section className="flex w-screen flex-col items-center h-screen">
          <div className='flex flex-col items-center justify-center'>
            <h6 className='font-medium text-2xl'>25.05.25</h6>
            <h1 className='font-bold text-4xl font-[Dancing_Script] text-center'>Happy Birthday, Kamilya!</h1>
            <h5 className='font-semibold mt-2.5 text-2xl font-[Playfair_Display]'>It&apos;s your special day</h5>
          </div>
          <div className='w-screen flex mt-[20px] justify-between'>
            <Image className='w-[150px] h-[150px]' src="/big-cake.png" width={300} height={300} alt="cake"/>
            <Image className='w-[150px] h-[150px]' src="/wine.png" width={300} height={300} alt="cake"/>
          </div>
          <div className='flex items-center'>
            <div className='w-[120vw] mt-[120px] flex items-center justify-between'>
              <Image className='w-[230px] h-[230px]' src="/confetti.png" width={300} height={300} alt="cake"/>
              <Image className='w-[230px] h-[230px] scale-x-[-1]' src="/confetti.png" width={300} height={300} alt="cake"/>
            </div>
          </div>
          <div className="mt-[20px]">
            <Image src="/flower.png" width={300} height={300} alt="Clipped Photo" />
          </div>
        </section>
        <section className="flex flex-col items-center p-4">
          <div className='flex w-full items-center mb-4 justify-between'>
            <Image className='w-[100px] h-[100px]' src="/conys.png" width={300} height={300} alt="berry"/>
            <Image className='w-[100px] h-[100px] scale-x-[-1]' src="/heart-eyes.png" width={300} height={300} alt="berry"/>
          </div>
          <h1 className="text-2xl font-[Dancing_Script]">Happy Birthday! 🎉</h1>
          <p className="text-center">Ты, наверное, сейчас улыбаешься — и это уже делает день лучше. 
            Сегодня — твой день, и Вселенная готова слушать твои самые смелые мечты.
          </p>
          <div className='flex flex-col w-full items-center'>
            <p className='text-left text-xl w-full'>Желаю тебе:</p>
            <ul className='text-left w-full'>
              <li>Торт, который не кончится</li>
              <li>Сердца — для себя, а не только для всех остальных.</li>
              <li>Зарядки — и для телефона, и для души</li>
              <li>Много волшебства и чудес</li>
              <li>Волнений — только от просмотра сериала, а не из-за реальных людей.</li>
              <li>Такси, которое приезжает через 2 минуты, а не через 20.</li>
              <li>Улыбок — от души, а не из вежливости.</li>
              <li>Перерывов от всего, что шумит в голове.</li>
              <li>Интернета без лагов во время твоей любимой сцены.</li>
              <li>Музыки, которая лечит.</li>
              <li>Людей, которые слушают, а не ждут, чтобы вставить своё.</li>
              <li>Друзей, с которыми не страшно быть странной.</li>
              <li>Пижам, в которых ты — королева.</li>
              <li>Печенек в 3 ночи, когда душа просит уюта.</li>
              <li>Чата, в котором можно просто молчать, и тебя всё равно поймут.</li>
              <li>Слов, которые лечат, а не ранят.</li>
              <li>Состояний, когда ты любишь себя — просто так.</li>
              <li>Красивых фраз, чтобы делать скрины и плакать.</li>
              <li>Картин в голове, где ты счастлива — по-настоящему.</li>
              <li>Быть — собой.</li>
              <li>Волшебных совпадений.</li>
              <li>Сил на всё, даже когда сил нет.</li>
              <li>Дней без “я не справляюсь”.</li>
              <li>Людей, которые видят в тебе свет, даже когда ты не горишь.</li>
              <li>Песен, которые — как объятия.</li>
              <li>Утра, где не надо вставать по будильнику.</li>
              <li>Места, где ты можешь молчать, и это будет ок.</li>
              <li>Жизни, где ты не просишь, а получаешь.</li>
              <li>Кофе, который не остыл, пока ты отвлеклась.</li>
              <li>Тёплого слова в момент, когда холодно.</li>
              <li>Объятия без причины.</li>
              <li>Письма, которые приходят внезапно и радуют.</li>
              <li>Того, кто заметит, когда ты на грани.</li>
              <li>И того, кто просто скажет: “я рядом”.</li>
              <li>Тёплого одеяла и холодный подушки.</li>
              <li>Мечт, от которых мурашки.</li>
              <li>Дней без паники.</li>
              <li>Минут без телефона — но с настоящей жизнью.</li>
              <li>Лета в душе, даже зимой.</li>
              <li>Возможности сказать &quot;нет&quot; — без чувства вины.</li>
              <li>Возможности сказать &quot;да&quot; — себе.</li>
              <li>Уверенности в себе, даже когда мир — как барахолка.</li>
              <li>Голоса, который шепчет: “ты молодец”.</li>
              <li>Вдохновения — даже если ты не художник.</li>
              <li>Простых радостей: вкусной еды, случайной песни, добрых глаз.</li>
              <li>Неизвестного будущего, но с приятным предчувствием.</li>
              <li>Падений, после которых хочется встать — и идти дальше.</li>
              <li>Безопасности.</li>
              <li>Тех, кто не говорит &quot;ты слишком&quot;, &quot;ты мало&quot;, &quot;будь другой&quot;.</li>
              <li>Одиночества — не грустного, а глубокого.</li>
              <li>Диалогов с собой — честных.</li>
              <li>Безумных идей, от которых душа оживает.</li>
              <li>Спокойных вечеров. Без объяснений. Просто — спокойно.</li>
              <li>Новых любимых песен.</li>
              <li>Слёз от счастья.</li>
              <li>Счастья без причины.</li>
              <li>Фраз, которые ты перечитываешь по ночам.</li>
              <li>Поцелуев, даже если виртуальных.</li>
              <li>Дня, когда тебе просто всё — по кайфу.</li>
              <li>Света, даже если вокруг темно.</li>
              <li>Чувства, что ты — любимая.</li>
              <li>Верности — к себе.</li>
              <li>Новых “первая глава” вместо “конец”.</li>
              <li>Момента, когда ты поймёшь — “я справилась”.</li>
              <li>Радости от мелочей.</li>
              <li>Чувства, что ты жива. По-настоящему.</li>
              <li>Листьев, которые шуршат под ногами осенью.</li>
              <li>Горячего чая, если вдруг слёзы.</li>
              <li>Человека, который будет — всегда.</li>
              <li>Отпустить тех, кто не держал.</li>
              <li>Найти тех, кто держит, даже если ты молчишь.</li>
              <li>Финансового благополучия и стабильности во всем.</li>
              <li>И красивой.</li>
              <li>И нежной.</li>
              <li>И сильной. Всё сразу. Без ограничений.</li>
              <li>Ответов на свои &quot;почему&quot;.</li>
              <li>Вопросов, которые ведут к мечтам.</li>
              <li>Поддержки, когда ты не просишь.</li>
              <li>Магии, в которую веришь только ты.</li>
              <li>Пусть жизнь будет полна приятных сюрпризов.</li>
              <li>Признаний — случайных, но важных.</li>
              <li>Незабываемых путешествий и новых открытий в жизни.</li>
              <li>Секретных взглядов.</li>
              <li>Пусть магия чисел 25.05.25 исполнит желания!</li>
              <li>Любви — той самой.</li>
              <li>Себя — ту самую.</li>
              <li>И ещё одно:</li>
              <li>Пусть однажды ты прочитаешь этот список, улыбнёшься, и поймёшь:<br /> &quot;Это всё уже сбылось.&quot;</li>
            </ul>
          </div>
          <h1 className="text-[24px] mt-[20px] font-[Dancing_Script]">Final message, and yes, it’s cheesy</h1>
          <p className="text-center">Ты — как любимая песня. 
            Может, я и не знаю всех слов, 
            но точно знаю, что хочу слушать тебя снова и снова.</p>
        </section>
      </main>
      <footer className="flex flex-col w-full items-center justify-center p-4">
        <p className="text-[14px] font-[Playfair_Display]">Made by love & Adok</p>
      </footer>
    </div>
  );
}
