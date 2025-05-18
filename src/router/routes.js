const routes = {
  '/': () => import('../pages/home/Home.js'),

  /*-------------------- theory --------------------*/
  '/theory': () => import('../pages/theory/theory.js'),

  /*---------- 01 THEME ----------*/
  '/theory/theme_01': () => import('../pages/theory/theory__theme_01.js'),

  /*---------- LESSONS ----------*/
  '/theory/theme_01/lesson_01': () =>
    import('../pages/theory/01_theme/01_lesson.js'),

  '/theory/theme_01/lesson_02': () =>
    import('../pages/theory/01_theme/02_lesson.js'),

  /*---------- 02 THEME ----------*/
  '/theory/theme_02': () => import('../pages/theory/theory__theme_02.js'),

  /*---------- LESSONS ----------*/
  '/theory/theme_02/lesson_01': () =>
    import('../pages/theory/02_theme/01_lesson.js'),

  '/theory/theme_02/lesson_02': () =>
    import('../pages/theory/02_theme/02_lesson.js'),

  '/theory/theme_02/lesson_03': () =>
    import('../pages/theory/02_theme/03_lesson.js'),

  /*---------- 03 THEME ----------*/
  '/theory/theme_03': () => import('../pages/theory/theory__theme_03.js'),

  /*---------- LESSONS ----------*/
  '/theory/theme_03/lesson_01': () =>
    import('../pages/theory/03_theme/01_lesson.js'),

  '/theory/theme_03/lesson_02': () =>
    import('../pages/theory/03_theme/02_lesson.js'),

  '/theory/theme_03/lesson_03': () =>
    import('../pages/theory/03_theme/03_lesson.js'),

  '/theory/theme_03/lesson_04': () =>
    import('../pages/theory/03_theme/04_lesson.js'),

  '/theory/theme_03/lesson_05': () =>
    import('../pages/theory/03_theme/05_lesson.js'),

  '/theory/theme_03/lesson_06': () =>
    import('../pages/theory/03_theme/06_lesson.js'),
}

const loadRoute = async (path) => {
  // Проверяем, если путь указывает на статический файл
  if (path.startsWith('/pages/')) {
    window.location.href = path // Перенаправляем браузер на статический HTML-файл
    return
  }

  // Загрузка компонентов через маршруты
  const loadComponent = routes[path] || routes['/']
  try {
    const module = await loadComponent()
    appContainer.innerHTML = '' // Очистка перед загрузкой новой страницы
    appContainer.appendChild(await module.default())
  } catch (error) {
    console.error('Ошибка загрузки страницы:', error)
    appContainer.innerHTML = '<h2>Ошибка загрузки страницы</h2>'
  }
}

export default routes
