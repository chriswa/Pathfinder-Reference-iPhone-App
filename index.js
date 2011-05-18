function initSpells() {
  return new Ext.NestedList({
    displayField: 'text',
    store: sampleDataStore(),
    
    // for TabPanel
    iconCls: 'bookmarks',
    title: 'Spells'
  });
}

function initSearch() {
  var toolbar = new Ext.Toolbar({
    dock: 'top',
    title: 'Search',
    items: []
  });
  return new Ext.Panel({
    html: "Search!",
    dockedItems: [ toolbar ],
    
    // for TabPanel
    cls: 'tabbed-panel',
    iconCls: 'search',
    title: 'Search'
  });
}

function initRules() {
  var toolbar = new Ext.Toolbar({
    dock: 'top',
    title: 'Rules',
    items: []
  });
  return new Ext.Panel({
    html: "Rules!",
    dockedItems: [ toolbar ],
    
    // for TabPanel
    cls: 'tabbed-panel',
    iconCls: 'settings',
    title: 'Rules'
  });
}

function initConditions() {
  var toolbar = new Ext.Toolbar({
    dock: 'top',
    title: 'Conditions',
    items: []
  });
  return new Ext.Panel({
    html: "Conditions!",
    dockedItems: [ toolbar ],
    
    // for TabPanel
    cls: 'tabbed-panel',
    iconCls: 'time',
    title: 'Conditions'
  });
}

function initMain() {
  return new Ext.TabPanel({
    fullscreen: true,
    deferredRender: false, // ???
    //autoScroll: true, // ???
    //margins: '0 4 4 0', // ???
    //closable: false, // ???
    //type: 'light',
    tabBar: {
      dock: 'bottom',
      scroll: 'horizontal',
      sortable: true,
      layout: {
        pack: 'center'
      }
    },
    cardSwitchAnimation: {
      type: 'slide',
      cover: true
    },
    defaults: {
      scroll: 'vertical'
    },
    //cls: 'card1',
    items: [
      initSpells(),
      initSearch(),
      initRules(),
      initConditions()
      //{ iconCls: 'download', title: 'Download' },
      //{ iconCls: 'favorites', title: 'Favorites' },
      //{ iconCls: 'info', title: 'Info' },
      //{ iconCls: 'settings', title: 'Settings' },
      //{ iconCls: 'team', title: 'Team' },
      //{ iconCls: 'time', title: 'Time' },
      //{ iconCls: 'user', title: 'User' },
      //{ iconCls: 'more', title: 'More' }
    ],
    //id: 'toolbartxt',     // ???
    //styleHtmlContent: true, // ???
    dockedItems: []
  });
}

Ext.setup({
  tabletStartupScreen: 'images/tablet_startup.png',
  phoneStartupScreen: 'images/phone_startup.png',
  icon: 'images/icon.png',
  glossOnIcon: false,

  onReady: function() {

    //var tapHandler = function(button, event) {
    //  var txt = "User tapped the '" + button.text + "' button.";
    //  Ext.getCmp('toolbartxt').update(txt);
    //};
    
    
    var main = initMain();
  }
});


function sampleDataStore() {
  // store with data
  var data = {
    text: 'ROOT NODE',
    items: [
      {
        text: 'Wizard/Sorcerer',
        items: [
          { leaf: true, text: '0' },
          { leaf: true, text: '1' },
          { leaf: true, text: '2' },
          { leaf: true, text: '3' },
          { leaf: true, text: '4' },
          { leaf: true, text: '5' },
          { leaf: true, text: '6' },
          { leaf: true, text: '7' },
          { leaf: true, text: '8' },
          { leaf: true, text: '9' }
        ]
      },
      {
        text: 'Cleric',
        items: [
          { leaf: true, text: '0' },
          { leaf: true, text: '1' },
          { leaf: true, text: '2' },
          { leaf: true, text: '3' },
          { leaf: true, text: '4' },
          { leaf: true, text: '5' },
          { leaf: true, text: '6' },
          { leaf: true, text: '7' },
          { leaf: true, text: '8' },
          { leaf: true, text: '9' }
        ]
      },
      {
        text: 'Druid',
        items: [
          { leaf: true, text: '0' },
          { leaf: true, text: '1' },
          { leaf: true, text: '2' },
          { leaf: true, text: '3' },
          { leaf: true, text: '4' },
          { leaf: true, text: '5' },
          { leaf: true, text: '6' },
          { leaf: true, text: '7' },
          { leaf: true, text: '8' },
          { leaf: true, text: '9' }
        ]
      },
      {
        text: 'Paladin',
        items: [
          { leaf: true, text: '1' },
          { leaf: true, text: '2' },
          { leaf: true, text: '3' },
          { leaf: true, text: '4' }
        ]
      },
      {
        text: 'Ranger',
        items: [
          { leaf: true, text: '1' },
          { leaf: true, text: '2' },
          { leaf: true, text: '3' },
          { leaf: true, text: '4' }
        ]
      },
      {
        text: 'Bard',
        items: [
          { leaf: true, text: '0' },
          { leaf: true, text: '1' },
          { leaf: true, text: '2' },
          { leaf: true, text: '3' },
          { leaf: true, text: '4' },
          { leaf: true, text: '5' },
          { leaf: true, text: '6' }
        ]
      }
    ]
  };
  Ext.regModel('ListItem', {
      fields: [{name: 'text', type: 'string'}]
  });
  var store = new Ext.data.TreeStore({
      model: 'ListItem',
      root: data,
      proxy: {
          type: 'ajax',
          reader: {
              type: 'tree',
              root: 'items'
          }
      }
  });
  return store;
}