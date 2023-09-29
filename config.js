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
    chapters: [
        {
            id: 'nyc-overhead',
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
                {layer: 'park-tryon', opacity:0},
                {layer: 'park-fort-wash', opacity:0.5},
                {layer: 'path-dyckman', opacity:0},
                {layer: 'path-main', opacity:0},
                {layer: 'path-165th', opacity:0},
                {layer: 'path-176th', opacity:0},
                {layer: 'mapbox-satellite', opacity:0},
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
            description: 'The park extends about two and a half miles along the Hudson shoreline in Upper Manhattan, bounded roughly by 158th Street to the south and Dyckman Street to the north.',
            location: {
                //center: [-73.94616, 40.84513],
                center: [-73.94170, 40.85258],
                zoom: 14.00,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ 
                {layer: 'path-main', opacity:0},
                {layer: 'sisyphus-stones', opacity:0}  
            ],
            onChapterExit: [
            ]
        },
        
        
        
        {
            id: 'park-sisyphus',
            alignment: 'left',
            hidden: false,
            //displayMarker: false, //created this attribute manually RR 8/9/23
            //title: '',
            image: './images/park_sisyphus.jpg',
            description: 'A trail through the park follows the Hudson\'s rocky shoreline, passing an enigmatic art exhibit known as the Sisyphus Stones- the work of a persistent Albanian immigrant who\'s <a href="https://www.nytimes.com/2017/09/14/nyregion/a-mystery-solved-why-the-sisyphus-stones-rise-and-tumble.html" target="_blank">keeps reconstructing the stony figures</a> after every time they\'ve been vandalized.',
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
                {layer: 'little-red', opacity:0},
                {layer: 'mapbox-satellite', opacity:0},
                {layer: 'path-main', opacity:1},
                {layer: 'sisyphus-stones', opacity:1} 
            ],
            onChapterExit: [
            ]
        },
        
        
        
        {
            id: 'park-little-red',
            alignment: 'left',
            hidden: false,
            //displayMarker: false, //created this attribute manually RR 8/9/23
            //title: '',
            image: './images/little-red.jpg',
            description: 'A century-old lighthouse stands under the George Washington Bridge. Intended to be torn down by the Coast Guard in 1951, it was famously <a href="https://www.hrmm.org/uploads/2/6/3/3/26336013/children_helped_save_a_lighthouse_2000.pdf" target="_blank">saved by children</a>.',
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
                {layer: '158-entry', opacity:0},
                {layer: 'little-red', opacity:1},
                {layer: 'mapbox-satellite', opacity:0},
                {layer: 'sisyphus-stones', opacity:0}  
            ],
            onChapterExit: [
            ]
        },
        
        
        
        {
            id: 'access-easy-158',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: './images/entry-158.jpg',
            description: 'Despite the park\'s size, access is fairly limited. Pedestrians and cyclists commonly enter the southern end of the park at 158th under Riverside Drive just past Trinity Cemetery...',
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
                {layer: 'little-red', opacity:0},
                {layer: 'path-points-south', opacity:0},
                {layer: '158-entry', opacity:1}
            ],
            onChapterExit: [
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
                zoom: 13.00,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            //callback: 'greenDots',
            onChapterEnter: [
                {layer: '158-entry', opacity:0},
                {layer: '165-crossing1', opacity:0},
                {layer: 'path-165th', opacity:0},
                {layer: 'path-main', opacity:1},
                {layer: 'path-points-south', opacity:1}
            ],
            onChapterExit: [
            ]
        },
        
        
        
        
        {
            id: 'A-165th-hairy-crossing',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: './images/005_165_hairy_crossing2.jpeg',
            description: 'In the 1990s, park advocates won development of a <a href="https://www.nytimes.com/1994/05/01/nyregion/neighborhoos-report-washington-heights-a-battle-lost-a-bridge-won.html" target="_blank">new entry at 165th</a>. But this rarely-used path requires a mile-long journey alongside the parkway and railway to get into the park. Frustratingly, it also requires a <a href="https://nyc.streetsblog.org/2009/07/06/eyes-on-the-street-risking-life-and-limb-for-greenway-access" target="_blank">treacherous crossing against relentless oncoming traffic</a> entering an on-ramp to the George Washington Bridge with no crosswalk and no stoplight.',
            location: {
                center: [-73.9441, 40.8437],
                zoom: 15.00,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'path-176th', opacity:0},
                {layer: '176-underpass', opacity:0},
                {layer: 'path-165th', opacity:1},
                {layer: 'path-176th', opacity:0},
                {layer: 'path-main', opacity:1},
                {layer: 'path-points-south', opacity:0},
                {layer: '165-crossing1', opacity:1}
            ],
            onChapterExit: [
            ]
        },
        
        
        
        {
            id: 'B-176th-underpass',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: './images/176-tunnel.jpg',
            description: 'Further north, an entry at 176th winds through deserted tunnels. Isolated from both the park and the city, this path is strewn with discarded clothes, garbage, and luggage cases.',
            location: {
                center: [-73.9434,40.8493],
                zoom: 15.00,
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
                {layer: 'path-main', opacity:1},
                {layer: '165-crossing1', opacity:0},
                {layer: '176-underpass', opacity:1}
            ],
            onChapterExit: [
                {layer: '176-underpass', opacity:0}
            ]
        },
        
        
        
        {
            id: 'access-easy-182',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: './images/182-entry.jpg',
            description: 'More commonly, pedestrians and cyclists enter the park via a bridge crossing the expressway at 182nd street.',
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
                {layer: 'path-176th', opacity:0},
                {layer: '176-underpass', opacity:0},
                {layer: '182-entry', opacity:1},
                {layer: '182-hh-merge', opacity:0},
                {layer: 'path-182-to-dyckman', opacity:0},
                {layer: 'path-main', opacity:1}
            ],
            onChapterExit: [
                {layer: '182-entry', opacity:0}
            ]
        },
        
        
        
        {
            id: 'C-trail-hh-merge',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: './images/182-hh-merge.jpg',
            description: 'North of the 182nd entry, there\'s no official riverfront trail connecting the main section of Fort Washington Park to the northern section of the park. Pedestrians and cyclists follow a narrow sidewalk along the noisy Henry Hudson Parkway for a mile and a half to re-enter the park at Dyckman Street.',
            location: {
                center: [-73.93641, 40.85918],
                zoom: 14.00,
                pitch: 0.00,
                bearing: 28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'overlay-alltrails', opacity:0},
                {layer: 'path-182-to-dyckman', opacity:1},
                {layer: 'path-dyckman', opacity:1},
                {layer: 'path-main', opacity:1},
                {layer: '182-hh-merge', opacity:1}
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
                {layer: '182-hh-merge', opacity:0},
                {layer: 'overlay-alltrails', opacity:1},
                {layer: 'path-182-to-dyckman', opacity:0},
                {layer: 'path-dyckman', opacity:1},
                {layer: 'path-main', opacity:1},
                {layer: 'mapbox-satellite', opacity: 0}
            ],
            onChapterExit: [
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
            description: 'But satellite imagery clearly shows a riverside path continuing north between the river and the Amtrak rails.',
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
                {layer: 'overlay-alltrails', opacity:0},
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
            description: 'That unofficial path clings to a fence at the west edge of Amtrak property, branching off from the main trail before the bridge over the train tracks.',
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
            description: 'Clear signs along the path show that it has been used extensively. This makeshift dock suggests an ambitious fishing endeavor.',
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
            description: 'Facing back at the north end of the informal trail, a sign clearly states, "No public access beyond this point." It would seem that the trail is legal going north, but illegal going south. This calls to mind a famous song.',
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
        }

/////////////////////////////////
//
//        APPENDIX
//
/////////////////////////////////

        
        // {
        //     id: 'appendix-label',
        //     alignment: 'center',
        //     hidden: false,
        //     title: 'Appendix/ Outtakes',
        //     description: '[[[APPENDIX/ OUTTAKES]]]',
        //     //image: './images/002_topographical_history.jpg',
        //     //description: '...or from points further south along the riverside trail extending to Manhattan\'s southern tip at The Battery.',
        //     location: {
        //         center: [-73.9489, 40.8366],
        //         zoom: 14.00,
        //         pitch: 0.00,
        //         bearing: 28.00
        //     },
        //     mapAnimation: 'easeTo',
        //     rotateAnimation: false,
        //     //callback: 'greenDots',
        //     onChapterEnter: [
        //         //{layer: 'path-main', opacity:1}
        //     ],
        //     onChapterExit: [
        //     ]
        // },



        // {
        //     id: 'secret-paths-overview-2',
        //     alignment: 'left',
        //     hidden: false,
        //     description: 'Access to the park in the 1.5 mile gap between 158th and 182nd is limited. But a warren of lesser-known paths provides some indirect access to the park.',
        //     location: {
        //         center: [-73.94616, 40.84513],
        //         zoom: 15.00,
        //         pitch: 0.00,
        //         bearing: 28.00
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [
        //         {layer: 'path-165th', opacity:1},
        //         {layer: 'path-176th', opacity:1},
        //         {layer: 'path-dyckman', opacity:0.3},
        //         {layer: 'path-main', opacity:0.3},
        //         {layer: 'mapbox-satellite', opacity:0},
        //         {layer: 'social-trail', opacity:1}
        //     ],
        //     onChapterExit: [
        //     ]
        // },




        // {
        //     id: 'A-165th-bridge-zoom',
        //     alignment: 'left',
        //     hidden: false,
        //     //title: '',
        //     image: './images/psych-facility.jpg',
        //     description: 'In the early 1990s, grassroots organizers opposing development of a psychiatric facility on park land west of Riverside Drive <a href="https://www.nytimes.com/1994/05/01/nyregion/neighborhoos-report-washington-heights-a-battle-lost-a-bridge-won.html" target="_blank">won a consolation prize</a>: an access path beginning at 165th street, including a footbridge connecting to Fort Washington Park.',
        //     location: {
        //         center: [-73.9445, 40.8410],
        //         zoom: 15.18,
        //         pitch: 0.00,
        //         bearing: 28.00
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [
        //         {layer: 'path-165th', opacity:1},
        //         {layer: '165-entry', opacity:1}
        //     ],
        //     onChapterExit: [
        //         {layer: '165-entry', opacity:0}
        //     ]
        // },
        
        
        
        // {
        //     id: 'A-165th-hairy-crossing',
        //     alignment: 'left',
        //     hidden: false,
        //     //title: '',
        //     image: './images/005_165_hairy_crossing2.jpeg',
        //     description: 'Frustratingly, this path requires a <a href="https://nyc.streetsblog.org/2009/07/06/eyes-on-the-street-risking-life-and-limb-for-greenway-access" target="_blank">treacherous crossing against relentless oncoming traffic</a> entering an on-ramp to the George Washington Bridge with no crosswalk and no stoplight.<p>This winding trail is somewhat helpful for those heading north. But to get directly to the actual river only 0.1 miles west as the crow flies requires a winding mile-long journey from 165th and Riverside Drive ',
        //     location: {
        //         center: [-73.9441, 40.8437],
        //         zoom: 15.18,
        //         pitch: 0.00,
        //         bearing: 28.00
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [
        //         {layer: 'path-165th', opacity:1},
        //         {layer: 'path-165th', opacity:1},
        //         {layer: 'path-176th', opacity:0},
        //         {layer: '165-crossing1', opacity:1}
        //     ],
        //     onChapterExit: [
        //         {layer: '165-crossing1', opacity:0}
        //     ]
        // },
        
        
        
        // {
        //     id: 'B-176th-entry',
        //     alignment: 'left',
        //     hidden: false,
        //     //title: '',
        //     image: './images/entry-176.jpg',
        //     description: 'Even fewer cross at the Haven Avenue underpass by 176th.',
        //     location: {
        //         center: [-73.9423,40.8474],
        //         zoom: 15.81,
        //         pitch: 0.00,
        //         bearing: 28.00
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [
        //         {layer: 'path-165th', opacity:0},
        //         {layer: 'path-176th', opacity:1},
        //         {layer: 'path-dyckman', opacity:0},
        //         {layer: '176-entry', opacity:1}
        //     ],
        //     onChapterExit: [
        //         {layer: '176-entry', opacity:0}
        //     ]
        // },



        // {
        //     id: 'B-176th-underpass',
        //     alignment: 'left',
        //     hidden: false,
        //     //title: '',
        //     image: './images/176-tunnel.jpg',
        //     description: 'This <a href="https://www.nytimes.com/1994/05/01/nyregion/neighborhoos-report-washington-heights-a-battle-lost-a-bridge-won.html" target="_blank">trek through deserted tunnels</a>, isolated from both the park and the city and strewn with discarded clothes and luggage cases, offers only a temporary escape for the city\'s unhoused population, who seem to get routinely swept away by city officials.',
        //     location: {
        //         center: [-73.9434,40.8493],
        //         zoom: 15.81,
        //         pitch: 0.00,
        //         bearing: 28.00
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [
        //         {layer: 'path-165th', opacity:0},
        //         {layer: 'path-176th', opacity:1},
        //         {layer: 'path-dyckman', opacity:0},
        //         {layer: '176-underpass', opacity:1}
        //     ],
        //     onChapterExit: [
        //         {layer: '176-underpass', opacity:0}
        //     ]
        // },
        


        // {
        //     id: 'history-1',
        //     alignment: 'left',
        //     hidden: false,
        //     description: 'For historic reasons, each of these paths has to navigate around automotive routes and rail lines to get to the riverside. The railroads claimed the coveted riverside property first, with The New York Central & Hudson River Railroad Company <a href="https://www.nytimes.com/1913/06/29/archives/railroad-and-park-feasible-solution-of-fort-washington-problem-is.html?searchResultPosition=25" target="_blank">acquiring a narrow tract of property parallel to the river</a> in 1847.',
        //     location: {
        //         center: [-73.94616, 40.84513],
        //         zoom: 15.00,
        //         pitch: 0.00,
        //         bearing: 28.00
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [
        //         {layer: 'path-165th', opacity:0},
        //         {layer: 'path-176th', opacity:0},
        //         {layer: 'path-dyckman', opacity:0},
        //         {layer: 'path-main', opacity:0},
        //         {layer: 'social-trail', opacity:0}
        //     ],
        //     onChapterExit: []
        // },
        
        
        
        // {
        //     id: 'history-2',
        //     alignment: 'left',
        //     hidden: false,
        //     description: 'The city later guaranteed public access by <a href="https://www.nycgovparks.org/parks/fort-washington-park/history" target="_blank">acquiring five parcels of riverfront land between 1896 and 1927</a> on behalf of the park district, but by then this land was already split down the middle by train tracks.',
        //     location: {
        //         center: [-73.94616, 40.84513],
        //         zoom: 15.00,
        //         pitch: 0.00,
        //         bearing: 28.00 
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        
        
        
        // {
        //     id: 'history-3',
        //     alignment: 'left',
        //     hidden: false,
        //     description: 'Automotive routes carved up the land further. Construction of a bridge connecting began in 1927 as provisioned by New York and New Jersey state legislation. The city\'s West Side Improvement Plan spurred the <a href="https://www.nycgovparks.org/parks/X110/history" target="_blank">development of the Henry Hudson Parkway</a> in the 1930s. In part due to these physical barriers, some of the most direct paths to the park wind through dark and neglected tunnels, across traffic, or along non-public paths.',
        //     location: {
        //         center: [-73.94616, 40.84513],
        //         zoom: 15.00,
        //         pitch: 0.00,
        //         bearing: 28.00
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [
        //         {layer: '1955-nyc-building-map', opacity:0}
        //     ],
        //     onChapterExit: []
        // },


        
        // {
        //     id: 'credits',
        //     alignment: 'left',
        //     hidden: true,
        //     //title: '',
        //     //image: './images/012_fort_washington_park.jpeg',
        //     //description: 'Rehash the land use conflicts: highway traffic (165th), train (social trail), land acquisition (secured!), Limited access makes the park isolated…but isolation may be part of the charm.',
        //     location: {
        //         center: [-73.94616, 40.84513],
        //         zoom: 14.00,
        //         pitch: 0.00,
        //         bearing: 28.00
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [
        //         {layer: 'path-main', opacity:1},
        //         {layer: 'social-trail', opacity:1},
        //         {layer: 'path-dyckman', opacity:1},
        //         {layer: 'path-165th', opacity:1},
        //         {layer: 'path-176th', opacity:1}
        //     ],
        //     onChapterExit: [
        //     ]
        // }
//end chapters


    ]
};
