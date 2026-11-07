// One-off cross-build helper: packages the Windows x64 build from macOS.
// Only zip/7z targets — the NSIS installer and portable target need
// makensis, which on a non-Windows host runs through Wine (not installed
// here), so they're left out. Not wired into package.json scripts; this
// is for local, ad-hoc use.
import { Arch, build, Platform } from 'electron-builder'
import config from './ebuilder.config.mjs'

const targets = Platform.WINDOWS.createTarget(['zip', '7z'], Arch.x64)
const output = await build({ targets, config, publish: 'never' })
console.log(output)
