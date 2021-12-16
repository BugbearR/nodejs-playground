#!/bin/sh

WAIT_SEC=$1
EXIT_STATUS=$2

echo start $$
for i in $(seq 1 $WAIT_SEC)
do
    echo $$
    date '+%Y%m%dT%H%M%S'
    sleep 1
done
echo end $$
exit $EXIT_STATUS
