# Which dependencies
Service - Maven 3.9.6, JDK 17, SpringBoot, SpringBoot Cache
Webapp - React 18, Axios 1.6, React Redux


# Considerations:

At some points in the project I tried to vary the way of doing things to demonstrate the various possibilities of how to use the language. For example, but not limited to:
In `Favorites.tsx` I used the style as `customStyles`, just as inline and imported by CSS.

I used `useState()` within the `App.tsx` file as well as creating separate files for each use.

Data persistence was not mentioned on, which is why `localStorage` or `JPA` is not used.

I added `SpringBoot Cache` as the API kindly requests it be done that way.


# How to run the project:

First, you need to install `JDK 17`, `Maven` (i'm using 3.9.6) and `npm` before anything.

For Windows, i created a `.bat` for execution.
If it's your first time running the project, run `build_local.bat`, if you've already built everything, just run `start_local.bat`.


# How to use the project:

You have the `Fetch All` button to search for everything (I could have done it so that if the input was empty, it would search for everything, but I did it this way to demonstrate other ways).
The `Favorites` button will only be enabled after selecting a favorite. Each and every favorite will be used Redux for storage.
At the end of the page, after searching for something that has pagination, the `Next` or `Previous` button will be enabled.