Ext.define('Apm.model.Company', {
    extend: 'Ext.data.Model',
    fields: [
		{name: 'code',				type: 'string'},
		{name: 'name',				type: 'string'},
		{name: 'summary',			type: 'object'},
		{name: 'description', 		type: 'object'},
		{name: 'logo',				type: 'string'},
		{name: 'address',			type: 'string'},
		{name: 'phone',				type: 'string'},
		{name: 'fax',				type: 'string'},
		{name: 'email',				type: 'string'},
		{name: 'website',			type: 'string'},
		{name: 'established',		type: 'string'},
		{name: 'listing',			type: 'string'},
		{name: 'underwriter',		type: 'string'},
		{name: 'sales_breakdown',	type: 'string'},
		{name: 'group_name',		type: 'string'},
		{name: 'featured',			type: 'string'},
		{name: 'datemodified',		type: 'date'}
    ]
});