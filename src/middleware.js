// import {defineMiddleware, sequence} from "astro:middleware";
// import { middleware } from "astro:i18n"; // Astro's own i18n routing config

// export const userMiddleware = defineMiddleware(async (ctx, next) => {
//   const response = await next();
//   if (ctx.url.startsWith("/es")) {
//     return new Response("", {
//       status: 200
//     });
//   } else {
//     return response;
//   }
// });

// export const onRequest = sequence(
//   userMiddleware,
//   middleware({
//     redirectToDefaultLocale: false,
//     prefixDefaultLocale: true
//   })
// )