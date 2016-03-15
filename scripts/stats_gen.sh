piHost=$(hostname)
size=$(df -h /|sed '1d'| awk '{ print $2}')
used=$(df -h /|sed '1d' | awk '{ print $3}')
usedPercent=$(df -h /|sed '1d' | awk '{ print $5}')
upTimeDays=$(uptime | awk '{print $3}')
upTimeHours=$(uptime | awk '{print $5}' | tr ',' '.')
loadAverages=$(uptime | awk '{ print $10,$11,$12}')
FILE="status.json"
jsonStr="{\"devName\":\"${piHost}\",\"space\":\"${used} of ${size} (${usedPercent})\",\"hostUpTime\":\"${upTimeDays} Day(s) and ${upTimeHours}\",\"loadAverages\":\"${loadAverages}\",\"btDevStatus\":\"N/A\",\"connectedDevice\":\"N/A\",\"btConnTime\":\"N/A\"}"
cd ../data/
echo $jsonStr > $FILE
cd ../scripts/