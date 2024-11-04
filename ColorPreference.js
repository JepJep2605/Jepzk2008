let colorPreferences = [];

for (let i = 0; i < 3; i++) {
  let color = prompt("Enter one of your favorite colors:");

    colorPreferences.push(color);

      console.log("Current color preferences:", colorPreferences);
      }

      let additionalColor = prompt("Enter another color to add to the list:");

      colorPreferences.push(additionalColor);

      console.log("Final color preferences:", colorPreferences);