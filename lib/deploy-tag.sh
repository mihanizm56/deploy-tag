#!/bin/bash

NEXT_TAG=$1

git tag "${NEXT_TAG}"

git push --tags

echo -en ""
echo -en "Deployed tag: \e[40;1;42m $NEXT_TAG \e[m\n"



