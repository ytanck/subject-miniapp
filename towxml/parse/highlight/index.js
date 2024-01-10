const config = require('../../config'),
    hljs = require('./highlight');
// config.highlight.forEach(item => {
//     hljs.registerLanguage(item, require(`./languages/${item}`).default);
// });
hljs.registerLanguage('bash', require('./languages/bash').default);hljs.registerLanguage('css', require('./languages/css').default);hljs.registerLanguage('java', require('./languages/java').default);hljs.registerLanguage('javascript', require('./languages/javascript').default);hljs.registerLanguage('less', require('./languages/less').default);hljs.registerLanguage('scss', require('./languages/scss').default);

module.exports = hljs;