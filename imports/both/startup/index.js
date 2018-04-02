import { AccountsReact } from 'meteor/meteoreact:accounts'

AccountsReact.configure({
  confirmPassword: false,
  oauth: {
    google: {
      forceApprovalPrompt: true
    }  
  }
})
