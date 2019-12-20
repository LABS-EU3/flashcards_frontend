src/pages are the root level components, ones which are directly mounted on level 1 routes. (Ex. if you have a route called /login that mounts a Login component, then Login.js will be present in pages directory).

src/modules handles your state (actions + reducers using ducks file structure).
src/modules/resource - please sort by resources for example
src/modules/user will have userActions.js, usersReducers.js, usersTypes

src/components have shared components, like Button, Input etc.

src/utils have utilities like your API wrapper, date utils, string utils etc. private routes etc

config is where you store your environment variables like API endpoints. Don’t commit this to git.

store initializes the redux store.

Resource: https://hackernoon.com/fractal-a-react-app-structure-for-infinite-scale-4dab943092af

https://quickdecks-staging.herokuapp.com/

POST /api/auth/forgot_password
Description: Begins password reset process by sending email token to the user's registered email..

Request body:

{
"email": "anna@xyz.com"
}
Response body:

{
"message": "Email sent to user"
}
POST /api/auth/reset_Password
Description: Completes password reset process. Changes user's saved password. Passwords must match..

Request body:

{
"password": "toldYouSecurityIsNotAFad",
"confirmPassword": "toldYouSecurityIsNotAFad"
}
Response body:

{
"message": "Password reset successfully."
}
