# run e2e test
nx run tests-e2e:e2e 
nx run tests-e2e:open-cypress

# serve applications
nx run-many -t serve -p app1 app2