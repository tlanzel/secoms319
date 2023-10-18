import time
import board
from datetime import datetime
import adafruit_dht
#Initial the dht device, with data pin connected to:
dhtDevice = adafruit_dht.DHT11(board.D4)
while True:
    try:
         # Print the values to the serial port
         temperature_c = dhtDevice.temperature
         temperature_f = temperature_c * (9 / 5) + 32
         humidity = dhtDevice.humidity
         now = datetime.now() # current date and time
         format = '%m/%d/%Y %H:%M'
         date_time = now.strftime(format)



         print("Temp: {:.1f} F / {:.1f} C    Humidity: {}% "
               .format(temperature_f, temperature_c, humidity))

         json = "{ \"t\": " + str(temperature_f) + ", \"h\": " + str(humidity) + ",\"d\": \"" + date_time + "\"}"

         fp = open('./data.json', 'w') #replaces/updates previous data
         fp.write(json)
         fp.close()

    except RuntimeError as error:     # Errors happen fairly often, DHT's are hard to read, just keep going
         print(error.args[0])
    time.sleep(600.0)
