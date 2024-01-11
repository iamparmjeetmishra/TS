// 18 Enums
// Enum is a way to define a set of named constants. Enums allow you to define a collection of related values that can be used interchangeably in your code.

// For eg, lets say we are building a weather app and we want to define a set of possible weather conditions like 'sunny'; 'cloudy'. 'rainy' and 'snowy'. you could define an enum like this.

enum WeatherConditions {
    Sunny,
    Cloudy,
    Rainy,
    Snowy,
}

// In this eg, Weatherconditions is the name of the enum, and each of the values is assigned an automatice numerical value starting from 0.

enum WeatherConditions2 {
    Sunny = 'sunny',
    Cloudy = 'cloudy',
    Rainy = 'rainy',
    Snowy = 'snowy'
}

// usage
const currentWeather = WeatherConditions.Sunny;
console.log(`Current Weather: ${currentWeather}`) // 0 Because it is index based