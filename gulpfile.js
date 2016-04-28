'use strict';

const $ = require('gulp-load-plugins')();
const ConsoleReporter = require('jasmine').ConsoleReporter;
const gulp = require('gulp');

gulp.task('spec', runSpecs);

function runSpecs () {
  return gulp.src('spec/**/*-spec.js')
    .pipe($.jasmine({
      reporter: [
        new ConsoleReporter({print: process.stdout.write.bind(process.stdout)})
      ],
      config: {
        'spec_dir': 'spec',
        'helpers': ['helpers/**/*.js']
      }
    }));
}

