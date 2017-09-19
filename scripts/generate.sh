

generate() {
  local PACKAGE=$1
  local NODE_BIN=`npm bin`
  echo "generating typings for $PACKAGE:"
  echo "\tcleaning up old files..."
  rm -rf ./.tmp
  rm -rf ./typings/$PACKAGE
  mkdir -p ./.tmp
  cp -r ./slate/packages/$PACKAGE/ ./.tmp/$PACKAGE
  cp ./tsconfig.json ./.tmp/$PACKAGE/
  echo "\trenaming..."
  rename -S .js .tsx ./.tmp/$PACKAGE/src/**/*.js ./.tmp/$PACKAGE/src/*.js
  echo "\tcompiling..."
  $NODE_BIN/tsc -p ./.tmp/$PACKAGE/ > ./compiler-errors.txt
  echo "\tcopying..."
  rm ./.tmp/$PACKAGE/dist-dts/**/*.js ./.tmp/$PACKAGE/dist-dts/*.js
  cp -r ./.tmp/$PACKAGE/dist-dts/ ./typings/$PACKAGE

  echo "done!"
}

generate "slate"
generate "slate-react"