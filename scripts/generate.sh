
#
# generate typings for all packages in slate/packages
#
run() {
  rm -rf ./slate
  rm -rf ./slate-plugins

  echo "cloning latest version of slate..."
  git clone git@github.com:ianstormtaylor/slate.git --depth 1 2> /dev/null
  git clone git@github.com:ianstormtaylor/slate-plugins.git --depth 1 2> /dev/null

  cp -r ./slate-plugins/packages/* ./slate/packages

  local PACKAGES=$(cd slate/packages && ls -d */)

  for package in $PACKAGES; do
    generate ${package%/}
  done;

    # prettier
  `npm bin`/prettier --write ./packages/**/*.ts

  rm -rf ./slate
  rm -rf ./slate-plugins
  rm -rf ./.tmp
}

#
# generate typings for a specific package
#
# @param package : string name of package to generate
#
generate() {
  local PACKAGE=$1
  local NODE_BIN=`npm bin`
  echo "generating typings for $PACKAGE..."

  # clean
  rm -rf ./.tmp ./packages/$PACKAGE/**/*.d.ts ./packages/$PACKAGE/*.d.ts 2> /dev/null

  # make temp and move package source to temp
  mkdir -p ./.tmp
  cp -r ./slate/packages/$PACKAGE/ ./.tmp/$PACKAGE
  cp ./tsconfig.json ./.tmp/$PACKAGE/

  # rename js to ts
  rename -S .js .tsx ./.tmp/$PACKAGE/src/**/*.js ./.tmp/$PACKAGE/src/*.js 2> /dev/null

  #compile, output dts
  $NODE_BIN/tsc -p ./.tmp/$PACKAGE/ > /dev/null

  # copy .d.ts files to main package folder
  rm ./.tmp/$PACKAGE/dist-dts/**/*.js ./.tmp/$PACKAGE/dist-dts/*.js 2> /dev/null
  cp -r ./.tmp/$PACKAGE/dist-dts/ ./packages/$PACKAGE

  # combine individual .d.ts files
  node ./scripts/generate-package-json.js $PACKAGE > ./packages/$PACKAGE/package.json
  node ./scripts/dts-bundle.js $PACKAGE
  node ./scripts/definition-modifications.js $PACKAGE

  # cleanup
  rm -rf ./packages/$PACKAGE/**/*.d.ts ./packages/$PACKAGE/index.d.ts 2> /dev/null

  echo "...done!"
}

#
# do it
#
run