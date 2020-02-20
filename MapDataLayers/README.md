# Challenges:

The initial goal was to create a bivariate choropleth which would compare income to education levels of a given city.
Finding a choropleth geojson on D3 was harder than I thought. The files were in a tar zipped file.. hmmm... didn't learn that one in class. Extracting them was a challenge until I learned about the simple 7-zip app! Small win. After unzipping them I was left with a bunch of files that contained thousands of dependencies. 
## big fail


Sample:
function e(e,t,n){n=n||{};var r=e.ownerDocument,i=r.defaultView.CustomEvent;"function"==typeof i?i=new i(t,{detail:n}):((i=r.createEvent("Event")).initEvent(t,!1,!1),i.detail=n),e.dispatchEvent(i)}function t(e){return Array.isArray(e)||e instanceof Int8Array||e instanceof Int16Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Uint16Array||e instanceof Uint32Array||e instanceof Float32Array||e instanceof Float64Array}function n(e){return e===(0|e)+""}function r(e){const t=document.createElement("span");return t.className="observablehq--cellname",t.textContent=`${e} = `,t}const i=Symbol.prototype.toString;function o(e){return i.call(e)}const{getOwnPropertySymbols:s,prototype:{hasOwnProperty:a}}=Object,{toStringTag:l}=Symbol,u={},c=s;function d(e,t){return a.call(e,t)}function h(e)

* idk what that even means?! The other choropleth files I grabbed from D3 didn't make matters any easier. 
* They all looked similar. I extracted the FIPS code from one of the files and brought that into our main dataset as a "just in case"


# Process:

* We managed to find a dataset on education that included county, state, fips code, and percentage of those 25 and older who graduated HS. Score! 

* We found another dataset that contained the average income by city and state. Score again!

* We took our main data set summarized the amount of homicides occured over the the span of 2000-2014 and added in the education data using the fips code and the average income data using the city and state.

### After combining the files together it was converted into a json file:

*  "data": {    
*      "homicides": [
*        {
*          "City": "Abbeville",
*          "FIPS": 45001,
*          "lat": 29.975,
*          "lon": -92.1266,
*          "num_incidents": 21,
*          "grad_rate_percentage": 16,
*          "mean_income": 40518
*        },

* I used VS code, javascript, html, leaflet, and geomapping for this visual
* What we end up with is this map that contains markers with color variations and sizes based upon the number of murders that occured. 
* The bindpopup allows us to view the income and education datapoints per city. 
* This gives us a good depiction of areas you should probably stay away from. 

## California being the worst one. Soooo, time to move? Maybe I'll relocate next door to Nevada... or maybe... If a person gets murdered and no one is around to witness it... did it really happen? 

# DUN DUN DUNNNNNNN.

fin.

