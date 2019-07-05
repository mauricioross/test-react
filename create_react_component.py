import os
import sys
# author: Mauricio Ross
# description: make a basic component for ReactJs
nameComponent = str(sys.argv[1])
indexjs = "export { default } from './"+nameComponent+"'"
componente = "import React from 'react';\
        \nimport './"+nameComponent+".scss';\
        \nclass " + nameComponent+" extends React.Component {\
        \n\tconstructor(props) {\
        \n\t\tsuper(props);\
        \n\t\t\tthis.state = {}\
        \n\t}\
        \n\trender() {\
        \n\t\treturn(\
        \n\t\t<div>"+nameComponent+"!</div>\
        \n\t\t);\
        \n\t}\
        \n}\
        \nexport default "+nameComponent+";"
sass = '/* sass */'

def escribirArchivo(_file, _content):
    f = open(_file, 'w+')
    f.write(_content)
    f.close()

def makeFolderComponent(_dirBase):
    os.mkdir(_dirBase+"/components")


def makeComponent():
    existe = os.path.isdir(dirBase+'/components/'+str(sys.argv[1]))
    if(existe is False):
        folder = dirBase+'/components/'+str(sys.argv[1])
        os.mkdir(folder)
        escribirArchivo(folder+'/'+nameComponent+'.jsx', componente)
        escribirArchivo(folder+'/index.js', indexjs)
        escribirArchivo(folder+'/'+nameComponent+'.scss', sass)
        print("Componente "+nameComponent+" creado exitosamente.")
    else:
        print('La carpeta de componente '+nameComponent+' ya existe.')

if len(sys.argv) >= 2:
    dirBase = os.getcwd()+'/src'
    if(os.path.isdir(dirBase+'/components') is False):
        print('El directorio < components > no existe, desea crearlo (y/n)')
        crear = input()
        if(crear == 'y'):
            makeFolderComponent(dirBase)
            makeComponent()
        else:
            print('El directorio no ha sido creado')
    else:
        makeComponent()
else:
    print("Este programa necesita un parámetro")
