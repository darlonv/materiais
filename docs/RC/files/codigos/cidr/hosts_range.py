class IP:
    ip_bin           = '0'*32
    mask_bin         = '0'*32
    ip_network_bin   = '0'*32
    ip_broadcast_bin = '1'*32
    
    ip = ''
    mask = ''
    network = ''
    broadcast = ''
    
    network_dec = 0
    broadcast_dec = 0
    
    def __init__(self, ip_mask):
        self.ip, mask = ip_mask.split('/')
        mask = int(mask)
        
        self.ip_bin = ''
        for octet in self.ip.split('.'):
            self.ip_bin += self.octet_dec2bin(octet)
            
        self.mask_bin = '1'*mask + '0'*(32-mask)
        self.mask = self.bin2dd(self.mask_bin)
        
        self.ip_network_bin = self.calc_network_bin(self.ip_bin, self.mask_bin)
        self.ip_broadcast_bin = self.calc_broadcast_bin(self.ip_bin, self.mask_bin)
        
        self.network = self.bin2dd(self.ip_network_bin)
        self.broadcast = self.bin2dd(self.ip_broadcast_bin)
        
        self.network_dec = self.bin2dec(self.ip_network_bin)
        self.broadcast_dec = self.bin2dec(self.ip_broadcast_bin)
    
    def octet_dec2bin(self, octet):
        return f'{int(octet):b}'.zfill(8)
    
    def bin2dec(self, octet_bin):
        val = 0
        pot = 0
        for bit in octet_bin[::-1]:
            val += int(bit)*2**pot
            pot+=1
        return val
    
    def calc_network_bin(self, ip_bin, mask_bin):
        network = ''
        for bit_ip, bit_mask in zip(ip_bin, mask_bin):
            if bit_mask == '1':
                network += bit_ip
            else:
                network += '0'
        return network
    
                
    def calc_broadcast_bin(self, ip_bin, mask_bin):
        broadcast = ''
        for bit_ip, bit_mask in zip(ip_bin, mask_bin):
            if bit_mask == '1':
                broadcast += bit_ip
            else:
                broadcast += '1'
        return broadcast
    
    def bin2dd(self, ip_bin):
        
        ip = str(self.bin2dec(ip_bin[0:8]))+'.'
        ip+= str(self.bin2dec(ip_bin[8:16]))+'.'
        ip+= str(self.bin2dec(ip_bin[16:24]))+'.'
        ip+= str(self.bin2dec(ip_bin[24:32]))
        
        return ip
    
    def ip_dec2bin(self, ip_dec):
        return f'{ip_dec:b}'.zfill(32)
    
    def hosts(self):
        for ip in range(self.network_dec+1, self.broadcast_dec):
            ip_bin = self.ip_dec2bin(ip)
            yield self.bin2dd(ip_bin)

x = IP('192.168.15.100/27')

print('IP           :', x.ip)
print('Mask         :', x.mask)
print('Network      :', x.network)
print('Broadcast    :', x.broadcast)

print('IP bin       :', x.ip_bin)
print('Mask bin     :', x.mask_bin)
print('Network bin  :', x.ip_network_bin)
print('Broadcast bin:', x.ip_broadcast_bin)

print('Network dec  :', x.network_dec)
print('Broadcast dec:', x.broadcast_dec)

count = 0
print('Host addresses: ')
for host in x.hosts():
    print('\t',host)
    count+=1
print('N hosts:', count)