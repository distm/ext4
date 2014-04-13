Ext.define("Apm.view.company.Grid", {
    extend: "Ext.grid.Panel",
	requires: [
		'Ext.grid.plugin.RowExpander'
	],
    alias: "widget.grid-company",
    
    border: 0,
    store: "Company",
    
    initComponent: function(){
        
		// columns
        this.columns = [
            {xtype: 'rownumberer', width: 30},
            {header: "Code",            dataIndex: "code",			width: 75},
            {header: "Name",            dataIndex: "name", 			width: 250},
            //{header: "Summary",         dataIndex: "summary"},
            //{header: "Description",     dataIndex: "description"},
            //{header: "Logo",            dataIndex: "logo"},
            //{header: "Address",         dataIndex: "address"},
            //{header: "Phone",           dataIndex: "phone"},
            //{header: "Fax",             dataIndex: "fax"},
            //{header: "Email",           dataIndex: "email"},
            //{header: "Website",         dataIndex: "website"},
            //{header: "Established",     dataIndex: "established"},
            //{header: "Listing Date",    dataIndex: "listing"},
            //{header: "Underwriter",     dataIndex: "underwriter"},
            //{header: "Sales Breakdown", dataIndex: "sales_breakdown"},
            //{header: "Group Name",      dataIndex: "group_name"},
            //{header: "Featured",        dataIndex: "featured"},
            {header: "Date Modified",   dataIndex: "datemodified",	width: 150,	xtype: 'datecolumn', format: 'd-m-Y H:i:s'}
        ];
		
        this.callParent(arguments);
    },
	
	plugins: [{
		ptype: "rowexpander",
		selectRowOnExpand: true,
		rowBodyTpl : new Ext.XTemplate(
			"{summary.en}"
		)
	}],
    
	dockedItems: [
		{
			xtype: "toolbar",
			items: [
				{
					text: "Add Company",
					iconCls: "sm-company-add",
					tooltip: "Add new company",
					action: "add-company"
				},
				"->",
				{
					xtype: "textfield",
					id: "tbar-filter-text",
					emptyText: "Search Company...",
					width: 175
				},
				{
					iconCls: "sm-search",
					tooltip: "Begin search",
					action: "search-company"
				}
			],
			dock: "top"
		},
		{
			xtype: "pagingtoolbar",
			store: "Company",
			dock: "bottom",
			displayInfo: true
		}
	],
	
    listeners: {
        afterrender: function(){
            this.store.load();
        }
    }
});