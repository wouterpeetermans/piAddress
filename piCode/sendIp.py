import requests
import socket

def getNetworkIp():
	s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
	s.connect(('google.com', 0))
	return s.getsockname()[0]


ip = getNetworkIp()
payload = {'name':'wouter', 'address':ip }
requests.post("http://www.wouterpeetermans.com/api/addresses", json = payload)

