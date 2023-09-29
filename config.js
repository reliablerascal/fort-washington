var config = {
    style: 'mapbox://styles/robcat26/clle01vvz01h601qn2h7i05ei',
    
    //URL-restricted token
    //accessToken: 'pk.eyJ1Ijoicm9iY2F0MjYiLCJhIjoiY2xrdTE0ZXQ0MDllZDNtbzhhdWh2MXFneiJ9.vZY4_YLk_rxN-Wc1eE7_wQ',
    
    //default public token for development phase only
    accessToken: 'pk.eyJ1Ijoicm9iY2F0MjYiLCJhIjoiY2xuMzdpbmU1MDdtMzJybXA3cXM3ZnE0ciJ9.wKSsduoCg0HY42Qaq61sCw',

    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'DRAFT: The Uneasy Entry to a Peaceful Fortress',
    subtitle: 'Fort Washington Park provides an escape from urban life, but navigating to the park around rail and automotive thruways reveals a patchwork of unfinished city plans.',
    byline: 'By Rob Reid | 29 September',
    footer: 'See <a href="https://github.com/reliablerascal/fort-washington-access">GitHub repository</a> for methodology and data.<br>Created based on the <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    leadPhoto: './images/wash_park_scene_without_ppl.jpg',
    chapters: [
        {
            id: 'header-photo',
            alignment: 'full',
            hidden: true,
            //title: '',
            //image: './images/wash_park_scene_without_ppl.jpg',
            location: {
                center: [-73.98059, 40.72522],
                zoom: 13.20,
                pitch: 69.50,
                bearing: 28.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                // speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                //{layer: 'nj-blocker', opacity:0},
                {layer: 'park-tryon', opacity:0},
                {layer: 'park-fort-wash', opacity:1},
                {layer: 'path-dyckman', opacity:0},
                {layer: 'path-main', opacity:0},
                {layer: 'path-165th', opacity:0},
                {layer: 'path-176th', opacity:0},
                {layer: 'mapbox-satellite', opacity:1},
                {layer: 'social-dock', opacity:0},
                {layer: 'social-entry-north', opacity:0},
                {layer: 'social-entry-south', opacity:0},
                {layer: 'social-railside', opacity:0},
                {layer: 'social-riverside', opacity:0},
                {layer: 'social-trail', opacity:0},
                {layer: '158-entry', opacity:0},
                {layer: '165-entry', opacity:0},
                {layer: '176-entry', opacity:0},
                {layer: '182-entry', opacity:0},
                {layer: '182-gwb-split', opacity:0},
                {layer: '182-hh-merge', opacity:0},
                {layer: '176-underpass', opacity:0},
                {layer: '165-crossing1', opacity:0}
            ],
            onChapterExit: []
        },
        
        
        
        {
            id: 'zoom-to-park',
            alignment: 'fully',
            hidden: false,
            description: 'Nestled between the Hudson River and the ceaseless flow of automotive traffic on the Henry Hudson Expressway, Fort Washington Park offers space for both social gatherings and solitary escapes from the concrete urban jungle above cliffs to the east.',
            location: {
                center: [-73.94616, 40.84513],
                zoom: 14.00,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ 
                {layer: 'park-fort-wash', opacity:1}  
            ],
            onChapterExit: [
                //{layer: 'park-fort-wash', opacity:0}
            ]
        },
        
        
        
        {
            id: 'park-soccer',
            alignment: 'fully',
            hidden: false,
            //displayMarker: false, //created this attribute manually RR 8/9/23
            //title: '',
            image: './images/00x_fort_wash_soccer.jpg',
            description: 'Barbecuers, pedestrians, and athletes share the park\'s dirt paths, paved trails, and athletic fields.',
            location: {
                center: [-73.94616, 40.84513],
                zoom: 14.00,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ 
                //{layer: 'nj-blocker', opacity:0.75},
                //{layer: 'park-fort-wash', opacity:1},
                {layer: 'mapbox-satellite', opacity:0} 
            ],
            onChapterExit: [
                //{layer: 'park-fort-wash', opacity:0}
            ]
        },
        
        
        
        {
            id: 'park-sisyphus',
            alignment: 'fully',
            hidden: false,
            //displayMarker: false, //created this attribute manually RR 8/9/23
            //title: '',
            image: './images/park_sisyphus.jpg',
            description: 'The riverfront trail follows the Hudson\'s rocky shoreline, passing an enigmatic art exhibit known as the Sisyphus Stones. It\'s the work of a persistent Albanian immigrant who has <a href="https://www.nytimes.com/2017/09/14/nyregion/a-mystery-solved-why-the-sisyphus-stones-rise-and-tumble.html" target="_blank">repeatedly reconstructed the stony figures</a> after they\'ve been vandalized.',
            location: {
                center: [-73.94616, 40.84513],
                zoom: 14.00,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ 
                //{layer: 'nj-blocker', opacity:0.75},
                //{layer: 'park-fort-wash', opacity:1},
                {layer: 'mapbox-satellite', opacity:0} 
            ],
            onChapterExit: [
                //{layer: 'park-fort-wash', opacity:0}
            ]
        },
        
        
        
        {
            id: 'park-gwb',
            alignment: 'fully',
            hidden: false,
            //displayMarker: false, //created this attribute manually RR 8/9/23
            //title: '',
            image: './images/fort_washington_park-1280-960.jpg',
            description: 'The park widens at its northern end, offering views of the George Washington Bridge and the New Jersey Palisades beyond.',
            location: {
                center: [-73.94616, 40.84513],
                zoom: 14.00,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ 
                //{layer: 'nj-blocker', opacity:0.75},
                //{layer: 'park-fort-wash', opacity:1},
                {layer: 'mapbox-satellite', opacity:0} 
            ],
            onChapterExit: [
                //{layer: 'park-fort-wash', opacity:0}
            ]
        },
        
        
        
        {
            id: 'access-easy-158',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: './images/entry-158.jpg',
            description: 'Pedestrians and cyclists commonly enter the southern end of the park at 158th under Riverside Drive just past Trinity Cemetery...',
            location: {
                center: [-73.9489, 40.8366],
                zoom: 14.00,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            //callback: 'showDots',
            onChapterEnter: [
                {layer: 'path-main', opacity:1},
                {layer: '158-entry', opacity:1}
            ],
            onChapterExit: [
                {layer: '158-entry', opacity:0}
            ]
        },
        
        
        
        {
            id: 'access-points-south',
            alignment: 'left',
            hidden: false,
            //title: '',
            //image: './images/002_topographical_history.jpg',
            description: '...or from points further south along the riverside trail extending to Manhattan\'s southern tip at The Battery.',
            location: {
                center: [-73.9489, 40.8366],
                zoom: 14.00,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            //callback: 'greenDots',
            onChapterEnter: [
                {layer: 'path-main', opacity:1}
            ],
            onChapterExit: [
            ]
        },
        
        
        
        {
            id: 'C-trail-turn',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: './images/182-inland-turn.jpg',
            description: 'The main trail through the park follows the riverfront before turning inland just north of the George Washington Bridge.',
            location: {
                center: [-73.94617029306572,
                    40.8499500890377],
                zoom: 15.07,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'path-dyckman', opacity:1},
                {layer: 'path-main', opacity:1},
                {layer: '182-gwb-split', opacity:1}
            ],
            onChapterExit: [
                {layer: '182-gwb-split', opacity:0}
            ]
        },
        
        
        
        {
            id: 'C-trail-hh-merge',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: './images/182-hh-merge.jpg',
            description: 'Crossing over the Amtrak and under the southbound Henry Hudson Parkway, the path deposits pedestrians and cyclists on a narrow sidewalk along the northbound Henry Hudson Parkway.',
            location: {
                center: [-73.94332788888889,40.85130236108333],
                zoom: 15.07,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                //{layer: 'overlay-alltrails', opacity:0},
                {layer: 'path-dyckman', opacity:1},
                {layer: 'path-main', opacity:1},
                {layer: '182-hh-merge', opacity:1}
            ],
            onChapterExit: [
                {layer: '182-hh-merge', opacity:0}
            ]
        },
        
        
        
        {
            id: 'access-easy-182',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: './images/entry-182.jpg',
            description: 'A bridge crosses over the parkway and into the city at 182nd street.',
            location: {
                center: [-73.9412, 40.8524],
                zoom: 14.00,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            //callback: 'hideDots',
            onChapterEnter: [
                {layer: '182-entry', opacity:1},
                //{layer: 'park-fort-wash', opacity:1},
                {layer: 'path-main', opacity:1}
            ],
            onChapterExit: [
                // {layer: 'park-fort-wash', opacity:0},
                {layer: '182-entry', opacity:0}
            ]
        },
        
        
        
        {
            id: 'access-points-north',
            alignment: 'left',
            hidden: false,
            description: 'But there\'s no official riverfront trail north of the George Washington Bridge connecting to the trail headed south from Dyckman Street, 1.5 miles away.',
            location: {
                center: [-73.94616, 40.84513],
                zoom: 15.00,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'path-165th', opacity:1},
                {layer: 'path-176th', opacity:1},
                {layer: 'path-dyckman', opacity:0.3},
                {layer: 'path-main', opacity:0.3},
                {layer: 'mapbox-satellite', opacity:0},
                {layer: 'social-trail', opacity:1}
            ],
            onChapterExit: [
            ]
        },
        
        
        
        {
            id: 'C-alltrails',
            alignment: 'left',
            hidden: false,
            //title: '',
            //image: './images/007a_alltrails_182_gap.png',
            description: 'Popular hiking app <a href="https://www.alltrails.com/" target="_blank">Alltrails</a>, built on the open-source <a href="https://www.openstreetmap.org/#map=4/38.01/-95.84">Open Street Map</a>, confirms the gap in the riverside trail north of the bridge.',
            location: {
                center: [-73.94161, 40.85336],
                zoom: 15.07,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'overlay-alltrails', opacity:1},
                {layer: 'path-dyckman', opacity:1},
                {layer: 'mapbox-satellite', opacity: 0}
            ],
            onChapterExit: [
                {layer: 'overlay-alltrails', opacity:0},
            ]
        },



        // {
        //     id: 'C-strava',
        //     alignment: 'left',
        //     hidden: false,
        //     //title: '',
        //     image: './images/007b_strava_heatmap_gwb.png',
        //     description: 'But a heatmap of <em>actual</em> walking routes tracked by competing app <a href="https://www.strava.com/" target="_blank">Strava</a> shows that some people do continue north, as indicated by a faint maroon line along the riverfront.',
        //     location: {
        //         center: [-73.94161, 40.85336],
        //         zoom: 15.07,
        //         pitch: 0.00,
        //         bearing: 28.00
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [
        //         {layer: 'overlay-alltrails', opacity:0},
        //         {layer: 'satellite', opacity: 0},
        //         {layer: 'path-dyckman', opacity:1},
        //         {layer: 'path-main', opacity:1}
        //     ],
        //     onChapterExit: []
        // },
        
        
        
        {
            id: 'C-satellite',
            alignment: 'left',
            hidden: false,
            //title: '',
            //image: './images/007c_satellite_187th_River.jpg',
            description: 'But satellite imagery clearly shows a path continuing north between the river and the Amtrak rails.',
            location: {
                center: [-73.94055, 40.85598],
                //center: [-73.94055, 40.85578],
                zoom: 20.00,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'mapbox-satellite', opacity:1},
                {layer: 'social-trail', opacity:1}
            ],
            onChapterExit: [
                {layer: 'mapbox-satellite', opacity: 0},
                {layer: 'social-trail', opacity: 0}
            ]
        },



        {
            id: 'C-social-trail-entry',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: './images/009_social_entry_south.jpeg',
            description: 'Once I knew that a riverfront trail existed, it was easy to notice the trail spur alongside the fence just west of the bridge crossing the train tracks.',
            location: {
                center: [-73.9441,40.8515],
                zoom: 15.07,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'path-dyckman', opacity:1},
                {layer: 'path-main', opacity:1},
                {layer: 'social-trail', opacity:1},
                {layer: 'social-entry-south', opacity:1}
            ],
            onChapterExit: [
                {layer: 'social-entry-south', opacity:0}
            ]
        },
        {
            id: 'C-social-dock',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: './images/010_social_dock.jpg',
            description: 'Though I encountered only one other person on the trail, I saw clear signs that it\'d been used extensively. This makeshift dock suggests an ambitious fishing endeavor.',
            location: {
                center: [-73.9433, 	40.8524],
                zoom: 15.07,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'path-dyckman', opacity:1},
                {layer: 'path-main', opacity:1},
                {layer: 'social-trail', opacity:1},
                {layer: 'social-dock', opacity:1}
            ],
            onChapterExit: [
                {layer: 'social-dock', opacity:0}
            ]
        },
        {
            id: 'C-social trail_riverside',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: './images/011_social_riverside.jpeg',
            description: 'Pinched between the Hudson and the fence barricading Amtrak\'s rails, the trail offered unobstructed views of the river, the George Washington Bridge, and the New Jersey Palisades. But it\'s clearly not set up to support heavy traffic. Railroad ballast supporting some especially narrow stretches of the trail threatens to break up into the river.',
            location: {
                center: [-73.9420, 40.8537],
                zoom: 15.07,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'path-dyckman', opacity:1},
                {layer: 'path-main', opacity:1},
                {layer: 'social-trail', opacity:1},
                {layer: 'social-riverside', opacity:1}
            ],
            onChapterExit: [
                {layer: 'social-riverside', opacity:0}
            ]
        },
        {
            id: 'C-social-trail-about',
            alignment: 'fully',
            hidden: false,
            //title: '',
            //image: './panorama.mp4',
            description: 'Though there was no clear indication that this path is prohibited, I would later learn that the connector trail is what is known as a <em>social trail</em>. According to the National Park Service, a <a href="https://www.nps.gov/articles/000/social-trails.htm#:~:text=A%20social%20trail%20is%20an,look%20like%20an%20official%20trail.&text=To%20set%20a%20good%20example,day%2C%20stay%20on%20designated%20trails" target="_blank">social trail is an unofficial detour created by hikers</a>. After repeated use the detour gets worn down to the point of <em>appearing</em> to be an official trail.<p>The National Park Service warns that use of these trails can result in ecological damage. And park stewards note that <a href="https://www.reddit.com/r/openstreetmap/comments/ozz4zx/comment/h84912u/?utm_source=share&utm_medium=android_app&utm_name=androidcss&utm_term=2&utm_content=share_button&rdt=48941&onetap_auto=true" target="_blank">hiding these social trails from official maps is a deliberate choice</a>- reflecting ecological, safety, and maintenance concerns.',
            location: {
                center: [-73.94161, 40.85336],
                zoom: 15.07,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'path-dyckman', opacity:1},
                {layer: 'path-main', opacity:1},
                {layer: 'social-trail', opacity:1}
            ],
            onChapterExit: []
        },
        {
            id: 'C-social trail_railside',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: './images/012_social_outside_rail.jpeg',
            description: 'At the same time, evidence of frequent use suggests that the public would support development of an official trail.',
            location: {
                center: [-73.9407, 40.8558],
                zoom: 15.07,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'path-dyckman', opacity:1},
                {layer: 'social-trail', opacity:1},
                {layer: 'path-main', opacity:1},
                {layer: 'path-165th', opacity:0},
                {layer: 'path-176th', opacity:0},
                {layer: 'social-railside', opacity:1}
            ],
            onChapterExit: [
                {layer: 'social-railside', opacity:0}
            ]
        },
        {
            id: 'C-social-Guthrie1',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: './images/entry-social-north.jpg',
            description: 'Looking behind me after reaching the north end of the social trail, I saw a sign clearly stating, "No public access beyond this point." It would seem that the trail is legal going north, but illegal going south. This calls to mind a famous song.',
            location: {
                center: [-73.939795,40.8569679],
                zoom: 15.07,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'path-dyckman', opacity:1},
                {layer: 'social-trail', opacity:1},
                {layer: 'social-entry-north', opacity:1}
            ],
            onChapterExit: [
                {layer: 'social-entry-north', opacity:0}
            ]
        },
        {
            id: 'C-social-Guthrie2',
            alignment: 'left',
            hidden: false,
            //title: '',
            //image: './images/009_social_entry_south.jpeg',
            description: 'As I went walking I saw a sign there,<br>And on the sign it said "No Trespassing."<br>But on the other side it didn\'t say nothing.<br>That side was made for you and me.<br>-Arlo Guthrie',
            location: {
                center: [-73.94161, 40.85336],
                zoom: 15.07,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'path-dyckman', opacity:1},
                {layer: 'social-trail', opacity:1}
            ],
            onChapterExit: []
        },
        {
            id: 'trail-plans',
            alignment: 'fully',
            hidden: false,
            //title: '',
            //image: './images/014_fort_washington_park.jpeg',
            description: 'Discussion about continuing the riverfront path dates back at least a century. In 1917, the city <a href="https://www.forttryonparktrust.org/wp-content/uploads/2017/05/1983FortTryonPark-LPC.pdf" target="_blank">spurned John D. Rockefeller Jr.\'s conditional offer</a> of the land that\'s now Fort Tryon park. For financial reasons, the city could not honor Rockefeller\'s condition that the park be connected to Fort Washington Park.<p>More recently, the city estimated it would cost $22 million to essentially <a href="https://www.nytimes.com/2014/08/15/nyregion/new-riverside-trail-goes-only-so-far.html" target="_blank">transform the social trail to an official trail</a>- a cost elevated by a need for landfill supporting a paved, bike-friendly trail.',
            location: {
                center: [-73.94161, 40.85336],
                zoom: 14,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                //{layer: 'park-fort-wash', opacity:1},
                {layer: 'park-tryon', opacity:0.75},
                {layer: 'path-main', opacity:1},
                {layer: 'path-dyckman', opacity:1},
                {layer: 'path-165th', opacity:1},
                {layer: 'path-176th', opacity:1},
                {layer: 'social-trail', opacity:1}
            ],
            onChapterExit: [
                //{layer: 'park-fort-wash', opacity:0},
                {layer: 'park-tryon', opacity:0}, 
            ]
        },



        {
            id: '2017-concept',
            alignment: 'fully',
            hidden: false,
            //title: '',
            image: './images/fort-washington-park-north-conceptual.png',
            description: 'As recently as 2017, the nonprofit New York Economic Development Corporation conceptualized <a href="https://edc.nyc/sites/default/files/filemanager/MWG/ManhattanGreenway_book.pdf" target="_blank">development of a trail built above the river</a>, promising community engagement in the planning process only "as funding becomes available."',
            location: {
                center: [-73.94616, 40.84513],
                zoom: 14.00,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'path-main', opacity:1},
                {layer: 'social-trail', opacity:1},
                {layer: 'path-dyckman', opacity:1},
                {layer: 'path-165th', opacity:1},
                {layer: 'path-176th', opacity:1}
            ],
            onChapterExit: [
            ]
        },
        

        {
            id: 'conclusion',
            alignment: 'fully',
            hidden: false,
            //title: '',
            image: './images/014_fort_washington_park.jpeg',
            description: 'To this day, limited crossings over conflicting expressway and rail routes restricts access to Fort Washington Park. Perhaps some day the city will invest in improving this access. For now, the park\'s isolation may be part of the its charm.',
            location: {
                center: [-73.94616, 40.84513],
                zoom: 14.00,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'path-main', opacity:1},
                {layer: 'social-trail', opacity:1},
                {layer: 'path-dyckman', opacity:1},
                {layer: 'path-165th', opacity:1},
                {layer: 'path-176th', opacity:1}
            ],
            onChapterExit: [
            ]
        },

/////////////////////////////////
//
//        APPENDIX
//
/////////////////////////////////



        {
            id: 'appendix-spacer',
            alignment: 'center',
            hidden: true,
            title: 'Appendix/ Outtakes',
            //image: './images/002_topographical_history.jpg',
            //description: '...or from points further south along the riverside trail extending to Manhattan\'s southern tip at The Battery.',
            location: {
                center: [-73.9489, 40.8366],
                zoom: 14.00,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            //callback: 'greenDots',
            onChapterEnter: [
                //{layer: 'path-main', opacity:1}
            ],
            onChapterExit: [
            ]
        },



        {
            id: 'appendix-label',
            alignment: 'center',
            hidden: false,
            title: 'Appendix/ Outtakes',
            //image: './images/002_topographical_history.jpg',
            //description: '...or from points further south along the riverside trail extending to Manhattan\'s southern tip at The Battery.',
            location: {
                center: [-73.9489, 40.8366],
                zoom: 14.00,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            //callback: 'greenDots',
            onChapterEnter: [
                //{layer: 'path-main', opacity:1}
            ],
            onChapterExit: [
            ]
        },



        {
            id: 'secret-paths-overview-2',
            alignment: 'left',
            hidden: false,
            description: 'Access to the park in the 1.5 mile gap between 158th and 182nd is limited. But a warren of lesser-known paths provides some indirect access to the park.',
            location: {
                center: [-73.94616, 40.84513],
                zoom: 15.00,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'path-165th', opacity:1},
                {layer: 'path-176th', opacity:1},
                {layer: 'path-dyckman', opacity:0.3},
                {layer: 'path-main', opacity:0.3},
                {layer: 'mapbox-satellite', opacity:0},
                {layer: 'social-trail', opacity:1}
            ],
            onChapterExit: [
            ]
        },




        {
            id: 'A-165th-bridge-zoom',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: './images/psych-facility.jpg',
            description: 'In the early 1990s, grassroots organizers opposing development of a psychiatric facility on park land west of Riverside Drive <a href="https://www.nytimes.com/1994/05/01/nyregion/neighborhoos-report-washington-heights-a-battle-lost-a-bridge-won.html" target="_blank">won a consolation prize</a>: an access path beginning at 165th street, including a footbridge connecting to Fort Washington Park.',
            location: {
                center: [-73.9445, 40.8410],
                zoom: 15.18,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'path-165th', opacity:1},
                {layer: '165-entry', opacity:1}
            ],
            onChapterExit: [
                {layer: '165-entry', opacity:0}
            ]
        },
        
        
        
        {
            id: 'A-165th-hairy-crossing',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: './images/005_165_hairy_crossing2.jpeg',
            description: 'Frustratingly, this path requires a <a href="https://nyc.streetsblog.org/2009/07/06/eyes-on-the-street-risking-life-and-limb-for-greenway-access" target="_blank">treacherous crossing against relentless oncoming traffic</a> entering an on-ramp to the George Washington Bridge with no crosswalk and no stoplight.<p>This winding trail is somewhat helpful for those heading north. But to get directly to the actual river only 0.1 miles west as the crow flies requires a winding mile-long journey from 165th and Riverside Drive ',
            location: {
                center: [-73.9441, 40.8437],
                zoom: 15.18,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'path-165th', opacity:1},
                {layer: 'path-165th', opacity:1},
                {layer: 'path-176th', opacity:0},
                {layer: '165-crossing1', opacity:1}
            ],
            onChapterExit: [
                {layer: '165-crossing1', opacity:0}
            ]
        },
        
        
        
        {
            id: 'B-176th-entry',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: './images/entry-176.jpg',
            description: 'Even fewer cross at the Haven Avenue underpass by 176th.',
            location: {
                center: [-73.9423,40.8474],
                zoom: 15.81,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'path-165th', opacity:0},
                {layer: 'path-176th', opacity:1},
                {layer: 'path-dyckman', opacity:0},
                {layer: '176-entry', opacity:1}
            ],
            onChapterExit: [
                {layer: '176-entry', opacity:0}
            ]
        },



        {
            id: 'B-176th-underpass',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: './images/176-tunnel.jpg',
            description: 'This <a href="https://www.nytimes.com/1994/05/01/nyregion/neighborhoos-report-washington-heights-a-battle-lost-a-bridge-won.html" target="_blank">trek through deserted tunnels</a>, isolated from both the park and the city and strewn with discarded clothes and luggage cases, offers only a temporary escape for the city\'s unhoused population, who seem to get routinely swept away by city officials.',
            location: {
                center: [-73.9434,40.8493],
                zoom: 15.81,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'path-165th', opacity:0},
                {layer: 'path-176th', opacity:1},
                {layer: 'path-dyckman', opacity:0},
                {layer: '176-underpass', opacity:1}
            ],
            onChapterExit: [
                {layer: '176-underpass', opacity:0}
            ]
        },
        


        {
            id: 'history-1',
            alignment: 'left',
            hidden: false,
            description: 'For historic reasons, each of these paths has to navigate around automotive routes and rail lines to get to the riverside. The railroads claimed the coveted riverside property first, with The New York Central & Hudson River Railroad Company <a href="https://www.nytimes.com/1913/06/29/archives/railroad-and-park-feasible-solution-of-fort-washington-problem-is.html?searchResultPosition=25" target="_blank">acquiring a narrow tract of property parallel to the river</a> in 1847.',
            location: {
                center: [-73.94616, 40.84513],
                zoom: 15.00,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'path-165th', opacity:0},
                {layer: 'path-176th', opacity:0},
                {layer: 'path-dyckman', opacity:0},
                {layer: 'path-main', opacity:0},
                {layer: 'social-trail', opacity:0}
            ],
            onChapterExit: []
        },
        
        
        
        {
            id: 'history-2',
            alignment: 'left',
            hidden: false,
            description: 'The city later guaranteed public access by <a href="https://www.nycgovparks.org/parks/fort-washington-park/history" target="_blank">acquiring five parcels of riverfront land between 1896 and 1927</a> on behalf of the park district, but by then this land was already split down the middle by train tracks.',
            location: {
                center: [-73.94616, 40.84513],
                zoom: 15.00,
                pitch: 0.00,
                bearing: 28.00 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        
        
        
        {
            id: 'history-3',
            alignment: 'left',
            hidden: false,
            description: 'Automotive routes carved up the land further. Construction of a bridge connecting began in 1927 as provisioned by New York and New Jersey state legislation. The city\'s West Side Improvement Plan spurred the <a href="https://www.nycgovparks.org/parks/X110/history" target="_blank">development of the Henry Hudson Parkway</a> in the 1930s. In part due to these physical barriers, some of the most direct paths to the park wind through dark and neglected tunnels, across traffic, or along non-public paths.',
            location: {
                center: [-73.94616, 40.84513],
                zoom: 15.00,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: '1955-nyc-building-map', opacity:0}
            ],
            onChapterExit: []
        },


        
        {
            id: 'credits',
            alignment: 'left',
            hidden: true,
            //title: '',
            //image: './images/012_fort_washington_park.jpeg',
            //description: 'Rehash the land use conflicts: highway traffic (165th), train (social trail), land acquisition (secured!), Limited access makes the park isolated…but isolation may be part of the charm.',
            location: {
                center: [-73.94616, 40.84513],
                zoom: 14.00,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'path-main', opacity:1},
                {layer: 'social-trail', opacity:1},
                {layer: 'path-dyckman', opacity:1},
                {layer: 'path-165th', opacity:1},
                {layer: 'path-176th', opacity:1}
            ],
            onChapterExit: [
            ]
        }
//end chapters


    ]
};
