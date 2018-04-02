import { Meteor } from 'meteor/meteor'

const { services } = Meteor.settings
Object.keys(services)
  .forEach(service => {
    ServiceConfiguration.configurations.upsert(
      { service },
      {
        $set: services[service]
      }
  )
})
