async function parseEarthquakeDataJSON() {
    const res = await fetch ("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson");
    const record = await res.json();
    
    console.log(record);

// Get the time zone name
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    epochTime = record.features[0].properties.time;

    const date = new Date(epochTime);

// Convert the epoch timestamp to EST
    const localeDate = date.toLocaleString('en-US', { timeZone: 'America/New_York' });

    document.getElementById("eTime").innerHTML=localeDate;
    document.getElementById("ePlace").innerHTML=record.features[0].properties.place;
    document.getElementById("eMagnitude").innerHTML=record.features[0].properties.mag;
    document.getElementById("eDetails").innerHTML=record.features[0].properties.url;

//    document.getElementById("factOfTheDay").innerHTML="Some new fact that is worth knowing";

}
parseEarthquakeDataJSON();