export const formatTime = () => {
  const time = new Date().getHours();
  if (time >= 0 && time <= 10) return "Pagi";
  if (time >= 10 && time <= 15) return "Siang";
  if (time >= 15 && time <= 18) return "Sore";
  if (time >= 18 && time <= 23) return "Malam";

  return time;
};
