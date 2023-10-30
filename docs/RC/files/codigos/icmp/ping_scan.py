'''
Escaneando a rede utilizando ping.

Requirements:
- ping3
- tqdm
pip3 install ping3 tqdm
'''

from ping3 import ping
from tqdm import tqdm

timeout= 0.05

o1_ini, o1_end = 192, 192
o2_ini, o2_end = 168, 168
o3_ini, o3_end = 0, 0
o4_ini, o4_end = 1, 254

def get_n_ips():
    n_o1 = o1_end-o1_ini+1
    n_o2 = o2_end-o2_ini+1
    n_o3 = o3_end-o3_ini+1
    n_o4 = o4_end-o4_ini+1
    n = n_o1 * n_o2 * n_o3 * n_o4
    return(n)

def ip_generator():
    for o1 in range(o1_ini, o1_end+1):
        for o2 in range(o2_ini, o2_end+1):
            for o3 in range(o3_ini, o3_end+1):
                for o4 in range(o4_ini, o4_end+1):
                    ip = f'{o1}.{o2}.{o3}.{o4}'
                    yield ip


hosts = {}

print('Escaneando rede...')
for ip in tqdm(ip_generator(), total = get_n_ips()):
    time = ping(ip, timeout=timeout)
    if time:
        hosts[ip] = time

print('Hosts online:')
for host in hosts:
    print(host)
print('Tempo médio:',sum(hosts.values())/len(hosts.values()), 'segundos')
