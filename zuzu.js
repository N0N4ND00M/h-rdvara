// Gör först att koden körs när DOM:en är klar
document.addEventListener('DOMContentLoaded', () => {
  // --- Översättningsordbok ---
  const translations = {
    sv: {
      "header.title": "🖥️ Datorns delar – Superenkelt!",
      "header.subtitle": "Här lär du dig enkelt hur datorn funkar. Tryck på \"Läs mer\" för förklaring!",
      "button.read_more": "Läs mer",

      "cpu.title": "Processor",
      "cpu.short": "Processorn är datorns hjärna. Den räknar allt!",
      "cpu.li1": "Jobbar åt hela datorn.",
      "cpu.li2": "Fler kärnor = snabbare multitasking.",
      "cpu.li3": "Måste passa i rätt plats (\"socket\") på moderkortet.",
      "cpu.more": "Processorn räknar och bestämmer allt.<br>Om du vill spela eller göra många saker samtidigt, satsa på många \"kärnor\". Se till att den passar i moderkortet!",

      "ram.title": "RAM-minne",
      "ram.short": "RAM är som ett skrivbord. Mer RAM – fler saker kan vara öppna!",
      "ram.li1": "Håller igång det du gör för stunden.",
      "ram.li2": "Ju mer RAM, desto fler program samtidigt.",
      "ram.li3": "RAM töms när datorn stängs av.",
      "ram.more": "RAM lagrar sådant du använder just nu, t.ex. internet och spel. Sätts direkt på moderkortet.",

      "gpu.title": "Grafikkort",
      "gpu.short": "Grafikkortet visar bilder och spel på skärmen.",
      "gpu.li1": "Gör att bilder och film fungerar.",
      "gpu.li2": "Viktigt om du spelar spel!",
      "gpu.li3": "Sätts fast på moderkortet.",
      "gpu.more": "Bättre grafikkort = snyggare och snabbare spel. Viktigt om du gillar film, spel och grafiskt arbete.",

      "storage.title": "Lagring",
      "storage.short": "Här sparas bilder, spel och program.",
      "storage.li1": "SSD är snabb, HDD är billig och stor.",
      "storage.li2": "Du kan ha båda för bästa resultat.",
      "storage.li3": "Allt sparas här tills du tar bort det.",
      "storage.more": "SSD startar upp allt snabbt, HDD ger stor lagringsplats. Sätts in i lådan, kopplas till moderkortet.",

      "mb.title": "Moderkort",
      "mb.short": "Moderkortet fäster allt, som vägarna i datorn.",
      "mb.li1": "Alla delar sätts fast här.",
      "mb.li2": "Kolla så allt passar innan du köper!",
      "mb.li3": "Kopplar ihop alla sladdar och kablar.",
      "mb.more": "Moderkortet håller ihop allt och bestämmer vilka delar som passar. Viktigt att välja rätt.",

      "psu.title": "Nätaggregat",
      "psu.short": "Nätaggregatet ger ström till hela datorn.",
      "psu.li1": "Ger el till alla delar.",
      "psu.li2": "Ha tillräckligt med \"watt\".",
      "psu.li3": "Kablar går härifrån till resten av datorn.",
      "psu.more": "Utan nätaggregat funkar ingenting! Rätt mängd kraft så allt orkar.",

      "cooler.title": "Kylning",
      "cooler.short": "Kylning håller datorn sval och glad.",
      "cooler.li1": "Fläkt eller vatten kan kyla.",
      "cooler.li2": "Bra kylning = längre liv för datorn.",
      "cooler.li3": "Monteras på processorn eller grafikkortet.",
      "cooler.more": "Fläktar eller vattenkylningssystem hindrar att datorn blir för varm. Extra viktigt om du spelar eller jobbar hårt.",

      "windows.title": "Windows",
      "windows.short": "Operativsystemet Windows — det program som kör din dator.",
      "windows.li1": "Hantera filer och program.",
      "windows.li2": "Många program är designade för Windows.",
      "windows.li3": "Kommer installerat på många datorer.",
      "windows.more": "Windows är ett vanligt operativsystem som hjälper dig att köra program och hantera filer. Det kan uppdateras och anpassas med program.",

      "footer.text": "© 2025 Datorinfo"
    },

    en: {
      "header.title": "🖥️ Computer Parts – Super Simple!",
      "header.subtitle": "Learn how the computer works easily here. Press \"Read more\" for an explanation!",
      "button.read_more": "Read more",

      "cpu.title": "Processor",
      "cpu.short": "The processor is the computer's brain. It does the calculations!",
      "cpu.li1": "Works for the whole computer.",
      "cpu.li2": "More cores = faster multitasking.",
      "cpu.li3": "Must fit the correct socket on the motherboard.",
      "cpu.more": "The processor performs calculations and controls everything.<br>If you want to game or run many tasks at once, choose more cores. Make sure it fits the motherboard!",

      "ram.title": "RAM",
      "ram.short": "RAM is like a desk. More RAM — more things can be open!",
      "ram.li1": "Keeps what you're working on right now.",
      "ram.li2": "More RAM allows more programs at the same time.",
      "ram.li3": "RAM is cleared when the computer is turned off.",
      "ram.more": "RAM stores what you are using now, like web pages and games. It is installed directly on the motherboard.",

      "gpu.title": "Graphics Card",
      "gpu.short": "The graphics card shows images and games on the screen.",
      "gpu.li1": "Makes images and video work.",
      "gpu.li2": "Important if you play games!",
      "gpu.li3": "Installed on the motherboard.",
      "gpu.more": "A better graphics card = nicer and faster games. Important for movies, games and graphic work.",

      "storage.title": "Storage",
      "storage.short": "Where pictures, games and programs are saved.",
      "storage.li1": "SSD is fast, HDD is cheap and large.",
      "storage.li2": "You can have both for best results.",
      "storage.li3": "Everything is saved here until you delete it.",
      "storage.more": "SSD boots and loads things fast, HDD gives large storage space. Installed in the case and connected to the motherboard.",

      "mb.title": "Motherboard",
      "mb.short": "The motherboard holds everything together, like roads in the computer.",
      "mb.li1": "All parts are attached here.",
      "mb.li2": "Check compatibility before you buy!",
      "mb.li3": "Connects all cables and components.",
      "mb.more": "The motherboard connects all parts and decides which components fit. It's important to choose the right one.",

      "psu.title": "Power Supply",
      "psu.short": "The power supply provides electricity to the whole computer.",
      "psu.li1": "Supplies power to all parts.",
      "psu.li2": "Make sure you have enough watts.",
      "psu.li3": "Cables go from here to the rest of the computer.",
      "psu.more": "Nothing works without the power supply! Choose enough power so everything runs.",

      "cooler.title": "Cooling",
      "cooler.short": "Cooling keeps the computer cool and happy.",
      "cooler.li1": "Fans or water can cool.",
      "cooler.li2": "Good cooling = longer life for the computer.",
      "cooler.li3": "Mounted on the processor or graphics card.",
      "cooler.more": "Fans or water cooling systems prevent the computer from getting too hot. Extra important if you play or work hard.",

      "windows.title": "Windows",
      "windows.short": "The Windows operating system — the software that runs your computer.",
      "windows.li1": "Manages files and programs.",
      "windows.li2": "Many applications are designed for Windows.",
      "windows.li3": "Comes preinstalled on many computers.",
      "windows.more": "Windows is a common operating system that helps you run programs and manage files. It can be updated and customized with software.",

      "footer.text": "© 2025 Computer Info"
    },

    ru: {
      "header.title": "🖥️ Части компьютера — Очень просто!",
      "header.subtitle": "Здесь вы легко узнаете, как работает компьютер. Нажмите «Подробнее» для объяснения!",
      "button.read_more": "Подробнее",

      "cpu.title": "Процессор",
      "cpu.short": "Процессор — мозг компьютера. Он выполняет вычисления!",
      "cpu.li1": "Работает на весь компьютер.",
      "cpu.li2": "Больше ядер = быстрее многозадачность.",
      "cpu.li3": "Должен подходить к сокету на материнской плате.",
      "cpu.more": "Процессор выполняет вычисления и управляет всем.<br>Если вы хотите играть или запускать много задач одновременно, выбирайте больше ядер. Убедитесь, что он совместим с материнской платой!",

      "ram.title": "ОЗУ",
      "ram.short": "ОЗУ — как рабочий стол. Больше ОЗУ — больше открытых вещей!",
      "ram.li1": "Хранит то, над чем вы работаете сейчас.",
      "ram.li2": "Больше ОЗУ — больше программ одновременно.",
      "ram.li3": "ОЗУ очищается при выключении компьютера.",
      "ram.more": "ОЗУ хранит то, что вы используете прямо сейчас, например сайты и игры. Устанавливается на материнскую плату.",

      "gpu.title": "Видеокарта",
      "gpu.short": "Видеокарта выводит изображение и игры на экран.",
      "gpu.li1": "Обеспечивает работу изображений и видео.",
      "gpu.li2": "Важно для игр!",
      "gpu.li3": "Устанавливается на материнскую плату.",
      "gpu.more": "Лучше видеокарта = красивее и быстрее игры. Важно для фильмов, игр и графики.",

      "storage.title": "Хранилище",
      "storage.short": "Здесь сохраняются фото, игры и программы.",
      "storage.li1": "SSD быстрый, HDD дешевый и большой.",
      "storage.li2": "Можно использовать оба для лучшего результата.",
      "storage.li3": "Все хранится здесь, пока вы не удалите.",
      "storage.more": "SSD быстро загружает систему и программы, HDD дает много места. Устанавливается в корпус и подключается к материнской плате.",

      "mb.title": "Материнская плата",
      "mb.short": "Материнская плата соединяет все, как дороги в компьютере.",
      "mb.li1": "Все детали крепятся здесь.",
      "mb.li2": "Проверьте совместимость перед покупкой!",
      "mb.li3": "Соединяет все кабели и компоненты.",
      "mb.more": "Материнская плата объединяет все части и определяет, что подходит. Важно выбрать правильно.",

      "psu.title": "Блок питания",
      "psu.short": "Блок питания даёт электричество всему компьютеру.",
      "psu.li1": "Подаёт питание всем частям.",
      "psu.li2": "Убедитесь, что достаточно ватт.",
      "psu.li3": "Отсюда идут кабели к остальному компьютеру.",
      "psu.more": "Без блока питания ничего не работает! Выберите достаточно мощности.",

      "cooler.title": "Охлаждение",
      "cooler.short": "Охлаждение держит компьютер в прохладе и в порядке.",
      "cooler.li1": "Охлаждают вентиляторы или вода.",
      "cooler.li2": "Хорошее охлаждение = долгий срок службы.",
      "cooler.li3": "Устанавливается на процессор или видеокарту.",
      "cooler.more": "Вентиляторы или водяное охлаждение не дают компьютеру перегреваться. Особенно важно при играх или тяжёлой работе.",

      "windows.title": "Windows",
      "windows.short": "Операционная система Windows — программа, которая управляет вашим компьютером.",
      "windows.li1": "Управляет файлами и программами.",
      "windows.li2": "Многие программы созданы для Windows.",
      "windows.li3": "Предустанавливается на многих компьютерах.",
      "windows.more": "Windows — популярная операционная система, которая помогает запускать программы и управлять файлами. Она может обновляться и настраиваться с помощью приложений.",

      "footer.text": "© 2025 Информация о компьютере"
    },

    es: {
      "header.title": "🖥️ Partes del ordenador – ¡Super sencillo!",
      "header.subtitle": "Aquí aprendes fácilmente cómo funciona el ordenador. Pulsa \"Leer más\" para una explicación!",
      "button.read_more": "Leer más",

      "cpu.title": "Procesador",
      "cpu.short": "El procesador es el cerebro del ordenador. ¡Hace los cálculos!",
      "cpu.li1": "Trabaja para todo el ordenador.",
      "cpu.li2": "Más núcleos = multitarea más rápida.",
      "cpu.li3": "Debe encajar en el zócalo correcto de la placa base.",
      "cpu.more": "El procesador realiza cálculos y controla todo.<br>Si quieres jugar o hacer muchas tareas a la vez, apuesta por más núcleos. ¡Asegúrate de que encaja en la placa base!",

      "ram.title": "RAM",
      "ram.short": "La RAM es como un escritorio. ¡Más RAM, más cosas abiertas!",
      "ram.li1": "Mantiene lo que estás usando en este momento.",
      "ram.li2": "Cuanta más RAM, más programas a la vez.",
      "ram.li3": "La RAM se borra al apagar el ordenador.",
      "ram.more": "La RAM guarda lo que estás usando ahora, por ejemplo páginas y juegos. Se coloca directamente en la placa base.",

      "gpu.title": "Tarjeta gráfica",
      "gpu.short": "La tarjeta gráfica muestra imágenes y juegos en la pantalla.",
      "gpu.li1": "Hace que las imágenes y vídeos funcionen.",
      "gpu.li2": "¡Importante si juegas!",
      "gpu.li3": "Se instala en la placa base.",
      "gpu.more": "Mejor tarjeta gráfica = juegos más bonitos y rápidos. Importante para películas, juegos y trabajo gráfico.",

      "storage.title": "Almacenamiento",
      "storage.short": "Aquí se guardan fotos, juegos y programas.",
      "storage.li1": "SSD es rápido, HDD es barato y grande.",
      "storage.li2": "Puedes tener ambos para un mejor resultado.",
      "storage.li3": "Todo se guarda aquí hasta que lo borras.",
      "storage.more": "SSD inicia todo rápido, HDD ofrece mucho espacio. Se instala en la caja y se conecta a la placa base.",

      "mb.title": "Placa base",
      "mb.short": "La placa base sujeta todo, como las carreteras en el ordenador.",
      "mb.li1": "Todas las partes se fijan aquí.",
      "mb.li2": "¡Comprueba que todo sea compatible antes de comprar!",
      "mb.li3": "Conecta todos los cables y componentes.",
      "mb.more": "La placa base une todas las partes y decide qué encaja. Es importante elegir la correcta.",

      "psu.title": "Fuente de alimentación",
      "psu.short": "La fuente da corriente a todo el ordenador.",
      "psu.li1": "Proporciona energía a todas las partes.",
      "psu.li2": "Ten suficiente potencia (vatios).",
      "psu.li3": "Los cables salen de aquí hacia el resto del ordenador.",
      "psu.more": "Sin la fuente no funciona nada. La potencia adecuada hace que todo funcione.",

      "cooler.title": "Refrigeración",
      "cooler.short": "La refrigeración mantiene el ordenador fresco y contento.",
      "cooler.li1": "Ventilador o agua pueden enfriar.",
      "cooler.li2": "Buena refrigeración = mayor vida útil.",
      "cooler.li3": "Se monta en el procesador o la tarjeta gráfica.",
      "cooler.more": "Ventiladores o sistemas de agua impiden que el ordenador se caliente demasiado. Muy importante si juegas o trabajas mucho.",

      "windows.title": "Windows",
      "windows.short": "El sistema operativo Windows — el programa que controla tu ordenador.",
      "windows.li1": "Gestiona archivos y programas.",
      "windows.li2": "Muchos programas están diseñados para Windows.",
      "windows.li3": "Viene preinstalado en muchos ordenadores.",
      "windows.more": "Windows es un sistema operativo común que te ayuda a ejecutar programas y gestionar archivos. Puede actualizarse y personalizarse con software.",

      "footer.text": "© 2025 Información de ordenadores"
    },

    zh: {
      "header.title": "🖥️ 电脑部件 – 超简单！",
      "header.subtitle": "在这里您可以轻松了解电脑如何工作。按“阅读更多”查看说明！",
      "button.read_more": "阅读更多",

      "cpu.title": "处理器",
      "cpu.short": "处理器是电脑的大脑。它负责计算！",
      "cpu.li1": "为整个电脑工作。",
      "cpu.li2": "更多核心 = 更快的多任务处理。",
      "cpu.li3": "必须与主板的插座匹配。",
      "cpu.more": "处理器负责计算并控制一切。<br>如果您想玩游戏或同时运行很多任务，选择更多核心。确保它与主板兼容！",

      "ram.title": "内存（RAM）",
      "ram.short": "内存就像工作台。更多内存——可以打开更多程序！",
      "ram.li1": "保存您当前正在使用的内容。",
      "ram.li2": "内存越大，可以同时运行越多程序。",
      "ram.li3": "电脑关机时内存会被清空。",
      "ram.more": "内存存储您当前正在使用的内容，例如网页和游戏。直接插在主板上。",

      "gpu.title": "显卡",
      "gpu.short": "显卡在屏幕上显示图像和游戏。",
      "gpu.li1": "让图像和视频正常显示。",
      "gpu.li2": "如果玩游戏很重要！",
      "gpu.li3": "安装在主板上。",
      "gpu.more": "更好的显卡=更漂亮、更流畅的游戏。对于电影、游戏和图像工作很重要。",

      "storage.title": "存储",
      "storage.short": "这里保存图片、游戏和程序。",
      "storage.li1": "SSD 快速，HDD 便宜且容量大。",
      "storage.li2": "两者结合效果更好。",
      "storage.li3": "所有内容会保存在这里，直到你删除它。",
      "storage.more": "SSD 启动和加载都更快，HDD 提供大量存储空间。安装在机箱内并连接到主板。",

      "mb.title": "主板",
      "mb.short": "主板把所有部件连接在一起，就像电脑里的道路。",
      "mb.li1": "所有部件都安装在这里。",
      "mb.li2": "购买前请检查兼容性！",
      "mb.li3": "连接所有线缆和部件。",
      "mb.more": "主板将所有部件连接在一起并决定哪些部件兼容。选择合适的很重要。",

      "psu.title": "电源",
      "psu.short": "电源为整个电脑提供电力。",
      "psu.li1": "为所有部件供电。",
      "psu.li2": "确保瓦数足够。",
      "psu.li3": "线缆从这里连接到电脑其他部分。",
      "psu.more": "没有电源一切都无法工作！选择足够的功率让一切运行。",

      "cooler.title": "散热",
      "cooler.short": "散热让电脑保持冷却和稳定。",
      "cooler.li1": "风扇或水冷可以散热。",
      "cooler.li2": "良好散热 = 更长的使用寿命。",
      "cooler.li3": "安装在处理器或显卡上。",
      "cooler.more": "风扇或水冷系统防止电脑过热。如果你玩游戏或重度工作尤其重要。",

      "windows.title": "Windows",
      "windows.short": "Windows 操作系统——运行你电脑的主要软件。",
      "windows.li1": "管理文件和程序。",
      "windows.li2": "许多软件是专为 Windows 设计的。",
      "windows.li3": "预装在许多电脑上。",
      "windows.more": "Windows 是一种常见的操作系统，帮助你运行程序并管理文件。它可以通过软件更新和自定义。",

      "footer.text": "© 2025 电脑信息"
    }
  };

  // --- Hjälpfunktion för att sätta språk i DOM ---
  function applyTranslations(lang) {
    const map = translations[lang] || translations.sv;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (!key) return;
      if (map[key]) el.innerHTML = map[key];
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(img => {
      const key = img.getAttribute('data-i18n-alt');
      if (map[key]) img.setAttribute('alt', stripHtml(map[key]));
    });

    if (map['header.title']) document.title = stripHtml(map['header.title']);
  }

  function stripHtml(str) {
    return str.replace(/<[^>]+>/g, '');
  }

  function setLanguage(lang) {
    localStorage.setItem('siteLang', lang);
    const select = document.getElementById('langSelect');
    if (select) select.value = lang;
    applyTranslations(lang);
  }

  const saved = localStorage.getItem('siteLang');
  let defaultLang = 'sv';
  if (saved && translations[saved]) defaultLang = saved;
  else {
    const nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (nav.startsWith('en')) defaultLang = 'en';
    else if (nav.startsWith('ru')) defaultLang = 'ru';
    else if (nav.startsWith('es')) defaultLang = 'es';
    else if (nav.startsWith('zh')) defaultLang = 'zh';
    else defaultLang = 'sv';
  }

  const langSelect = document.getElementById('langSelect');
  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });
  }

  function setupToggles() {
    document.querySelectorAll('.more-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const target = document.getElementById(targetId);
        if (!target) return;

        document.querySelectorAll('.more-info').forEach(panel => {
          if (panel.id !== targetId) {
            panel.classList.remove('active');
            panel.setAttribute('aria-hidden', 'true');
          }
        });

        document.querySelectorAll('.more-btn').forEach(b => {
          if (b.getAttribute('data-target') !== targetId) {
            b.setAttribute('aria-expanded', 'false');
          }
        });

        const isActive = target.classList.toggle('active');
        target.setAttribute('aria-hidden', isActive ? 'false' : 'true');
        btn.setAttribute('aria-expanded', isActive ? 'true' : 'false');

        if (isActive) {
          setTimeout(() => {
            target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }, 160);
        }
      });
    });
  }

  applyTranslations(defaultLang);
  if (langSelect) langSelect.value = defaultLang;
  setupToggles();
});
