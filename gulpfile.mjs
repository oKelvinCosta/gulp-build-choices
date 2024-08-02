// Instanciando módulos
import gulp from "gulp";
import { src, dest } from "gulp";

// import gulp from "gulp";
// const { src, dest } = gulp;

import autoprefixer from "gulp-autoprefixer";
import * as sass from "sass";
import gulpSass from "gulp-sass";
const sassCompiler = gulpSass(sass);

import babel from "gulp-babel";
import uglify from "gulp-uglify";
import imagemin, { gifsicle, mozjpeg, optipng, svgo } from "gulp-imagemin";
import { deleteAsync } from "del";
import zip from "gulp-zip";
import path from "path";


/**
 * Exclui todos os arquivos e diretórios do diretório 'dist',
 * exceto os arquivos '*.xsd' e '*.xml' que estão diretamente
 * dentro do diretório 'dist'.
 *
 * @return {Promise} Uma Promise que é resolvida quando todos os
 * arquivos e diretórios são excluídos.
 */

gulp.task("clean", () => {
  return deleteAsync(["dist/**", "!dist", "!dist/*.xsd", "!dist/*.xml"]);
});

/**
 * Copia o arquivo 'index.html' para o diretório 'dist'.
 *
 * @return {Stream} O fluxo de arquivos que foi copiado.
 */
gulp.task("copyHtml", () => {
  return src("index.html").pipe(dest("dist"));
});

/**
 * Compila os arquivos JavaScript.
 *
 * @return {Stream} O fluxo de arquivos JavaScript compilados.
 */

gulp.task("buildJs", () => {
  return (
    gulp
      // Pasta de origem, pega todos os arquivos JS em todas as pastas
      .src("src/js/**/*.js")
      // Não funcionou com o materialize.js
      // .pipe(
      //   babel({
      //     presets: ["@babel/env"],
      //   })
      // )
      // Minifica arquivos JS.
      .pipe(uglify())
      // Pasta de destino
      .pipe(gulp.dest("dist/src/js"))
  );
});

// Otimizar imagens
gulp.task("buildImg", () => {
  return (
    gulp
      // Pasta de origem
      .src("src/img/**", {
        base: "src/img",
        encoding: false,
      })
      .pipe(
        imagemin([
          gifsicle({interlaced: true}),
          mozjpeg({quality: 80, progressive: true}),
          optipng({optimizationLevel: 5}),
          svgo({
            plugins: [
              {
                name: 'removeViewBox',
                active: true
              },
              {
                name: 'cleanupIDs',
                active: false
              }
            ]
          })
        ])
      )
      // Pasta de destino
      .pipe(gulp.dest("dist/src/img"))
  );
});





/**
+ * Compila os arquivos SCSS em CSS compactado e aplica o autoprefixing.
+ *
+ * @return {Promise<void>} Uma promessa que é resolvida quando a compilação
+ * e o autoprefixing são concluídos.
+ */

gulp.task("buildScss", () => {
  return gulp
    .src("src/scss/main.scss")
    .pipe(
      sassCompiler({
        outputStyle: "compressed",
      })
    )
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(gulp.dest("dist/src/css/"));
});

/**
 * Cria um arquivo zip contendo todos os arquivos do diretório 'dist'.
 *
 * @return {Promise} Uma Promise que é resolvida quando o arquivo zip é criado.
 */

gulp.task("zip", () => {
  // Obtém o nome do diretório pai
  const dirname = path.basename(path.resolve());
  return gulp
    .src("dist/**")
    .pipe(zip(`${dirname}_SCORM.zip`))
    .pipe(gulp.dest("dist"));
});

let functionsNames = [
  "clean",
  "buildJs",
  "buildScss",
  "buildImg",
  "copyHtml",
  "zip",
];
// Executa de forma sequencial
gulp.task("default", gulp.series(functionsNames));
