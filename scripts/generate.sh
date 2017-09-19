
#
# generate typings for all packages in slate/packages
#
run() {
  rm -rf ./slate

  echo "cloning latest version of slate..."
  git clone git@github.com:ianstormtaylor/slate.git --depth 1 2> /dev/null

  local PACKAGES=$(cd slate/packages && ls -d */)

  for package in $PACKAGES; do
    generate ${package%/}
  done;

  rm -rf ./slate
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
  rm -rf ./.tmp
  rm -rf ./packages/$PACKAGE/**/*.d.ts ./packages/$PACKAGE/*.d.ts 2> /dev/null
  mkdir -p ./.tmp
  cp -r ./slate/packages/$PACKAGE/ ./.tmp/$PACKAGE
  cp ./tsconfig.json ./.tmp/$PACKAGE/
  rename -S .js .tsx ./.tmp/$PACKAGE/src/**/*.js ./.tmp/$PACKAGE/src/*.js 2> /dev/null
  $NODE_BIN/tsc -p ./.tmp/$PACKAGE/ > /dev/null
  rm ./.tmp/$PACKAGE/dist-dts/**/*.js ./.tmp/$PACKAGE/dist-dts/*.js 2> /dev/null
  cp -r ./.tmp/$PACKAGE/dist-dts/ ./packages/$PACKAGE
  node ./scripts/generate-package-json.js $PACKAGE > ./packages/$PACKAGE/package.json
  echo "...done!"
}

#
# do it
#
run