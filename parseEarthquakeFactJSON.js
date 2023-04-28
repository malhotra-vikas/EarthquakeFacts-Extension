async function parseEarthquakeFactsJSON() {
    const res = await fetch ("earthquake-facts.json");
    const record = await res.json();
    
    console.log(record);

    document.getElementById("factOfTheDay").innerHTML=record.fact[0].data;


}
parseEarthquakeFactsJSON();