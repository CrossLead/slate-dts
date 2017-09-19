

generate() {
  local PACKAGE=$1
  local VERBOSE=$2
  local NODE_BIN=`npm bin`
  echo "generating typings for $PACKAGE..."
  echo "  cleaning up old files..."
  rm -rf ./.tmp
  rm -rf ./packages/$PACKAGE/**/*.d.ts ./packages/$PACKAGE/*.d.ts 2> /dev/null
  mkdir -p ./.tmp
  cp -r ./slate/packages/$PACKAGE/ ./.tmp/$PACKAGE
  cp ./tsconfig.json ./.tmp/$PACKAGE/
  echo "  renaming..."
  rename -S .js .tsx ./.tmp/$PACKAGE/src/**/*.js ./.tmp/$PACKAGE/src/*.js 2> /dev/null
  echo "  compiling..."
  $NODE_BIN/tsc -p ./.tmp/$PACKAGE/ > ./compiler-errors.txt
  echo "  copying..."
  rm ./.tmp/$PACKAGE/dist-dts/**/*.js ./.tmp/$PACKAGE/dist-dts/*.js 2> /dev/null
  cp -r ./.tmp/$PACKAGE/dist-dts/ ./packages/$PACKAGE

  echo "done!"
}

PACKAGES=$(cd slate/packages && ls -d */)

for package in $PACKAGES; do
  generate ${package%/}
done;