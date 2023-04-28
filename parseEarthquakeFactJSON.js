async function parseEarthquakeFactsJSON() {
    //url = "https://github.com/malhotra-vikas/EarthquakeFacts-Extension/blob/bc663fc8aeb77140cfc29646a9fa163947db573c/earthquake-facts.json";

    const res = await fetch ("earthquake-facts.json");
    const record = await res.json();
    
    console.log(record);
    // Genrate a random fact number between 0 and 20
    let randomNumber = Math.floor(Math.random() * 20);


    document.getElementById("factOfTheDay").innerHTML=record.fact[randomNumber].data;


}
parseEarthquakeFactsJSON();