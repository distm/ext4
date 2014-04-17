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
                text: "Detail",
				action: "detail-company"
            },
            '-',
            {
                text: "Quote Stock",
				action: "quote-company"
            }
		];
	
		this.callParent(arguments);
	}
});