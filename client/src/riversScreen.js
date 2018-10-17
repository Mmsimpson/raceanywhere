import React from 'react';
import UserBar from './userBar';
import AppHeader from './appheader.js';
import Footer from './footer.js'
import './stylesheets/riversScreen.css';

let RiversScreen = () => 
    <div>
        <AppHeader />
        <UserBar />
        <div className="rivers-main">
            <div className="blue">
                <h2>Nantahala River, NC</h2>
                <p>A relatively gentle river, with the final rapid having the propensity 
                    to send paddlers in for a cold, exhilarating swim; suitable for 
                    beginners and families with younger children. </p> 
            </div>
            <div className="grey">
                <h2>Ocoee River, TN</h2>
                <p>Site of 1996 Olympic Slalom Course at the Ocoee Whitewater Center. 
                    A very good river for both novices and more advanced paddlers. 
                    Gets its name from passiflora incarnata, the maypop, a very close 
                    relative of the commercial passionfruit that is a common edible garden 
                    plant in the South and was introduced as a source of food to settlers by 
                    tribes like the Cherokee. This plant is still found in thickets near the river.</p>
            </div>
            <div className="blue">
                <h2>Green River, NC</h2>
                <p>The Green Narrows is the steepest "creek run" with regular activity 
                    in the Eastern U.S; with a gradient that reaches 600 feet/mile over 
                    one short section, The Narrows is a series of blind waterfalls and 
                    tight slots; regular, predictable releases from the Tuxedo Hydro 
                    Plant upstream draw paddlers on a regular basis.</p>
            </div>
            <div className="grey">
                <h2>Chattooga River, GA/SC</h2>
                <p>Sports long, challenging rapids, big drops, and thunderous power; 
                    this river can be a challenge for even experts; the Chattooga was 
                    one of the rivers used for the filming of the 1973 adventure movie, Deliverance. 
                    It is designated as a Wild and Scenic River and therefore offers beautiful 
                    scenery and a wild ride with waterfalls in the trickiest section.</p>
            </div>
            <div className="blue">
                <h2>Russell Fork</h2>
                <p>This class V river drops 150 feet (46 m) per mile in the Russell Fork Gorge, 
                    which has been described as a continuous forty-five degree waterfall; 
                    it has dangerous rapids, even experienced paddlers have died in its many 
                    undercut rocks, and there have been many close calls; for the most 
                    experienced rafters and kayakers only.</p>
            </div>
            <div>
                <h2> </h2>
            </div>
        </div>
        <Footer />
    </div>
export default RiversScreen;