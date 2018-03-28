import { AccountsReact } from 'meteor/meteoreact:accounts'

AccountsReact.configure({
  confirmPassword: false,
  // mapStateToRoute: {
  //   signIn: '/sign-in',
  //   signUp: '/sign-up',
  //   forgotPwd: '/forgot-password',
  //   changePwd: '/change-password',
  //   resetPwd: '/reset-password'
  // }
})
