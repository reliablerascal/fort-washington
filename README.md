# river side, not Riverside
_An exploration of access issues to Fort Washington Park_

My focus for this project is to geographically show the challenges of accessing New York City's Fort Washington Park. Starting with <a href="https://github.com/mapbox/storytelling" target="_blank">Chris Whong's Mapbox Storytelling template</a>, I adapted it to function as a "sticky" graphic, imported layers directly from GeoJSON to get past MapBox's 15 layer limit, added and rendered some of my own JavaScript properties, etc.

See also my Columbia Lede class presentation [river side, not Riverside](https://docs.google.com/presentation/d/1ZwO5fan_ltLzFTe16mZ3CVEGW-FTXvENLcBm89uCm5U/edit#slide=id.g260a9537d66_0_40) for a deeper dive into my process specific to rendering the unofficial trail.

Here's a prototype draft of my story, [The Stressful Entry to a Relaxing Fortress](https://reliablerascal.github.io/fort-washington/), as published on my GitHub.

## Data sources
|Data Source|Description|
|---|---|
|[AllTrails](https://alltrails.com)|This free app allowed me to create path maps by recording them, as I did with the [unofficial riverfront trail north of the George Washington Bridge](https://www.alltrails.com/explore/map/riverfront-180-to-189-8722c8f), or drawing them, as I did with the [Hudson River Greenway south of Fort Washington Park](https://www.alltrails.com/explore/map/map-september-28-2023-9f31942). I then exported these maps as GPX files.|
|[Google Earth](https://earth.google.com)|Regardless of whether I walked or recorded my map, AllTrails (and Strava) introduced errors in measuring the altitude of Riverside at sites of bridges over Trinity Cemetery(155th street) and Riverside Viaduct (136th to 129th Street). Google Earth allows lookup of actual height based on pointing and clicking on satellite images.|
--->

## Overview of Data Interpretation Process
To create a path for the unofficial trail north of the George Washington Bridge, I did the following:
<ol>
<li>In AllTrails, recorded the trail
<li>In [GeoJSON.io](https://geojson.io) Satellite Streets view, deleted points to reduce file size and edited the path to correct imprecisions such as weaving over the Amtrak fence or into the river.
</ol>


## Data Quirks and Other E-Varmints Standing in My Righteous Path
<!-- My attempt to establish an agreed-upon ordinality of chord moods might have seemed successful, but an exception to the pattern needs further exploration. One listener, a formally trained musician who likes "shoegaze emo" music, rated a diminished chord as more agreeable than chords with less tension. -->

## What I Learned
<!-- This project is a very basic prototype for a concept I may like to explore further. Technically, I learned the following:
<ul>
<li>Developed a basic overview of the field of data sonification
<li>Learned about the tone.js library, which can play multiple notes simultaneously based on user-events
<li>Practiced use of D3 for non-visualization uses- namely, updating font size & style, text fields, colors, and sound events based on data read from a .csv file and reference to html classes. It's unlikely that D3 is the best tool for this job, but I simply wanted to gain practice using it.
</ul> -->

## What I'd Like to Learn Next to Advance this Project
<!-- Key to building off this project is soliciting and incorporating more user feedback. To help encourage this, I could do the following:
<ul>
<li>add different types of instrumentation to make this more fun/interesting
<li>add a user selector to switch city selection
<li>retrieve current data via API or web scraping to make this a "living" web page
<li>conduct more comprehensive research about existing chord-based data sonification projects
</ul> -->

## Guide to the Repository
<!-- Following is an overview of files in this repository:
<!---* [source_data](source/data/)- includes only my own manually-entered lookup table for CTA stations--->
<!---* [Jupyter Notebooks](notebooks)- six notebooks following through the data analysis steps from path development to calculating effort--->
<!-- * [data](data/)- this contains only a simple 10-day forecast acquired from [IQ Air](https://iqair.com)
* [scrollama_aqi.js](scrollama_aqi.js)- JavaScript code for responding to scrolling events, originally derived from https://github.com/zhoyoyo/lede23-animation. 
* [weather_chords.js](weather_chords.js)- JavaScript code for translating AQI readings to musical chords. This file specifies which chords were chosen to represent each AQI category- which I am not documenting here as it may be subject to change.  -->

<!---* [results](results/)- results of data analysis--->
<!---* [images](images/)- pictures and graphs supporting this story--->

