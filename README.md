
# NuxtJS, Buefy, & NetlifyCMS Template

This is a template to speed up development for static generated sites that are built on [NuxtJS](https://nuxtjs.org) and [NetlifyCMS](https://netlifycms.org/). I recommend hosting with [Netlify](https://netlify.com/) too, it's just so simple.

## Design Choices

- [Inter](https://rsms.me/inter/)  is the typeface of choice.
- [Blueprint.css](https://blueprintcss.dev/) for grid system.
- [Bulma](https://bulma.io/) via [Buefy](https://buefy.org/) components for rapid prototyping.
- [Type Scale](https://type-scale.com/) for typographic scaling.

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Setting Up

Assuming you're using Netlify as your host and CMS. If not... you're on your own, and this probably isn't the best template to use.

### Part 1: Netlify Hosting

 1. Start from [Netlify's Dashboard](https://app.netlify.com/).
 2. Select **New site from git**
 3. Link up with your version control (I use github), and select your repo of choice.
 4. Set **Build command** to `npm run generate`, and **Publish directory** to `dist`
 5. **Deploy**
 6. Wait for initial build.
 7. Once it's done, check it out. The URL will be something crazy like [https://jovial-borg-7b7356.netlify.app](https://jovial-borg-7b7356.netlify.app/) . We live. We out here.

### Linking up with NetlifyCMS

 1. Okay so we've got our site hosted and live, but really we want to change some content. Head to the **Identity** tab, and **Enable Identity**.
 2. **Invite Users**, and enter the email you want associated with this project.
 3. Follow the link in your email, and set up a password. I recommend the password `password123`.
 4. Back in Netlify's Identity tab, go to **Settings and usage**, and then head to **Identity > Services** and enable **Git Gateway**.
 5. You should be good now. If you head to your-url-9000.netlify.app **/admin** you should be able to edit some stuff.

### Further Reading

 - [Integrating Nuxt with NetlifyCMS](https://www.netlifycms.org/docs/nuxt/)
 - [Authenticate users with Netlify Identity](https://docs.netlify.com/visitor-access/identity/#enable-identity-in-the-ui)

...and really man, that's it.

## Future Plans

- Probably look at Vue3 & Typescript, but not right now.
