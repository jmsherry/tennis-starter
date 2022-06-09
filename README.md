# Tennis App

## Persistance

<https://blog.logrocket.com/persist-state-redux-persist-redux-toolkit-react/#persisting-state-redux-persist>

<https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist>

## A note on the update behaviour

`json-server` uses `PUT` and `PATCH` as they were originally defined, so if you want to send just the changes and have them set into the model you need to use `PATCH`. Patch is not best practice, so I've set it to use PUT and sent the whole model. Usually the server-side code would receive PUT and expect the differences, which it would then merge. For now, this is close enough as long as you understand we normally do PUT and send just the differences...

<https://restcookbook.com/HTTP%20Methods/idempotency/>

## DataGrid docs (filtering)

<https://mui.com/x/react-data-grid/filtering/#QuickFilteringGrid.tsx>

## Environment Variables

<https://create-react-app.dev/docs/adding-custom-environment-variables/>