Hide Src Diff
function(c, a) {
  let consts = #db.f({ _id: 'consts' }).first(),
    params = {
      ez_letter: 'a',
      ez_fib: 1
    },
    out,
    lock,
    capture

  for (;;) {
    out = a.target.call(params)

    // `VLOCK_ERROR`
    // Denied access by HALPERYON SYSTEMS `NEZ_21` lock.

    // `VLOCK_ERROR`
    // Denied access by HALPERYON SYSTEMS `NEZ_26` lock.

    // `VLOCK_ERROR`
    // Denied access by HALPERYON SYSTEMS `NEZ_112` lock.
    if (capture = /`N(EZ_...?)`/.exec(out)) {
      lock = capture[1]
      params[lock] = consts.u[0]
    }

    // `VLOCK_ERROR`
    // `V"foo"` is not the correct unlock command.
    else if (/is not the correct unlock command/.test(out)) {
      let index = consts.u.indexOf(params[lock])
      params[lock] = consts.u[index + 1]
    }

    // `VLOCK_ERROR`
    // `V"a"` is not the correct letter.
    else if (/is not the correct letter/.test(out)) {
      params.ez_letter = String.fromCharCode(params.ez_letter.charCodeAt(0) + 1)
    }

    // `VLOCK_ERROR`
    // `V1` is not the correct Fibonacci number.
    else if (/is not the correct Fibonacci/.test(out)) {
      let index = consts.f.indexOf(params.ez_fib)
      params.ez_fib = consts.f[index + 1]
    }

    // Unhandled message
    else {
      return out
    }
  }
}