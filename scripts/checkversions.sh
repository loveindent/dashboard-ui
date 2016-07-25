#!/bin/bash
# Check for node && npm versions to be present on the system according to the package.json defined version.

if [[ "$NPM_CONFIG_PRODUCTION" = "true" ]]; then
    exit 0
fi

pkgNodeVersion=`cat package.json | jq -r '.engines.node'`
curNodeVersion=`node --version`

if [[ "v$pkgNodeVersion" != "$curNodeVersion" ]]; then
  echo "ERROR : Node version is $curNodeVersion and should be $pkgNodeVersion"
  exit -1
fi

# pkgNpmVersion=`cat package.json | jq -r '.engines.npm'`
# curNpmVersion=`npm --version`
#
# if [[ "$pkgNpmVersion" != "$curNpmVersion" ]]; then
#   echo "WARN : Npm version is $curNpmVersion and should be $pkgNpmVersion"
# fi
