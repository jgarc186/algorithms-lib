# big O(n) time complexity and O(n) space complexity
def palindrome_check(chars: str) -> bool:
    reverse: list[str] = []
    end: int = len(chars) - 1

    while end >= 0:
        reverse.append(chars[end])
        end -= 1

    return chars == ''.join(reverse)
