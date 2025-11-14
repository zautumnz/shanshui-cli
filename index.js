#!/usr/bin/env node

import fs from 'node:fs'
import app from './src/index.js'
const destFile = process.argv[2] || 'shanshui.svg'

const svg = app.update()
fs.writeFileSync(destFile, svg)
