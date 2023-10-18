We developed this with a raspberry pi and DHT11 sensor.
sensor.py reads the temperature and humidity data every 10 minutes and writes it to the data.json file that is read by the index.js to be displayed on the webpage.

The webpage can run on the raspberry pi with the python server and when the python program (sensor.py) is running, the data file is updated every 10 minutes changing the webpage data.
