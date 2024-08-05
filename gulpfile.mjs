// Instanciando módulos
import gulp from "gulp";
import { src, dest } from "gulp";

// import gulp from "gulp";
// const { src, dest } = gulp;

import autoprefixer from "gulp-autoprefixer";
import * as sass from "sass";
import gulpSass from "gulp-sass";
const sassCompiler = gulpSass(sass);
import purgecss from "gulp-purgecss";
import cleanCSS from "gulp-clean-css";

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
          gifsicle({ interlaced: true }),
          mozjpeg({ quality: 80, progressive: true }),
          optipng({ optimizationLevel: 5 }),
          svgo({
            plugins: [
              {
                name: "removeViewBox",
                active: true,
              },
              {
                name: "cleanupIDs",
                active: false,
              },
            ],
          }),
        ])
      )
      // Pasta de destino
      .pipe(gulp.dest("dist/src/img"))
  );
});


/**
 * Compila os arquivos SCSS para CSS e aplica o Autoprefixer.
 *
 * @return {Promise<void>} Uma promessa que é resolvida quando os arquivos SCSS são compilados e o Autoprefixer é aplicado.
 */
gulp.task("buildScss", () => {
  return gulp
    .src("src/scss/main.scss")
    .pipe(
      sassCompiler({
        outputStyle: "expanded", // Primeiro compilar sem minificar
      })
    )
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(gulp.dest("dist/src/css"));
});


/**
 * Aplica o PurgeCSS aos arquivos CSS no diretório 'dist/src/css'.
 *
 * O PurgeCSS remove todas as classes que não são usadas em nenhum arquivo HTML
 * ou JavaScript. Isso é útil para reduzir o tamanho dos arquivos CSS e melhorar
 * o desempenho da página.
 *
 * @return {Promise<void>} Uma promessa que é resolvida quando o PurgeCSS é aplicado.
 */
gulp.task("purgecss", () => {
  return gulp
    .src("dist/src/css/*.css")
    .pipe(
      purgecss({
        // Arquivos HTML e JavaScript que contêm referências a classes CSS.
        content: ["*.html", "src/**/*.js"],
      })
    )
    .pipe(gulp.dest("dist/src/css"));
});


/**
 * Minifica os arquivos CSS no diretório 'dist/src/css'.
 *
 * @return {Promise<void>} Uma promessa que é resolvida quando os arquivos
 * CSS são minificados.
 */
gulp.task("minify-css", () => {
  // Seleciona todos os arquivos CSS no diretório 'dist/src/css'
  return (
    gulp
      .src("dist/src/css/*.css")
      // Minifica os arquivos CSS usando a biblioteca clean-css
      .pipe(cleanCSS({ compatibility: "ie8" }))
      // Especifica o diretório de destino para os arquivos minificados
      .pipe(gulp.dest("dist/src/css"))
  );
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
    .src("dist/**", {encoding: false})
    .pipe(zip(`${dirname}_SCORM.zip`))
    .pipe(gulp.dest("dist"));
});

let functionsNames = [
  "clean",
  "buildJs",
  "buildScss",
  "purgecss",
  "minify-css",
  "buildImg",
  "copyHtml",
  "zip",
];
// Executa de forma sequencial
gulp.task("default", gulp.series(functionsNames));
