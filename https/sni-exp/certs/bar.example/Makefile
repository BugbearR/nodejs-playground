privkey.pem cert.pem: openssl.cnf
	openssl req -new -x509 -config openssl.cnf -newkey rsa:4096 -nodes -keyout privkey.pem -out cert.pem
