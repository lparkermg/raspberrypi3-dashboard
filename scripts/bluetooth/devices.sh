devicesFound=$(hcitool dev | sed '1d')
deviceArray=$(mapfile -t $devicesFound)
devJson="{["
foreach i (deviceArray)
  devJson+="\"$($i | awk '{print $0}')\":\"$($i | awk '{print $1}')\","
end
devJson+="}"
FILE="devices.json"
cd ../../data
echo $devJson > $FILE
cd ../scripts/bluetooth
