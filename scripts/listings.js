mapboxgl.accessToken = 'pk.eyJ1IjoiZ2V0aGFzaHNldCIsImEiOiJjazQzN25ia2IwNTJ5M2psbmFmczRqNnozIn0.P_PzVcPby40AAx8D4qm2AA';
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [-81.66595226960412, 28.92960359967752], // lng, lat
	zoom: 12.5,
	bearing: 0,
	pitch: 50
});

// Listing Coordinates
var chapters = {
	'umatilla': {
	    duration: 2000,
		bearing: 0,
		center: [-81.66595226960412, 28.92960359967752], // lng first and then lat 
		zoom: 14.5,
		speed: 2.5,
		pitch: 50
	},
	'eustis': {
	    duration: 2000,
		bearing: 0,
		center: [-81.68545537492034, 28.85267573410317], // lng first and then lat 
		zoom: 14.5,
		speed: 2.5,
		pitch: 50
	},
	'lake-dora': {
	    duration: 2000,
		bearing: 0,
		center: [-81.64614454138665, 28.803494711072148],
		zoom: 14.5,
		speed: 2.5,
		pitch: 50
	},
	'tavares': {
	    duration: 2000,
		bearing: 0,
		center: [-81.72598837153242, 28.80426291187258], 
		zoom: 14.5,
		speed: 2.5,
		pitch: 50
	},
	'leesburg': {
	    duration: 2000,
		bearing: 0,
		center: [-81.88249181226318, 28.81156072069369], 
		zoom: 14.5,
		speed: 2.5,
		pitch: 50
	},
	'howey': {
	    duration: 2000,
		bearing: 0,
		center: [-81.77635772505558, 28.71428373413231], 
		zoom: 14.5,
		speed: 2.5,
		pitch: 50
	},
	'groveland': {
	    duration: 2000,
		bearing: 0,
		center: [-81.8875790594899, 28.578658212483003], 
		zoom: 14.5,
		speed: 2.5,
		pitch: 50
	},
	'clermont': {
	    duration: 2000,
		bearing: 0,
		center: [-81.77654725672879, 28.549949776454444], 
		zoom: 14.5,
		speed: 2.5,
		pitch: 50
	}
};


// Listings
var STORIES = [
	{
		"id" : "umatilla",
		"img" : "umatilla-01.jpg",
		"slides" : ["umatilla-01.jpg","umatilla-02.jpg","umatilla-03.jpg","umatilla-04.jpg","umatilla-05.jpg"],
		"title" : "Umatilla",
		"descript" : 'It&rsquo;s easy to spot Umatilla&rsquo;s proud citrus legacy &ndash; from the bustling Florida&rsquo;s Natural orange juice warehouse along Route 19 to the dozens of groves that still surround this city of 4,000. Begin your Citrus Label Tour at the Umatilla Museum, which features the label for Golden Gem Growers, a cooperative that once handled between 13 and 15 million boxes of citrus per year, and the Umatilla Citrus Grower&rsquo;s Association, which remains in operation as the oldest business in the city. Continue your journey at Cadwell Park, which displays the Red Warrior/ Indian Warrior, Tyre&rsquo;s Pride, Tyre&rsquo;s Queen and Atlanta Maid labels.<br><br />Then smell and taste Umatilla&rsquo;s rich citrus history at Sunsational Farms, a gift shop on the edge of town that features orange-flavored candles, creamsicle milkshakes and other citrus-flavored treats alongside fresh-picked fruit. Don&rsquo;t leave without grabbing a selfie at the <a href="https://www.sunsationalfarms.com/comersus7F/store/aboutorange.asp">Big Orange</a>, a classic Florida roadside attraction for the last half-century.<p><strong><em>Check out mapped locations for these crate label signs:</em></strong><br>Red Warrior and Indian Warrior/Tyre&#39;s Pride/Atlanta Maid/Tyre&#39;s Queen&nbsp;<a href="https://goo.gl/maps/wctvWHzvUfAutVh57" target="_blank">here</a><br>Duck Head/Golden Gem&nbsp; <a href="https://goo.gl/maps/dP9QwmNXG7PZNinn9" target="_blank">here</a></p>',
		"mapURL" : "https://goo.gl/maps/hUQKjFnHpAzjK3UA9"
	},
	{
		"id" : "eustis",
		"img" : "eustis-02.jpg",
		"slides" : ["eustis-02.jpg","eustis-03.jpg","eustis-04.jpg","eustis-05.jpg"],
		"title" : "Eustis",
		"descript" : 'Follow Route 19 from Umtailla into Eustis, a city that once earned the nickname of the &ldquo;Orange Capital of the World.&rdquo; Eustis&rsquo; <a href="http://www.eustishistoricalmuseum.org/CitrusMuseum.asp">Citrus Museum</a> is the only one of its kind in Florida and features memorabilia and machinery from its rich agricultural history &ndash; including an old citrus grove chemical fire engine and a device that converted ripe, green-skinned oranges to an orange color. The surrounding grounds also feature displays of the Rider and Green J labels. Afterwards, wander down to beautiful Ferran Park along Lake Eustis to see several more labels on your waterfront stroll.<br><br>Before leaving town, pop by the <a href="https://lakecountyevents.com/farmers-market">Lake County Farmers and Artisans Market</a> that takes place every Thursday for the freshest citrus finds among its 300 vendors.<p><strong><em>Check out mapped locations for these crate label signs:</em></strong><br />Dolly/Rainbow/Busy Bee/Seald Sweet and Lake Eustis/White Dove/Rainbow/Blue Star&nbsp;<a href="https://goo.gl/maps/pj2NXQqe55TMhPki8" target="_blank">here</a><br />Rider &amp; Green J&nbsp;<a href="https://goo.gl/maps/hHfKeBQVHjxUks776" target="_blank">here</a></p>',
		"mapURL" : "https://goo.gl/maps/WcykBBAY3EB9MrQb7"
	},
	{
		"id" : "lake-dora",
		"img" : "lake-dora-01.jpg",
		"slides" : ["lake-dora-01.jpg","lake-dora-02.jpg","lake-dora-03.jpg","lake-dora-05.jpg"],
		"title" : "Mount Dora",
		"descript" : 'Simpson Cove along Mount Dora&rsquo;s waterfront is more than just a scenic park to view the next two labels on the tour. The Simpson family first settled along Lake Dora&rsquo;s eastern shore nearly 150 years ago and has been citrus farming here for generations, creating the Simpson Fruit Company that continues to this day. Head to the cove to see the Simpson dog-themed crate label, &ldquo;Roxy,&rdquo; and the label for the Mount Dora Citrus Grower&rsquo;s Association.&nbsp;<br><br>Then wander into charming Mount Dora to explore blocks of boutiques, bars and restaurants. Pick up a tasty citrus-themed souvenir at the Salt and Tea Exchange, like the blood orange smoothie loose leaf herbal tea, or the Florida sunshine salt spice blend that features orange zest. And kick back and relax after your walk with a citrus-flavored cocktail at <a href="http://handlebarmtdora.com/">Handlebar,</a> which mixes orange bitters into several of its drinks including the Stirred Martini and the Oaxacan Old Fashioned.<p><strong><em>Check out mapped locations for these crate label signs:</em></strong><br />Roxy &amp; Mt. Dora Citrus Growers Association&nbsp;<a href="https://goo.gl/maps/Tabd1yV3nf1Z6vLJ8" target="_blank">here</a></p>',
		"mapURL" : "https://goo.gl/maps/gp9eVeYLapDbzfZp9"
	},
	{
		"id" : "tavares",
		"img" : "tavares-01.jpg",
		"slides" : ["tavares-01.jpg","tavares-02.jpg","tavares-03.jpg","tavares-04.jpg","tavares-05.jpg","tavares-06.jpg","tavares-07.jpg"],
		"title" : "Tavares",
		"descript" : 'Our citrus packing companies shipped thousands of crates of fruit to their customers via rail from sites like the Tavares Train Depot (now the <a href="https://www.tavares.org/1271/History-Museum">Tavares Museum</a>), home to the next two labels on the tour. While at the depot, imagine the days of boxcars loaded to the brim with Lake County&rsquo;s freshest fruit, and the low rumble of the locomotive as the wheels of the train began to turn and carried that citrus all across the country.&nbsp;<br><br>Head down to the Lake County Museum in the historic courthouse building to see another two labels, then kick back and relax with a Florida Citrus Margarita and a citrus salmon at Puddle Jumpers Lakeside Grill and Bar. The restaurant provides beautiful views of the Tavares waterfront and seaplanes arriving and departing on Lake Dora.<p><strong><em>Check out mapped locations for these crate label signs:</em></strong><br />Hammock &amp; Ruby&nbsp;<a href="https://goo.gl/maps/UPsXCrXLRqbd7neL9" target="_blank">here</a><br />Lake County &amp; Flyer&nbsp;<a href="https://goo.gl/maps/r3Q9uVxGEkXi7jfA7" target="_blank">here</a></p>',
		"mapURL" : "https://goo.gl/maps/BYuH1NEHcgTFRgTr7"
	},
	{
		"id" : "leesburg",
		"img" : "leesburg-01.jpg",
		"slides" : ["leesburg-01.jpg","leesburg-02.jpg","leesburg-03.jpg","leesburg-04.jpg","leesburg-05.jpg","leesburg-06.jpg"],
		"title" : "Leesburg",
		"descript" : 'Stretch your legs after all that driving in two beautiful natural spaces along Lake Griffin that each boast a rich citrus history: Leesburg&rsquo;s Sabal Bluff Nature Preserve and the Bourlay Historic Nature Park. The parks&rsquo; former owner, Arthur (Buddy) Bourlay III, grew citrus on each property before donating the land for public use. Look for remnants of orange groves and avocado, key lime, banana, guava, and papaya trees planted by Mr. Bourlay as you explore the trails found in each park. Finish your time in Leesburg by heading to the city&rsquo;s charming public square to see the Irish Castle and Piney Woods Belle citrus labels.<p><strong><em>Check out mapped locations for these crate label signs:</em></strong><br />Irish Castle &amp; Piney Woods Belle&nbsp;<a href="https://goo.gl/maps/GzdCs5pVZDqWpY8R9" target="_blank">here</a></p>',
		"mapURL" : "https://goo.gl/maps/C9QPSoELjsPL8uzW9"
	},
	{
		"id" : "howey",
		"img" : "howey-02.jpg",
		"slides" : ["howey-02.jpg","howey-03.jpg","howey-04.jpg","howey-05.jpg","howey-06.jpg"],
		"title" : "Howey-in-the-Hills",
		"descript" : 'This small town offers the rare opportunity to explore the extravagant living quarters of a citrus magnate from the industry&rsquo;s golden age. William Howey purchased more than 60,000 acres in Lake County more than a century ago, planted citrus groves on the majority of his newly acquired land, and even built the state&rsquo;s first citrus plant. The Howey Mansion, a 20-room landmark built in 1925 in the Mediterranean Revival style, is a living testament to Howey&rsquo;s power and influence in the industry and the region.<br><br>Retrace Howey&rsquo;s life on a <a href="https://www.thehoweymansion.com/historic-tours.html">mansion walking tour</a>, then head to Griffin Park along Little Lake Harris to see two more crate labels: Apshawa and White Owl. The C.V. Griffin Packing Company, creator of the White Owl crate label, grew out of a business deal between Howey and another local entrepreneur, Clarence Vaughn Griffin, who developed much of the town.<p><strong><em>Check out mapped locations for these crate label signs:</em></strong><br />White Owl &amp; Apshawa&nbsp;<a href="https://goo.gl/maps/45QhPbgfKo5Qi3S76" target="_blank">here</a></p>',
		"mapURL" : "https://goo.gl/maps/haRCa5nNG6FhUdYw5"
	},
	{
		"id" : "groveland",
		"img" : "groveland-01.jpg",
		"slides" : ["groveland-01.jpg","groveland-02.jpg","groveland-03.jpg","groveland-04.jpg"],
		"title" : "Groveland & Mascotte",
		"descript" : 'It should come as no surprise that this tour stops in Groveland, a city named after the citrus groves that once dotted the surrounding landscape. Discover four labels in Groveland and the nearby city of Mascotte that are less than three miles apart. The Mascotte Civic Center features displays of the Beach Lake and Pine Island labels, while the Groveland Museum showcases the RIchland and Groveland labels. All four labels trace their origin to the Grove Fruit Packing Company, which was founded by Italian immigrant Peter Micheloni and was a mainstay in these two cities for decades.<p><strong><em>Check out mapped locations for these crate label signs:</em></strong><br />Groveland &amp; Richland&nbsp;<a href="https://goo.gl/maps/Cc49vz7rk5c3Wt4G6" target="_blank">here</a></p>',
		"mapURL" : "https://goo.gl/maps/fvtv1noszsfiVf8r8"
	},
	{
		"id" : "clermont",
		"img" : "clermont-01.jpg",
		"slides" : ["clermont-01.jpg","clermont-02.jpg","clermont-03.jpg","clermont-04.jpg"],
		"title" : "Clermont",
		"descript" : 'Lake County&rsquo;s rich citrus history lives on 226 feet above Clermont at the <a href="https://blog.visitlakefl.com/citrus-tower/">Citrus Tower</a>, which was one of Florida&rsquo;s first tourist attractions when it opened in 1956. Visitors once flocked to the top of this tower to see a limitless vista of citrus groves, and the landmark has endured even as the surrounding landscape has evolved. After taking in the sky-high views, caffeinate with an orange-flavored coffee at the Citrus Coffee Company at the base of the tower, then stop by the <a href="https://blog.visitlakefl.com/showcase-of-citrus/">Showcase of Citrus</a>, a &nbsp;roadside emporium selling orange slushies, citrus salsa, orange chapstick and hundreds of other items alongside a petting zoo and U-pick farm.<br><br>Finish your journey along the shores of Lake Minneola at the Clermont Historic Village Museum to see the final two labels on the tour: Gem of the Hills and Lake Minnehaha. Then toast to your cross-county citrus adventure with a tangerine haze IPA at the <a href="https://clermontbrewingcompany.com/">Clermont Brewing Company</a>. Cheers!<p><strong><em>Check out mapped locations for these crate label signs:</em></strong><br />Lake Minehaha &amp; Gem Of The Hills&nbsp;<a href="https://goo.gl/maps/sAPtmrwkUBSXrshL9" target="_blank">here</a></p>',
		"mapURL" : "https://goo.gl/maps/pazH4ENkrpoHvcUU6"
	}
];

var listingBox = document.getElementById('listings'); // find the div to build in
var x = 0;
var imgURL = 'https://maddencdn.com/content/images/2022/lake-county/citrus-label-tour/';
for (var x in STORIES) {
	if (!document.getElementById(x)) {
		
		// build the listingBox
		var output = "";
					
		var newListing = document.createElement("section");
		newListing.setAttribute("class","listing");
		newListing.setAttribute("id",STORIES[x].id);

		if(STORIES[x].slides) {
			output += '<div class="swiper">'
				output += '<div class="swiper-wrapper">'
				for (var n in STORIES[x].slides) {
					output += '<div class="swiper-slide">'
					output += '<img src="'+imgURL+STORIES[x].slides[n]+'" class="listingImg" alt="'+ STORIES[x].title +' image">'
					output += '</div>'
				}
				output += '</div>'
				output += '<div class="swiper-button-prev"></div><div class="swiper-button-next"></div>'
			output += '</div>'

		} else {
			output += '<img src="'+imgURL+STORIES[x].img+'" class="listingImg" alt="'+ STORIES[x].title +' image">'
		}
		
		output += '<h2 class="listingName">' + STORIES[x].title + '</h2>'			
		output += '<p class="listingDescription">' + STORIES[x].descript + '</p>'


		newListing.innerHTML = output;
		listingBox.appendChild(newListing);
	}
	x++;     
}	
