// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
const sourceSting = "aaabbdcccccf";
const destString = convertStringintoNewFormat(sourceSting);
const destString1 = convertStringintoNewFormat("aabbaa");
appDiv.innerHTML = destString + "            ,        " + destString1;

// Given a string like `aaabbdcccccf`, write a function that transforms it to: `a3b2d1c5f1`.
// Please note: `aabbaa` → `a2b2a2` **not** `a4b2`

function convertStringintoNewFormat(source) {
  let sourceArray = source.split("");
  let preElement = "";
  const lastElement = sourceArray.splice(-1, 1);
  let count = 1;
  return sourceArray
    .reduce((all, element) => {
      if (preElement !== element && count === 1) {
        if (preElement === "") {
          all.push(element);
        } else {
          all.push(count);
          all.push(element);
          if (element === lastElement) {
            
          }
        }
      } else if (preElement === element) {
        count++;
      } else if (preElement !== element && count !== 1) {
        all.push(count);
        all.push(element);
        count = 1;
      }
      preElement = element;
      return all;
    }, [])
    .join("");
}
