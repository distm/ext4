/**
 * Override window zIndex when dragged
 * 
 * @param {type} param1
 * @param {type} param2
 * @param {type} param3
 */
Ext.define('Apm.overrider.Window', {}, function() {
    Ext.require([
        'Ext.window.Window'
    ], function() {
        Ext.window.Window.override({
            initDraggable: function() {
                this.callOverridden(arguments);
                this.dd.on('drag', function() {
                    this.ghostPanel.setZIndex(Ext.WindowManager.getActive().getEl().dom.style.zIndex);
                }, this);
            }
        });
    });
});
