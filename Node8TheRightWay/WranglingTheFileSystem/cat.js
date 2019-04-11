#!/usr/bin/env node
'use strict';
const fileName = process.argv[2]
if (fileName)
    require('fs').createReadStream(fileName).pipe(process.stdout)  
else
    process.stdin.pipe(process.stdout)
