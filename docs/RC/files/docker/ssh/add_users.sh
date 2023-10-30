#!/bin/bash

#Link to CSV user,password
FILE_LINK='https://docs.google.com/spreadsheets/d/e/2PACX-1vTLK2iFCehkk2Leb8MBa2hiLSR6Gd2pg2Fpja1QvdtKUb7r3uYIdnJJ5G42EW7YnrEatPH4scJ_lPcF/pub?gid=0&single=true&output=csv'

echo 'Getting users file...'
wget --quiet ${FILE_LINK} -O users.csv

#add \n to ending file
sed -i -e '$a\' users.csv

echo "Adding users... "
while IFS=',' read -r user pass
do
	echo -n "${user}.. "
	#echo "useradd -m -s /bin/bash -p ${pass} ${user}"
	useradd -m -s /bin/bash -p ${pass} ${user}
done < <( tail -n +2 users.csv )
echo "done."
