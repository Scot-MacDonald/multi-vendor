export function generateInitials(name = "") {
  if (!name) {
    return ""; // or return "?" to show a default initial
  }

  // Split the name into words
  const words = name.split(" ");

  let firstInitial = words[0][0].toUpperCase();
  let secondInitial = words.length > 1 ? words[1][0].toUpperCase() : "";

  return firstInitial + secondInitial;
}
