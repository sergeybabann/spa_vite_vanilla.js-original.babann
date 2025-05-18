export default function theory_Theme_02() {
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
    <h1 class="main__title-1">02: Самое важное в JavaScript</h1>
        
        <h3 class="main__title-3">Уроки</h3>
        <!----- Lessons ----->
        <ul class="main__list-1">
        <li class="main__list-1-item">
            <a class="main__link-default" href="/theory/theme_02/lesson_01">01. Самое важное в JavaScript</a>
        </li>
        <li class="main__list-1-item">
            <a class="main__link-default" href="/theory/theme_02/lesson_02">02. Что такое console.log ?</a>
        </li>
        <li class="main__list-1-item">
            <a class="main__link-default" href="/theory/theme_02/lesson_03">03. Выражения</a>
        </li>

        </ul>
        </div><!--main__wrapper-1-->
        </div><!--main-->
        </div><!--margin__main
    `
  return theme
}
