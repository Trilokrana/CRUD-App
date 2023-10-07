
export { default } from "next-auth/middleware";

export const config = { matcher: ["/dashboard"] };

/*middleware is used to provide the the authentication to our site
If we only want to secure certain pages, so we have to export a config object with a matcher:
Now we will still be able to visit every page, but only /dashboard will require authentication.
If a user is not logged in, the default behavior is to redirect them to the sign-in page.
*/