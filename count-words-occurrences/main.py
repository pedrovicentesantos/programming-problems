import re

word = 'Lorem dolor ipsum dolor sit amet consectetur adipisicing elit. Pariatur asperiores, voluptatum qui nemo porro provident quod sit nisi quibusdam quae, fugit repellendus, non ipsam eveniet recusandae. Perferendis quibusdam obcaecati commodi.'

clean_word = re.sub('[^\s\d\w]', '', word)
word_list = clean_word.split(' ')

count_object = {}

for word in word_list:
    word = word.lower()
    if (not count_object.get(word)):
        count_object[word] = 1
    else:
        count_object[word] += 1

print(count_object)

# Search occurrences
search_word = 'Dolor'
search_word = search_word.lower()

if (count_object.get(search_word)):
    print(count_object[search_word])
    
# Get unique words
unique_words = set(word_list)

print(unique_words)