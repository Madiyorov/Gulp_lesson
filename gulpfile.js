// Подключаем основной модуль
import gulp from 'gulp';
// Импорт путей
import {path} from './gulp/config/path.js';
import {plugins} from './gulp/config/plugins.js';

//Передаем значения в глобальную переменную 
global.app = {
    path,
    gulp,
    plugins
}

// Импорт задач 
import {html} from './gulp/tasks/html.js';
import {server} from './gulp/tasks/server.js';
import {reset} from './gulp/tasks/reset.js';
import {style} from './gulp/tasks/style.js';
import {images} from './gulp/tasks/images.js';
import {js} from './gulp/tasks/js.js';
import {fonts} from './gulp/tasks/fonts';




// наблюдатель за изменениями в файлах
function watcher() {
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.style, style)
    gulp.watch(path.watch.images, images)
    gulp.watch(path.watch.js, js)
}


// Основные задачи
const mainTasks = gulp.series(fonts, gulp.parallel(html, style, images, js))
/* series() - Последовательное выполнение задач
    parallel() - параллельное выпольнение задач
*/


// Построение сценариев выполнения
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))

const build = gulp.series(reset, mainTasks)

// экспорт сценариев
export {dev, build}


// выполнение сценария по умолчанию
gulp.task('default', dev)