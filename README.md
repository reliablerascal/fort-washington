# Accessing New York's Isolated Park on the Hudson
_An exploration of access issues to Fort Washington Park_

My focus for this project was to geographically show the challenges of getting into New York City's Fort Washington Park by bike or on foot. Starting with <a href="https://github.com/mapbox/storytelling" target="_blank">Chris Whong's Mapbox Storytelling template</a>, I adapted it to function as a "sticky" graphic, imported layers directly from GeoJSON to get past MapBox's 15 layer limit, added and rendered some of my own JavaScript properties, etc.

See also my Columbia Lede class presentation [river side, not Riverside](https://docs.google.com/presentation/d/1ZwO5fan_ltLzFTe16mZ3CVEGW-FTXvENLcBm89uCm5U/edit#slide=id.g260a9537d66_0_40) for a deeper dive into my process specific to rendering the unofficial trail.

Here's a prototype draft of my story, <strong>[New York's Isolated Park on the Hudson](https://reliablerascal.github.io/fort-washington/)</strong>. At this time (January 2024) I'm in conversation with a New York outlet about developing this story for publication. See also a similar map-based story I published with [Streetsblog Chicago](https://chi.streetsblog.org/2023/09/11/how-can-we-better-link-the-far-southeast-sides-disconnected-network-of-public-parks); because CMS restrictions confined the map to an iFrame, I also have a [self-published version](https://reliablerascal.github.io/bike-far-southeast/).

## Data sources
|Data Source|Description|
|---|---|
|[AllTrails](https://alltrails.com)|This free app allowed me to create path maps by recording them, as I did with the [unofficial riverfront trail north of the George Washington Bridge](https://www.alltrails.com/explore/map/riverfront-180-to-189-8722c8f), or drawing them, as I did with the [Hudson River Greenway south of Fort Washington Park](https://www.alltrails.com/explore/map/map-september-28-2023-9f31942). I then exported these maps as KML files.|
|[NYC Planimetrics OpenData](https://data.cityofnewyork.us/Transportation/NYC-Planimetrics/wt4d-p43d)| Shapes for parks and Amtrak line, which I processed in QGIS and uploaded as layers in my MapBox style.|
|[Fort Washington GeoJSON](https://github.com/reliablerascal/fort-washington/blob/main/data/fort_wash_points.geojson)|Points and paths supplementing MapBox layers. These include entry points to the park and landmarks such as the Little Red Lighthouse as highlighted in my story. This also includes a path for the official trail following the Henry Hudson Parkway north of the George Washington Bridge.|

## Overview of Map Development Process
To create most paths, I did the following:
<ol>
<li>In AllTrails, used the Draw Map feature to create the path, then exported as KML.
<li>In QGIS, imported KML files and exported as shapefiles.
<li>In MapBox, imported the shapeFile into a style specific to this project.
<li>Index.html references my MapBox style.
</ol>
<br>
For the unofficial trail north of the George Washington Bridge, I brought this into GeoJSON.io. Using satellite streets view, I deleted about 2/3rds of the points to reduce file size, and edited the path to correct imprecisions such as weaving over the Amtrak fence or into the river. Then I exported as GeoJSON.
<br><br>
My phone automatically geocoded the images, though I manually pasted these lat and lng coordinates into chapters in my MapBox.

## What I Learned
This was my second MapBox storytelling project. It's very quick and easy to get started with the basic template, but I learned a lot through tailoring the template for my work:
<ul>
<li>Became familiar with virtually the entire template, deleting sections (e.g. inline map) which I didn't use or need
<li>Uploaded map layers using map.addSource and map.AddLayer (+ filter) to work past MapBox's limit of 15 layers
<li>Picked up a lot of techniques which I ultimately stripped out to simplify my story. E.g. georeferencing to overlay an historic map of Fort Washington. I also initially used masking to hide New Jersey which made it look like the GW Bridge dropped off a cliff. I later settled on a more basic base map
<li>Experimented and revised my workflow for map design using a range of apps (QGIS, MapBox, DataWrapper, GeoJSON.io, AllTrails, Strava, Google Maps, Google MyMap)
<li>Most importantly, I learned to not be afraid to ask for help. And I got help from so many folks at Columbia- Aaron Reiss, Kelly Waldron, Steph Andrews amongst others. Federico Teijeiro originally found and recommended the MapBox storytelling template to me.
</ul>

## What I'd Like to Learn Next to Advance this Project
Fortunately I had the time to revise and improve this project after completing my studies at Columbia. Some possible next steps:
<ul><li>Work with outlets to develop this story or variants based on this framework. Related to this, I'll need to find ways to work around outlets' proprietary content management systems.
<li>Create my own set of recommendations to help small, CMS-restricted outlets scope out exactly what it would take (e.g. AWS setup) to host this sort of project.
<li>Develop a scrollytelling story using MapBox's 3-D utilities, e.g. to show Von Humboldt's climb up Chimborazo.
</ul>

## Guide to the Repository
Following is an overview of files in this repository:

* [data](data/)- not much here beyond my GeoJSON file including some points and path data.
* [Jupyter Notebooks](notebooks)- some early experiments in trying to programmatically reduce file size by deleting points. This was not used in the final project.
* [images](images/)- photos used for this story
* [config.js](config.js)- Most of the text content for the story. 
* [index.html](index.html)- Most of the code supporting the story flow.



