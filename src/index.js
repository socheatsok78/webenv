import { parse } from 'dotenv'

window.env = (window.env || {})

function _log(message) {
    console.log(`[dotenv][DEBUG] ${message}`)
}

function _resolveHome(envPath) {
    return envPath[0] === '~' ? [location.origin, envPath.slice(1)].join('/') : envPath
}

async function config(options) {
    let dotenvPath = '.env'
    const debug = Boolean(options && options.debug)
    const override = Boolean(options && options.override)

    if (options) {
        if (options.path != null) {
            dotenvPath = _resolveHome(options.path)
        }
    }

    try {
        // Specifying an encoding returns a string instead of a buffer
        const dotenvRes = await fetch(dotenvPath)
        const dotenvBuffer = await dotenvRes.text()
        const parsed = parse(dotenvBuffer)

        Object.keys(parsed).forEach(function (key) {
            if (!Object.prototype.hasOwnProperty.call(window.env, key)) {
                window.env[key] = parsed[key]
            } else {
                if (override === true) {
                    window.env[key] = parsed[key]
                }

                if (debug) {
                    if (override === true) {
                        _log(`"${key}" is already defined in \`window.env\` and WAS overwritten`)
                    } else {
                        _log(`"${key}" is already defined in \`window.env\` and was NOT overwritten`)
                    }
                }
            }
        })

        return { parsed }
    } catch (e) {
        if (debug) {
            _log(`Failed to load ${dotenvPath} ${e.message}`)
        }

        return { error: e }
    }
}


const WebenvModule = {
    parse,
    config
}

export  {
    WebenvModule,
    parse,
    config
}
