import random

asignados = {}

funcionalidades = {1:"Gestión de usuario",2:"Gestión de permisos",3:"Gestionar fichas técnicas",4:"Gestión de inventarios"}
names = ['Nathalia', 'Pol P', 'Carlos Guzman', 'Juliana']

random.shuffle(names)

for i in range(0,4):
    asignados[names[i-1]] = funcionalidades[i+1]

print("\n")
print('\n'.join("{}: {}".format(k, v) for k, v in asignados.items()))
print("\n")