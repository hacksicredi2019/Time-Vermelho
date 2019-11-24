from location.models import Location
from school.models import School

import csv

with open('dataframe_v1.csv') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',')
    for row in spamreader:
        row[2] = row[2].split(row[3])[0][0:-2]
        try:
            int(row[1].split(' ')[0]) 
            row[1] = ' '.join(row[1].split(' ')[1:])

        except ValueError:
            pass
        loc = Location(
            endereco=row[2],
            bairro=row[3],
            latitude=row[4],
            longitude=row[5]
        )
        loc.save()
        scho = School(
            nro_entidade=row[0],
            name=row[1],
            location=loc
        )
        scho.save()
        print(row) 

