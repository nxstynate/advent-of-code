
filename = 'notes.txt'

def splitIntoCommas():
    with open(filename, 'r') as file: 
        lines = file.readlines() 

    lines = [line.strip() + ',' for line in lines] 

    with open(filename, 'w') as file: 
        file.writelines(lines)

def removeCommas():
    with open(filename, 'r') as file: 
        lines = file.readlines() 

    lines = [line.strip(',') + ' ' for line in lines] 

    with open(filename, 'w') as file: 
        file.writelines(lines)

def splitIntoQuotations():
    with open(filename, 'r') as file: 
        lines = file.readlines() 

    lines = [line.strip() for line in lines]
    characters = [char for line in lines for char in line] 
    quoted_characters = ["'" + char for char in characters] 
    result_string = ''.join(quoted_characters) 

    with open(filename, 'w') as file: 
        file.writelines(result_string)

    print(result_string)

def main():
    # splitIntoCommas()
    removeCommas()
    # splitIntoQuotations()


if __name__ == '__main__':
    main()

