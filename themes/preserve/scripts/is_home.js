hexo.extend.helper.register('is_home', function() {
  return this.page.path === 'index.html'
});

hexo.extend.helper.register('is_index', function() {
  return Boolean(this.page.__index);
});

hexo.extend.helper.register('body_classes', function() {
  //return 'foo-bar';
  var conds = {
    'is-home':    this.is_home(),
    'is-index':   this.is_index(),
    'is-page':    this.is_page(),
    'is-post':    this.is_post()
  }
  return Object.keys(conds)
    .filter(k => conds[k])
    .join(' ');
});