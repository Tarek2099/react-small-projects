const Greeting = ({ TimeOfDay }) => {
  return (
    <div>
      {TimeOfDay === "morning" ? (
        <h1>Good Morning</h1>
      ) : TimeOfDay === "noon" ? (
        <h1>Good Noon, It's lunch time</h1>
      ) : TimeOfDay === "afternoon" ? (
        <h1>Good Afternoon</h1>
      ) : TimeOfDay === "evening" ? (
        <h1>Good Evening</h1>
      ) : TimeOfDay === "night" ? (
        <h1>Good night</h1>
      ) : (
        <h1>Good Day, Best of luck</h1>
      )}
    </div>
  );
};
export default Greeting;
