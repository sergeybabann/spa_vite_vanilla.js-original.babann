export default function Theory() {
  const theory = document.createElement('theory')
  theory.classList.add('theory')
  theory.innerHTML = `
    <div class="header__content">
            <div class="header__wrapper-1">
            <h1 class="header__title-1">Курс JavaScript
            <span class="header__author-1">Богдан Сташчук</span>
            </h1>
            
            <h2 class="header__title-2">Теория</h2>
            </div><!--header__wrapper-1-->
            
            <!-- Menu Navigation -->
            <div class="header__menu">
                <ul class="header__menu-list">
                <li class="header__menu-item">
                    <a class="header__menu-link" href="/">Home</a>
                </li>
                <li class="header__menu-item">
                    <a class="header__menu-link" href="/theory">Теория</a>
                </li>
                </ul>
            </div><!--header__menu-->
            </div><!--header__content-->
            
    <!-- Main Content -->
    <div class="main">

    <div class="main__title-1">Теория</div>
        <ul class="main__list-1">
            <li class="main__list-1-item"><a href="/theory/theme_01" class="main__link-default">01. Введение</a></li> 
            <li class="main__list-1-item"><a href="/theory/theme_02" class="main__link-default">02. Самое важное в JavaScript и console.log</a></li> 
            <li class="main__list-1-item"><a href="/theory/theme_03" class="main__link-default">03. Переменные и типы</a></li>
            <li class="main__list-1-item"><a href="/theory/theme_04" class="main__link-default">04. Объекты</a></li>
            <li class="main__list-1-item"><a href="/theory/theme_05" class="main__link-default">05. Мутация объектов</a></li>
            <li class="main__list-1-item"><a href="/theory/theme_06" class="main__link-default">06. Функции</a></li>
            <li class="main__list-1-item"><a href="/theory/theme_07" class="main__link-default">07. Области видимости</a></li>
            <li class="main__list-1-item"><a href="/theory/theme_08" class="main__link-default">08. Операторы</a></li>
            <li class="main__list-1-item"><a href="/theory/theme_09" class="main__link-default">09. Логические операторы</a></li>
            <li class="main__list-1-item"><a href="/theory/theme_10" class="main__link-default">10. Оператор разделения на свойства</a></li>
            <li class="main__list-1-item"><a href="/theory/theme_11" class="main__link-default">11. Конкатенация строк</a></li>
            <li class="main__list-1-item"><a href="/theory/theme_12" class="main__link-default">12. Функциональные выражения и стрелочные функции</a></li>
            <li class="main__list-1-item"><a href="/theory/theme_13" class="main__link-default">13. Обработка ошибок</a></li>
            <li class="main__list-1-item"><a href="/theory/theme_14" class="main__link-default">14. Инструкции</a></li> 
            <li class="main__list-1-item"><a href="/theory/theme_15" class="main__link-default">15. Массивы</a></li>
            <li class="main__list-1-item"><a href="/theory/theme_16" class="main__link-default">16. Деструктуризация</a></li>
            <li class="main__list-1-item"><a href="/theory/theme_17" class="main__link-default">17. Условные инструкции</a></li>
            <li class="main__list-1-item"><a href="/theory/theme_18" class="main__link-default">18. Тернарный оператор</a></li>
            <li class="main__list-1-item"><a href="/theory/theme_19" class="main__link-default">19. Циклы</a></li>
            <li class="main__list-1-item"><a href="/theory/theme_20" class="main__link-default">20. Модули</a></li>
            <li class="main__list-1-item"><a href="/theory/theme_21" class="main__link-default">21. Классы и прототипы</a></li>
            <li class="main__list-1-item"><a href="/theory/theme_22" class="main__link-default">22. Промисы</a></li>
            <li class="main__list-1-item"><a href="/theory/theme_23" class="main__link-default">23. Асинхронные функции</a></li>
        </ul>
    </div>  
    `
  return theory
}

// console.log('About Page Script Loaded');
