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
  var searchBar = new Ext.Toolbar({
    //ui: 'gray',
    items: [{
      xtype: 'searchfield',
      flex: 1
    }]
  });
  return new Ext.Panel({
    html: "Search results go here...",
    //items: [ searchResults ],
    dockedItems: [ searchBar ],
    
    // for TabPanel
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
    dockedItems: [ toolbar ],
    cls: 'bigtext-panel',
    html: "<h1>Rules</h1><p>Work in progress...</p>",
    
    // for TabPanel
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
    dockedItems: [ toolbar ],
    cls: 'bigtext-panel',
    html: "<h1>Conditions</h1><p>Work in progress...</p>",
    
    // for TabPanel
    iconCls: 'time',
    title: 'Conditions'
  });
}

function initMore() {
  var toolbar = new Ext.Toolbar({
    dock: 'top',
    title: 'More',
    items: []
  });
  return new Ext.Panel({
    dockedItems: [ toolbar ],
    cls: 'bigtext-panel',
    html: "<h1>More</h1><p>There is no more just yet...</p>",
    
    // for TabPanel
    iconCls: 'more',
    title: 'More'
  });
}

function initMain() {
  var mainPanel = new Ext.TabPanel({
    fullscreen: true,
    deferredRender: true, // ???
    autoScroll: false, // ???
    margins: '0 4 4 0', // ???
    closable: false, // ???
    type: 'light',
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
      cover: false
    },
    defaults: {
      scroll: 'vertical'
    },
    items: [
      initSearch(),
      initSpells(),
      initRules(),
      initConditions(),
      initMore()
    ],
    dockedItems: []
  });
  return mainPanel;
}

Ext.setup({
  tabletStartupScreen: 'images/tablet-startup.png',
  phoneStartupScreen: 'images/phone-startup.png',
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
          type: 'memory',
          reader: {
              type: 'tree',
              root: 'items'
          }
      }
  });
  return store;
}