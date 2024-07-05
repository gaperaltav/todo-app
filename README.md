

## The project

This is a TODO app I'm building to learn NextJS concepts. You can see a live version [here](https://todo-app-green-nine.vercel.app/).

## In development featatures: 
- [x] Due date for each todo.
- [x] Add email notifications to be send to an user with TODOs that has pedning due dates.
- [ ] Add validations to date fields.
- [ ] Research, use an email provider.
- [ ] Add a cornjob to send the emails before the due date.

## Run locally
You can clone the project and in your `env.local` put the following values:

```
DATABASE_URL= (your supabse posgres URL)
GOOGLE_CLIENT_ID= (your google Client ID)
GOOGLE_CLIENT_SECRET= (your google Client secret ID)
NEXTAUTH_SECRET= (generated NextJS secret)
```
And last run the following command: 

```bash
npm run dev
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

