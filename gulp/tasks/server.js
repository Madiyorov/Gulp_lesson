

export const server = (done) => {
    app.plugins.browsersync.init({
        server: {
            baseDir: `${app.path.build.html}` /* базовая папка откуда нужно запустить файл */
        },
        notyfy: false, /* Сообщения в браузоре */
        port: 3000
    })
}