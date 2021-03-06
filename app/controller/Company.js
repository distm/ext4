Ext.define("Apm.controller.Company", {
	extend: "Ext.app.Controller",
	
	requires: [
		'Ext.window.MessageBox'
	],
	
	views: [
		'company.GridContext',
		'company.WindowDetail',
		'company.DetailGeneral'
	],
	
	init: function(){
		
		this.control({
            // toolbar handler
			"toolbar [action='add-company']": {
				click: this.addCompany
			},
			"toolbar [action='search-company']": {
				click: this.searchCompany
			},
			
            // grid row handler
			"grid-company": {
				itemcontextmenu: this.showContextMenu
			},
            
            // context menu handler
            "[action='detail-company']": {
                click: this.detailCompany
            }
		});
	
	},
	
	showContextMenu: function(view, record, item, index, e){
		e.stopEvent();
		
		// save record
		this.selectedRecord = record;
		
		// get & show menu
		var menu = Ext.getCmp("context-grid-company");
		if(! menu){
			menu = Ext.widget("context-grid-company");
		}
		menu.showAt(e.getXY());		
	}, // end of showContextMenu
	
	addCompany: function(c){
		console.log(c);
	}, // end of addCompany
	
	searchCompany: function(btn){
	
		// get grid
		var grid = this.grid, store, tbar;
		if(! grid){
			grid = btn.up("gridpanel");
			this.grid = grid;
		}
		
		// get store
		store = grid.getStore();
		
		// get keyword
		var input_cmp = Ext.getCmp("tbar-filter-text"),
			clear_btn = Ext.getCmp("tbar-filter-clear"),
			keyword = input_cmp.getValue().trim();
			
		if(keyword != ""){
			// add reset button
			tbar = btn.up("toolbar");
			if(! clear_btn){
				tbar.add({
					id: "tbar-filter-clear",
					iconCls: "sm-clear",
					tooltip: "Clear Search & Reset Table",
					handler: function(btn){
						input_cmp.reset();
						tbar.remove(btn);
						store.on('beforeload', function(s, o){
							delete s.proxy.extraParams['search'];
						});
						store.load();
					}
				});
			}
			
			// load store
			store.on('beforeload', function(s, o){
				Ext.apply(s.proxy.extraParams, {
					search: keyword
				});
			});
			store.load();
			
		} else {
			Ext.Msg.alert("Alert", "Please fill the keyword!", function(){
				input_cmp.setValue("").focus();
			});
		}
	}, // end of searchCompany
    
    
    detailCompany: function(){
        var rec = this.selectedRecord,
            code = rec.get("code"),
            win = Ext.getCmp("win-detail-company-"+ code);
    
        if(! win){
            win = Ext.widget("win-detail-company", {
                title: code +" - "+ rec.get("name"),
                id: "win-detail-company-"+ code
            });
        }
        
        win.show(null, function(){
            this.down("form").loadRecord(rec);
        });
    }
	
});