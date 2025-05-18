export default function theory_Theme_03() {
  const theme = document.createElement('theme')
  theme.classList.add('theme')
  theme.innerHTML = `

<div class="header2__content">
<div class="header2__wrapper-1">
<!----- Bread Crumbs ----->
    <div class="header2__bread-crumbs">
        <a href="/theory" class="back-link main__link-default">Теория</a>                  
    </div><!--bread-crumbs-->

</div><!--header__wrapper-1-->
</div><!--header2 content -->

<!----- MAIN ----->
<div class="margin__main">
<div class="main">
    <div class="main__wrapper-1">
    <h1 class="main__title-1">03: Переменные и типы</h1>
        
        <h3 class="main__title-3">Уроки</h3>
        <!----- Lessons ----->
        <ul class="main__list-1">
        <li class="main__list-1-item">
            <a class="main__link-default" href="/theory/theme_03/lesson_01">01. Переменные</a>
        </li>
        <li class="main__list-1-item">
            <a class="main__link-default" href="/theory/theme_03/lesson_02">02. Объявление переменных</a>
        </li>
        <li class="main__list-1-item">
            <a class="main__link-default" href="/theory/theme_03/lesson_03">03. Практика по созданию переменных</a>
        </li>
        <li class="main__list-1-item">
            <a class="main__link-default" href="/theory/theme_03/lesson_04">04. Примитивные типы</a>
        </li>
        <li class="main__list-1-item">
            <a class="main__link-default" href="/theory/theme_03/lesson_05">05. Ссылочный тип</a>
        </li>
         <li class="main__list-1-item">
            <a class="main__link-default" href="/theory/theme_03/lesson_06">06. Динамическая типизация</a>
        </li>

        </ul>
        </div><!--main__wrapper-1-->
        </div><!--main-->
        </div><!--margin__main
    `
  return theme
}
