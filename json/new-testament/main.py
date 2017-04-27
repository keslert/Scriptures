import json


with open('new-testament.json') as data_file:
  data = json.load(data_file)
  for book in data["books"]:

    filename = book["book"].lower().replace(" ", "-")
    with open(filename+'.json', 'w') as out_file:
      _book = {
        "work": "Book of Mormon",
        "book": book["book"],
        "chapters": [],
      }
      for chapter in book["chapters"]:
        _chapter = {"verses": []}
        _book["chapters"].append(_chapter)
        for verse in chapter["verses"]:
          _chapter["verses"].append({"text": verse["text"]})
          
      out_file.write(json.dumps(_book))