import json

def walk(node):
    # for key, value in node.items():
    #     print(key, type(value))
    #     if type(value) is dict:
    #         print('++',key)
    #         walk(node[key])

    for elem in node['blocks']:
        for kv in elem.keys():
            print(kv)

        print("---")


def iterate_nested_json_for_loop(json_obj):
    print("++++")
    for key, value in json_obj.items():
        if isinstance(value, dict):
            iterate_nested_json_for_loop(value)
        else:
            print(f"{key}: {value}")
            print('============') 


if __name__ == "__main__":
    text = input()

    # print(text)

    data = json.loads(text)
    for d in data['blocks']:
        iterate_nested_json_for_loop(d)
    # print(data.keys())
    # print(data['blocks'])

    # print(json.dumps(data, indent=2))

