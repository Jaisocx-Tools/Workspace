#!/usr/bin/env bash

NPMLIB_EXAMPLE_HTML_FILENAME="index.example.html"



thisPath="$(realpath "$(dirname "$(realpath "$0")")")"



npm_package_name="$1"
npm_package_ver="$2"
to_place_npm_package_folder_path="$(realpath "$3")"

npm_package_name_and_ver="${npm_package_name}@${npm_package_ver}"


cd "${to_place_npm_package_folder_path}"
npm install "${npm_package_name_and_ver}"

cd "node_modules/${npm_package_name}"
npm install --save



cd "${thisPath}"



# 5. Open the example HTML in the default browser

commandname_1="xdg-open"
is_installed_1="$(whereis "${commandname_1}")"

commandname_2="open"
is_installed_2="$(whereis "${commandname_2}")"


npmlib_example_html_path="${to_place_npm_package_folder_path}/node_modules/${npm_package_name}/${NPMLIB_EXAMPLE_HTML_FILENAME}"

if [[ "${is_installed_1}" != "${commandname_1}:" ]]; then
  # echo "matched expr with ${commandname_1}"
  "$($commandname_1 "${npmlib_example_html_path}")"
elif  [[ "${is_installed_2}" != "${commandname_2}:" ]]; then
  # echo "matched expr with ${commandname_2}"
  "$($commandname_2 "${npmlib_example_html_path}")"
else
  echo -e "Please open ${NPMLIB_EXAMPLE_HTML_FILENAME} in your browser at path:\n ${npmlib_example_html_path}\n"
fi






