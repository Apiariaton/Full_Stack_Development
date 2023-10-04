
const d = new Date();
d.setHours(12, 0, 0);
const opening = d.getHours();
const d2 = new Date();
d2.setHours(22, 0, 0);
const closing = d2.getHours();


export const restaurant_times = {
    r_name: "Dishoom",
    monday: [opening, closing],
    tuesday: [opening, closing],
    wednesday: [opening, closing],
    thursday: [opening, closing],
    friday: [opening, closing],
    saturday: [opening, closing],
    sunday: [opening, closing],
  };


export const openNow = () => {
    const time_now = new Date();
    const day = time_now.getDay();
    const time = time_now.getHours();
    console.log(restaurant_times.friday[0]);
    if (
      day == 0 &&
      restaurant_times.sunday[0] <= time < restaurant_times.sunday[1]
    ) {
      return true;
    } else if (
      day == 1 &&
      restaurant_times.monday[0] <= time < restaurant_times.monday[1]
    ) {
      return true;
    } else if (
      day == 2 &&
      restaurant_times.tuesday[0] <= time < restaurant_times.tuesday[1]
    ) {
      return true;
    } else if (
      day == 3 &&
      restaurant_times.wednesday[0] <= time < restaurant_times.wednesday[1]
    ) {
      return true;
    } else if (
      day == 4 &&
      restaurant_times.thursday[0] <= time < restaurant_times.thursday[1]
    ) {
      return true;
    } else if (
      day == 5 &&
      restaurant_times.friday[0] <= time < restaurant_times.friday[1]
    ) {
      return true;
    } else if (
      day == 6 &&
      restaurant_times.saturday[0] <= time < restaurant_times.saturday[1]
    ) {
      return true;
    } else {
      return false;
    }
  }