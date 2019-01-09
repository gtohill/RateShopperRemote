from mysql.connector import connect


def select_all():
    cnx = connect(user='root', password='Gt153328@', host='localhost', database='exceldb')
    cursor = cnx.cursor()
    query = ("SELECT DISTINCT id, company, one, two, three, four, five FROM Rate ORDER BY company")
    cursor.execute(query)
    items = cursor.fetchall()
    cnx.commit()
    cnx.close()
    return items


def insert_rates(company, one, two, three, four, five):
    cnx = connect(user='root', password='Gt153328@', host='localhost', database='exceldb')
    cursor = cnx.cursor()
    try:
        query = ("INSERT INTO Rate(company, one, two, three, four, five) VALUES(%s,%s,%s,%s,%s,%s)")
        insert_rate = (company, one, two, three, four, five)
        cursor.execute(query, insert_rate)
        cnx.commit()
        cnx.close()
        return True

    except Exception as e:
        print(e)
        return False

