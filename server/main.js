import { Meteor } from 'meteor/meteor';

ServiceConfiguration.configurations.upsert(
  { service: 'google' },
  {
    $set: {
      loginStyle: "popup",
      clientId: "79617251768-7ab1bdn50fr9mm5jklpcjffu3r9fndgb.apps.googleusercontent.com",
      secret: "iECBk1_SVhAuR0-dxgsgSMoo"
    }
  }
);

ServiceConfiguration.configurations.upsert(
  { service: 'facebook' },
  {
    $set: {
      loginStyle: 'popup',
      appId: '196447867795092',
      secret: '661783b9165324b5f8be3c28bf2383b4'
    }
  }
)

ServiceConfiguration.configurations.upsert(
  { service: 'github' },
  {
    $set: {
      loginStyle: 'popup',
      clientId: 'da0e6be9fe5fc3f13282',
      secret: '336bd622a9dbcd396e84ecdf1a6e4c2908ead7f7'
    }
  }
)

ServiceConfiguration.configurations.upsert(
  { service: 'twitter' },
  {
    $set: {
      loginStyle: 'popup',
      consumerKey: 'ZTZs0tLPhgyULKzTSye5hgjHp',
      secret: 'aikdJl9fgcSmVMEjctt5Xi0VVjycAAen0kdYbLyNpNn0RPyazS'
    }
  }
)

Meteor.startup(() => {
  // code to run on server at startup
});
