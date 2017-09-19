publish() {
  local PACKAGES=$(cd slate/packages && ls -d */)

  for package in $PACKAGES; do
    read -p "publish new version of @crosslead/$package?" -n 1 -r
    echo    # (optional) move to a new line
    if [[ ! $REPLY =~ ^[Yy]$ ]]
    then
        [[ "$0" = "$BASH_SOURCE" ]] && exit 1 || return 1 # handle exits from shell or function but don't exit interactive shell
    fi
    cd packages/$package && npm publish
  done;
}

publish