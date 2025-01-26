def palindrome_check(chars) -> bool:
    reverse = []
    end = len(chars) - 1

    while end >= 0:
        reverse.append(chars[end])
        end -= 1

    return chars == ''.join(reverse)
