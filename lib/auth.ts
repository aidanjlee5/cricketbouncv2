import {supabase} from  'lib/supabaseClient'

async function signUpNewUser() {
    const { data, error } = await supabase.auth.signUp({
      email: 'valid.email@supabase.io',
      password: 'example-password',
      options: {
        emailRedirectTo: 'https://example.com/welcome',
      },
    })
  }

  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: 'valid.email@supabase.io',
      password: 'example-password',
    })
  }

  await supabase.auth.resetPasswordForEmail('valid.email@supabase.io', {
    redirectTo: 'http://example.com/account/update-password',
  })

  const new_password = 'new-example-password';
  await supabase.auth.updateUser({ password: new_password })

  const { data, error: signUpError } = await supabase.auth.signUp({
    phone: '+13334445555',
    password: 'some-password',
  })

  const {
    data: { session },
    error: verifyOtpError,
  } = await supabase.auth.verifyOtp({
    phone: '+13334445555',
    token: '123456',
    type: 'sms',
  })

  const { user, error: signInError } = await supabase.auth.signInWithPassword({
    phone: '+13334445555',
    password: 'some-password',
  })