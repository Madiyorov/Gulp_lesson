// src() - получает доступ к файлам и папкам по указанному пути
// .pipe() - действие
//  dest() - вывод результата файла в папку назначения

import pug from 'gulp-pug';
import versionNumber from 'gulp-version-number'

export const html = () => {
    return app .gulp.src(app.path.src.html)
    .pipe(app.plugins.plumber(app.plugins.notify.onError({
        title: "HTML",
        message: "Error:<%= error.message%>"
    })))
    .pipe(pug())
    .pipe(versionNumber ({
        'version': '%DT%',  /* Указываем текущую дату */
        'append': {
            'key': '_v',
            'cover': 0,
            'to': ['css', 'js']
        },
        'output': {
            'file': 'gulp/version.json' /* там хранятся ключи */
        }
    }))  
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream())
}