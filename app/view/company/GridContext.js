Ext.define("Apm.view.company.GridContext", {
	extend: "Ext.menu.Menu",
	
	alias: "widget.context-grid-company",
	id: "context-grid-company",
	
	initComponent: function(){
	
		this.items = [
			{
				text: "Edit",
				action: "edit-company"
			},
			{
				text: "Delete",
				action: "delete-company"
			},
			'-',
			{
				text: "Info",
				menu: {
					items: [
						{
							text: "Detail"
						},
						{
							text: "Quote Stock"
						},
						{
							text: "Subsidiaries"
						}
					]
				}
			}
		];
	
		this.callParent(arguments);
	}
});