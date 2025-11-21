// Configuração para rodar testes Angular no WSL usando Brave (Windows)
process.env.CHROME_BIN = '/mnt/c/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe';

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],

    client: {
      jasmine: {},
      clearContext: false // mantém o reporter visível
    },

    jasmineHtmlReporter: {
      suppressAll: true
    },

    coverageReporter: {
      dir: require('path').join(__dirname, './coverage'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },

    reporters: ['progress', 'kjhtml'],

    // Aqui definimos o Brave Headless para WSL
    customLaunchers: {
      BraveHeadless: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },

    browsers: ['BraveHeadless'], // navegador usado nos testes

    restartOnFileChange: true
  });
};
