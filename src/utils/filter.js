export function separateNumbers(number) {
   if (number === undefined) {
      return "";
   }

   const str = number.toString();
   const separated = [];
   let count = 0;

   for (let i = str.length - 1; i >= 0; i--) {
      separated.unshift(str[i]);
      count++;

      if (count === 3 && i !== 0) {
         separated.unshift(" ");
         count = 0;
      }
   }

   return separated.join("");
}
