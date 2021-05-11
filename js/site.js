var Menu = {
  expanded: false,

  init: function() {
    this.navigation = document.getElementById('main-navigation');
    this.navigationList = document.getElementById('main-navigation-list');
    this.menuButton = document.getElementById('menu-button');
    this.menuButton.addEventListener('click', this.toggle.bind(this));
    this.navigationList.addEventListener('click', this.collapse.bind(this));
  },

  toggle: function(e) {
      if (this.expanded) {
        this.collapse();
      } else {
        this.expand();
      }
  },

  collapse: function() {
    this.expanded = false;
    this.navigation.classList.remove('expanded');
    window.removeEventListener('scroll', this.collapse.bind(this));
  },

  expand: function() {
    this.expanded = true;
    this.navigation.classList.add('expanded');
    window.addEventListener('scroll', this.collapse.bind(this));
  }
}

window.addEventListener('load', function page_onLoad() {
  window.removeEventListener('load', page_onLoad);
  Menu.init();
});
