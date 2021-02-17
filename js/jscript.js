var map;
require(["esri/map","dojo/domReady!"],function(Map)
	{
		map=new Map("mapDiv",{
			center:[-67.106558,-17.9709235,15.65],
			zoom:15,
			basemap:"streets"
		});
	}
	);