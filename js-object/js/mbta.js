const lineStops = { Red:["south station", "park street", "kendall", "central", "harvard", "porter", "davis", "alewife"],
Green : ["government center", "park street", "boylston", "arlington", "copley", "hynes", "kenmore"],
Orange : ["north station", "haymarket", "park street", "state", "downtown crossing", "chinatown", "back bay", "forest hills"]}

function stopsBetweenStations (sLine, sStation, eLine, eStation) {
    
            let sStops = 0;
            let eStops = 0;
            for (const key in lineStops) {
            let startIndex = 0;
            let IntersectionIndex = 0;
            let endIndex = 0;
            
                    startIndex = lineStops[sLine].indexOf(sStation.toLowerCase());
                    IntersectionIndex = lineStops[sLine].indexOf("park street");
                    //console.log(startIndex - IntersectionIndex);
                    sStops = (IntersectionIndex - startIndex);
                    
                    endIndex = lineStops[eLine].indexOf(eStation.toLowerCase());
                    IntersectionIndex = lineStops[eLine].indexOf("park street");
                    //console.log(endIndex , IntersectionIndex);
                    eStops = (endIndex - IntersectionIndex);
                }   
                
            
            if(sLine.toLowerCase() === eLine.toLowerCase()) {
               // console.log(Math.abs(eStops + sStops));
                return (`There are ${Math.abs(eStops + sStops)} Stops on your commute from ${sLine+" - "+sStation} to ${eLine+" - "+eStation}`);
            
            }else {
                //console.log(Math.abs(eStops) + Math.abs(sStops));
                return (`There are ${Math.abs(eStops) + Math.abs(sStops)} Stops on your commute from ${sLine+" - "+sStation} to ${eLine+" - "+eStation}`);
             }        
    }    
console.log(stopsBetweenStations("Red", "Alewife", "Red", "Alewife")); // 0 stops
console.log(stopsBetweenStations("Red", "Alewife", "Red", "South Station")); // 7 stops
console.log(stopsBetweenStations("Red", "South Station", "Green", "Kenmore")); // 6 stops
