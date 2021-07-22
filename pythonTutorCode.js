const record = [
    { year: "1972", result: "N/A"},
    { year: "1971", result: "N/A"},
    { year: "1970", result: "N/A"},
    { year: "1969", result: "W"},
    { year: "1968", result: "N/A"},
    { year: "1967", result: "N/A"},
    { year: "1966", result: "L"},
    { year: "1965", result: "N/A"},
    { year: "1964", result: "N/A"}
]

function superbowlWin(array){
    const foundSeason = array.find(season => season.result === "W")
    return foundSeason.year
}

superbowlWin(record)