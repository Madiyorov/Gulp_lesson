import plumber from 'gulp-plumber';  /* oбработка ошибок */
import notify from 'gulp-notify';   /* Вывод сообщения */
import browsersync from 'browser-sync'; /* Этот плагин для открытия браузера и перезагрузки */

// 
export const plugins = {
    plumber,
    notify,
    browsersync
}