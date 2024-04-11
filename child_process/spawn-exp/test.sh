#!/bin/sh

for i in $(seq 1 10)
do
  case $(( $(od -vAn -N1 -tu1 </dev/random) % 2)) in
  1)
    echo "Hello $i"
    ;;
  0)
    echo "Error $i" 1>&2
    ;;
  esac
  sleep 1
done
