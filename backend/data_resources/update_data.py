from school.models import School, ESTADUAL, FEDERAL, PARTICULAR, MUNICIPAL
from django.core.exceptions import ValidationError

import csv

type_dict = {
    '1': FEDERAL,
    '2': ESTADUAL,
    '3': MUNICIPAL,
    '4': PARTICULAR,
}

translate_dict = {
    'conveniada': 12,
    'agua': 13,
    'esgoto': 14,
    'lab_info': 15,
    'lab_ciencia': 16,
    'quadra': 17,
    'biblioteca': 18,
    'parque_infantil': 19,
    'pne': 20,
    'internet': 23,
    'nro_funcionarios': 24,
    'merenda': 25,
    'aee': 26,
    'atividade_extracurricular': 27,
}

with open('dataframe_v1.csv') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',')
    for row in spamreader:
        row[2] = row[2].split(row[3])[0][0:-2]
        try:
            int(row[1].split(' ')[0]) 
            row[1] = ' '.join(row[1].split(' ')[1:])

        except ValueError:
            pass
        objec = School.objects.get(nro_entidade=row[0])

        for attribute in translate_dict.keys():
            item = row[translate_dict[attribute]]
            print(objec.name)
            print(item)
            if(type(getattr(objec, attribute)) == bool and item != ''):
                item = bool(int(item.split('.')[0]))

            elif(type(getattr(objec, attribute)) == int and item != ''):
                item = int(item.split('.')[0])

            else:
                item = False
            print(item)

            try:
                setattr(objec, attribute, item)

                objec.category = type_dict[row[11]]
                objec.save()
            except Exception as exc:
                print(exc)

