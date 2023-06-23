import { createApp } from "vue";

const app = createApp();

app.mixin({
   computed: {
      $numberFormatter() {
         return (value) => {
            if (typeof value !== "number") {
               return value;
            }
            return new Intl.NumberFormat("en-US", {
               maximumSignificantDigits: 3,
            }).format(value);
         };
      },
   },
});

export default app;
