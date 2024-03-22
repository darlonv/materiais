from pandocfilters import toJSONFilter, Emph, Para, CodeBlock
import pandoc
from pandoc.types import *


def behead(key, value, format, meta):
    if key == 'CodeBlock':
        return CodeBlock(["66"])


def abc(key, value, format, _):
    print(key)
    return None


def get_first_header_title(doc):
    blocks = doc[1]  # doc: Pandoc(Meta, [Block])
    print(blocks)
    # header = blocks[0]
    # title_inlines = header[2] # header: Header(Int, Attr, [Inline])
    # return pandoc.write(title_inlines).strip()


def is_notes(elt):
    if isinstance(elt, Div):
        attr = elt[0]  # elt: Div(Attr, [Block])
        classes = attr[1]  # attr :(Text, [Text], [(Text, Text)])
        return "notes" in classes
    else:
        return False


def count_words(doc):
    in_notes, depth = False, None
    count = 0
    for elt, path in pandoc.iter(doc, path=True):
        if in_notes and len(path) > depth:
            pass
        elif is_notes(elt):
            in_notes, depth = True, len(path)
        else:
            in_notes, depth = False, None
            if isinstance(elt, Str) and not in_notes:
                count += 1
    return count


def de_emphasize(doc):
    locations = []
    for elt, path in pandoc.iter(doc, path=True):
        print('++', elt)
        if isinstance(elt, Emph):
            holder, index = path[-1]
            locations.append((elt, holder, index))
    print(locations)
    # Perform the change in reverse document order
    # not to invalidate the remaining matches.
    for elt, holder, index in reversed(locations):
        assert isinstance(elt, Emph)
        inlines = elt[0]  # elt: Emph([Inline])
        holder[index:index+1] = inlines


if __name__ == "__main__":
    # toJSONFilter(abc)
    # print('a')
    text = "**strong**, *emphasized*, normal"
    doc = pandoc.read(text)
    de_emphasize(doc)
    print(pandoc.write(doc).strip())
