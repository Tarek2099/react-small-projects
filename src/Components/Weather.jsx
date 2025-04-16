// Take a temperature prop
// If the temperature is below 15, display "It's cold outside"
// If the temperature is between 15 and 25, display "It's nice weather outside"
// If the temperature is above 25, display "It's hot outside"
// If the temperature is not a number, display "Invalid temperature"
// If the temperature is not provided, display "Temperature not provided"

const Weather = ({ temperature }) => {
  return (
    <div>
      {temperature === undefined ? (
        <h1>"Temperature not provided"</h1>
      ) : typeof temperature !== "number" ? (
        <h1>"Invalid Temperature"</h1>
      ) : temperature < 15 ? (
        <h1>"It's cold outside"</h1>
      ) : temperature > 25 ? (
        <h1>"It's hot outside"</h1>
      ) : (
        <h1>"It's nice weather outside"</h1>
      )}
    </div>
  );
};

export default Weather;
