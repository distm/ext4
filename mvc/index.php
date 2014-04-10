<html>
    <head>
        <title>App</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" type="text/css" href="../ext4/resources/css/ext-all.css" />
    </head>
    <body>

        <script type="text/javascript" src="../ext4/ext-debug.js"></script>
        <script type="text/javascript">

            Ext.application({
                requires: ['Ext.container.Viewport'],
                name: 'Apm',
                appFolder: 'app',
                
                controllers: [
                    'Desktop'
                ],
                
                launch: function() {
                    
                    
                    Ext.create('Ext.container.Viewport', {
                        layout: 'border',
                        items: [
                            {
                                xtype: 'taskbar',
                                region: "north"
                            },
                            {
                                region: "center",
                        border: 0,
                                id: "main-container"
                            }
                        ]
                    });
                }
            });

        </script>
    </body>
</html>
